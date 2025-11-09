---
title: Oracle
description: Oracle documentation
---

# Oracle connector

<img src="../_static/img/oracle.png" class="connector-logo">

The Oracle connector allows querying and creating tables in an external Oracle
database. Connectors let Trino join data provided by different databases,
like Oracle and Hive, or different Oracle database instances.

## Requirements

To connect to Oracle, you need:

- Oracle 23 or higher.
- Network access from the Trino coordinator and workers to Oracle.
  Port 1521 is the default port.

## Configuration

To configure the Oracle connector as the `example` catalog, create a file
named `example.properties` in `etc/catalog`. Include the following
connection properties in the file:

```text
connector.name=oracle
# The correct syntax of the connection-url varies by Oracle version and
# configuration. The following example URL connects to an Oracle SID named
# "orcl".
connection-url=jdbc:oracle:thin:@example.net:1521:orcl
connection-user=root
connection-password=secret
```

The `connection-url` defines the connection information and parameters to pass
to the JDBC driver. The Oracle connector uses the Oracle JDBC Thin driver,
and the syntax of the URL may be different depending on your Oracle
configuration. For example, the connection URL is different if you are
connecting to an Oracle SID or an Oracle service name. See the [Oracle
Database JDBC driver documentation](https://docs.oracle.com/en/database/oracle/oracle-database/19/jjdbc/data-sources-and-URLs.html)
for more information.

The `connection-user` and `connection-password` are typically required and
determine the user credentials for the connection, often a service user. You can
use [secrets ](/docs//security/secrets) to avoid actual values in the catalog
properties files.

> **Note:** Oracle does not expose metadata comment via `REMARKS` column by default
in JDBC driver. You can enable it using `oracle.remarks-reporting.enabled`
config option. See [Additional Oracle Performance Extensions](https://docs.oracle.com/en/database/oracle/oracle-database/19/jjdbc/performance-extensions.html)
for more details.

By default, the Oracle connector uses connection pooling for performance
improvement. The below configuration shows the typical default values. To update
them, change the properties in the catalog configuration file:

```properties
oracle.connection-pool.max-size=30
oracle.connection-pool.min-size=1
oracle.connection-pool.inactive-timeout=20m
```

To disable connection pooling, update properties to include the following:

```text
oracle.connection-pool.enabled=false
```

<!-- Fragment not found: jdbc-authentication.fragment -->

### Multiple Oracle servers

If you want to connect to multiple Oracle servers, configure another instance of
the Oracle connector as a separate catalog.

To add another Oracle catalog, create a new properties file. For example, if
you name the property file `sales.properties`, Trino creates a catalog named
`sales`.

<!-- Fragment not found: jdbc-common-configurations.fragment -->

<!-- Fragment not found: query-comment-format.fragment -->

<!-- Fragment not found: jdbc-domain-compaction-threshold.fragment -->

<!-- Fragment not found: jdbc-case-insensitive-matching.fragment -->

### Fault-tolerant execution support

The connector supports [/admin/fault-tolerant-execution](/docs//admin/fault-tolerant-execution) of query
processing. Read and write operations are both supported with any retry policy.

## Querying Oracle

The Oracle connector provides a schema for every Oracle database.

Run `SHOW SCHEMAS` to see the available Oracle databases:

```
SHOW SCHEMAS FROM example;
```

If you used a different name for your catalog properties file, use that catalog
name instead of `example`.

> **Note:** The Oracle user must have access to the table in order to access it from Trino.
The user configuration, in the connection properties file, determines your
privileges in these schemas.

### Examples

If you have an Oracle database named `web`, run `SHOW TABLES` to see the
tables it contains:

```
SHOW TABLES FROM example.web;
```

To see a list of the columns in the `clicks` table in the `web`
database, run either of the following:

```
DESCRIBE example.web.clicks;
SHOW COLUMNS FROM example.web.clicks;
```

To access the clicks table in the web database, run the following:

```
SELECT * FROM example.web.clicks;
```

## Type mapping

Because Trino and Oracle each support types that the other does not, this
connector [modifies some types <type-mapping-overview>](#modifies some types <type-mapping-overview>) when reading or
writing data. Data types may not map the same way in both directions between
Trino and the data source. Refer to the following sections for type mapping in
each direction.

### Oracle to Trino type mapping

Trino supports selecting Oracle database types. This table shows the Oracle to
Trino data type mapping:

#### Oracle to Trino type mapping

| Oracle database type | Trino type | Notes |
|---|---|---|
| `NUMBER(p, s)` | `DECIMAL(p, s)` | See [](oracle-number-mapping) |
| `NUMBER(p)` | `DECIMAL(p, 0)` | See [](oracle-number-mapping) |
| `FLOAT[(p)]` | `DOUBLE` |  |
| `BINARY_FLOAT` | `REAL` |  |
| `BINARY_DOUBLE` | `DOUBLE` |  |
| `VARCHAR2(n CHAR)` | `VARCHAR(n)` |  |
| `VARCHAR2(n BYTE)` | `VARCHAR(n)` |  |
| `NVARCHAR2(n)` | `VARCHAR(n)` |  |
| `CHAR(n)` | `CHAR(n)` |  |
| `NCHAR(n)` | `CHAR(n)` |  |
| `CLOB` | `VARCHAR` |  |
| `NCLOB` | `VARCHAR` |  |
| `RAW(n)` | `VARBINARY` |  |
| `BLOB` | `VARBINARY` |  |
| `DATE` | `TIMESTAMP(0)` | See [](oracle-datetime-mapping) |
| `TIMESTAMP(p)` | `TIMESTAMP(p)` | See [](oracle-datetime-mapping) |

No other types are supported.

### Trino to Oracle type mapping

Trino supports creating tables with the following types in an Oracle database.
The table shows the mappings from Trino to Oracle data types:

> **Note:** For types not listed in the table below, Trino can't perform the `CREATE
TABLE <table> AS SELECT` operations. When data is inserted into existing
tables, `Oracle to Trino` type mapping is used.

#### Trino to Oracle Type Mapping

| Trino type | Oracle database type | Notes |
|---|---|---|
| `TINYINT` | `NUMBER(3)` |  |
| `SMALLINT` | `NUMBER(5)` |  |
| `INTEGER` | `NUMBER(10)` |  |
| `BIGINT` | `NUMBER(19)` |  |
| `DECIMAL(p, s)` | `NUMBER(p, s)` |  |
| `REAL` | `BINARY_FLOAT` |  |
| `DOUBLE` | `BINARY_DOUBLE` |  |
| `VARCHAR` | `NCLOB` |  |
| `VARCHAR(n)` | `VARCHAR2(n CHAR)` or `NCLOB` | See [](oracle-character-mapping) |
| `CHAR(n)` | `CHAR(n CHAR)` or `NCLOB` | See [](oracle-character-mapping) |
| `VARBINARY` | `BLOB` |  |
| `DATE` | `DATE` | See [](oracle-datetime-mapping) |
| `TIMESTAMP` | `TIMESTAMP(3)` | See [](oracle-datetime-mapping) |

No other types are supported.

### Mapping numeric types

An Oracle `NUMBER(p, s)` maps to Trino's `DECIMAL(p, s)` except in these
conditions:

- No precision is specified for the column (example: `NUMBER` or
  `NUMBER(*)`), unless `oracle.number.default-scale` is set.
- Scale (`s` ) is greater than precision.
- Precision (`p` ) is greater than 38.
- Scale is negative and the difference between `p` and `s` is greater than
  38, unless `oracle.number.rounding-mode` is set to a different value than
  `UNNECESSARY`.

If `s` is negative, `NUMBER(p, s)` maps to `DECIMAL(p + s, 0)`.

For Oracle `NUMBER` (without precision and scale), you can change
`oracle.number.default-scale=s` and map the column to `DECIMAL(38, s)`.

### Mapping datetime types

Writing a timestamp with fractional second precision (`p`) greater than 9
rounds the fractional seconds to nine digits.

Oracle `DATE` type stores hours, minutes, and seconds, so it is mapped
to Trino `TIMESTAMP(0)`.

> **Warning:** Due to date and time differences in the libraries used by Trino and the
Oracle JDBC driver, attempting to insert or select a datetime value earlier
than `1582-10-15` results in an incorrect date inserted.

### Mapping character types

Trino's `VARCHAR(n)` maps to `VARCHAR2(n CHAR)` if `n` is no greater
than 4000. A larger or unbounded `VARCHAR` maps to `NCLOB`.

Trino's `CHAR(n)` maps to `CHAR(n CHAR)` if `n` is no greater than 2000.
A larger `CHAR` maps to `NCLOB`.

Using `CREATE TABLE AS` to create an `NCLOB` column from a `CHAR` value
removes the trailing spaces from the initial values for the column. Inserting
`CHAR` values into existing `NCLOB` columns keeps the trailing spaces. For
example:

```
CREATE TABLE vals AS SELECT CAST('A' as CHAR(2001)) col;
INSERT INTO vals (col) VALUES (CAST('BB' as CHAR(2001)));
SELECT LENGTH(col) FROM vals;
```

```text
 _col0
-------
  2001
     1
(2 rows)
```

Attempting to write a `CHAR` that doesn't fit in the column's actual size
fails. This is also true for the equivalent `VARCHAR` types.

<!-- Fragment not found: jdbc-type-mapping.fragment -->

### Number to decimal configuration properties

| Configuration property name | Session property name | Description | Default |
|---|---|---|---|
| `oracle.number.default-scale` | `number_default_scale` | Default Trino `DECIMAL` scale for Oracle `NUMBER` (without precision and scale) date type. When not set then such column is treated as not supported. | not set |

## SQL support

The connector provides read access and write access to data and metadata in
Oracle. In addition to the [globally available](sql-globally-available) and
[read operation](sql-read-operations) statements, the connector supports the
following features:

- [](/sql/insert), see also [](oracle-insert)
- [](/sql/update), see also [](oracle-update)
- [](/sql/delete), see also [](oracle-delete)
- [](/sql/truncate)
- [](/sql/create-table)
- [](/sql/create-table-as)
- [](/sql/drop-table)
- [](/sql/alter-table), see also [](oracle-alter-table)
- [](/sql/comment)
- [](oracle-procedures)
- [](oracle-table-functions)

(oracle-insert)=
<!-- Fragment not found: non-transactional-insert.fragment -->

### UPDATE limitation

Only `UPDATE` statements with constant assignments and predicates are
supported. For example, the following statement is supported because the values
assigned are constants:

```sql
UPDATE table SET col1 = 1 WHERE col3 = 1
```

Arithmetic expressions, function calls, and other non-constant `UPDATE`
statements are not supported. For example, the following statement is not
supported because arithmetic expressions cannot be used with the `SET`
command:

```sql
UPDATE table SET col1 = col2 + 2 WHERE col3 = 1
```

All column values of a table row cannot be updated simultaneously. For a three
column table, the following statement is not supported:

```sql
UPDATE table SET col1 = 1, col2 = 2, col3 = 3 WHERE col3 = 1
```

(oracle-delete)=
<!-- Fragment not found: sql-delete-limitation.fragment -->

(oracle-alter-table)=
<!-- Fragment not found: alter-table-limitation.fragment -->

### Procedures

#### `system.flush_metadata_cache()`

Flush JDBC metadata caches. For example, the following system call
flushes the metadata caches for all schemas in the `example` catalog

```sql
USE example.example_schema;
CALL system.flush_metadata_cache();
```

#### `system.execute('query')`

The `execute` procedure allows you to execute a query in the underlying data
source directly. The query must use supported syntax of the connected data
source. Use the procedure to access features which are not available in Trino
or to execute queries that return no result set and therefore can not be used
with the `query` or `raw_query` pass-through table function. Typical use cases
are statements that create or alter objects, and require native feature such
as constraints, default values, automatic identifier creation, or indexes.
Queries can also invoke statements that insert, update, or delete data, and do
not return any data as a result.

The query text is not parsed by Trino, only passed through, and therefore only
subject to any security or access control of the underlying data source.

The following example sets the current database to the `example_schema` of the
`example` catalog. Then it calls the procedure in that schema to drop the
default value from `your_column` on `your_table` table using the standard SQL
syntax in the parameter value assigned for `query`:

```sql
USE example.example_schema;
CALL system.execute(query => 'ALTER TABLE your_table ALTER COLUMN your_column DROP DEFAULT');
```

Verify that the specific database supports this syntax, and adapt as necessary
based on the documentation for the specific connected database and database
version.

### Table functions

The connector provides specific [table functions ](/docs//functions/table) to
access Oracle.

#### `query(varchar) -> table`

The `query` function allows you to query the underlying database directly. It
requires syntax native to Oracle, because the full query is pushed down and
processed in Oracle. This can be useful for accessing native features which are
not available in Trino or for improving query performance in situations where
running a query natively may be faster.

<!-- Fragment not found: query-passthrough-warning.fragment -->

As a simple example, query the `example` catalog and select an entire table:

```
SELECT
  *
FROM
  TABLE(
    example.system.query(
      query => 'SELECT
        *
      FROM
        tpch.nation'
    )
  );
```

As a practical example, you can use the
[MODEL clause from Oracle SQL](https://docs.oracle.com/cd/B19306_01/server.102/b14223/sqlmodel.htm):

```
SELECT
  SUBSTR(country, 1, 20) country,
  SUBSTR(product, 1, 15) product,
  year,
  sales
FROM
  TABLE(
    example.system.query(
      query => 'SELECT
        *
      FROM
        sales_view
      MODEL
        RETURN UPDATED ROWS
        MAIN
          simple_model
        PARTITION BY
          country
        MEASURES
          sales
        RULES
          (sales['Bounce', 2001] = 1000,
          sales['Bounce', 2002] = sales['Bounce', 2001] + sales['Bounce', 2000],
          sales['Y Box', 2002] = sales['Y Box', 2001])
      ORDER BY
        country'
    )
  );
```

<!-- Fragment not found: query-table-function-ordering.fragment -->

## Performance

The connector includes a number of performance improvements, detailed in the
following sections.

### Synonyms

Based on performance reasons, Trino disables support for Oracle `SYNONYM`. To
include `SYNONYM`, add the following configuration property:

```text
oracle.synonyms.enabled=true
```

### Pushdown

The connector supports pushdown for a number of operations:

- [join-pushdown](#join-pushdown)
- [limit-pushdown](#limit-pushdown)

In addition, the connector supports [aggregation-pushdown](#aggregation-pushdown) for the
following functions:

- {func}`avg()`
- {func}`count()`, also `count(distinct x)`
- {func}`max()`
- {func}`min()`
- {func}`sum()`

Pushdown is only supported for `DOUBLE` type columns with the
following functions:

- {func}`stddev()` and {func}`stddev_samp()`
- {func}`stddev_pop()`
- {func}`var_pop()`
- {func}`variance()` and {func}`var_samp()`

Pushdown is only supported for `REAL` or `DOUBLE` type column
with the following functions:

- {func}`covar_samp()`
- {func}`covar_pop()`

<!-- Fragment not found: pushdown-correctness-behavior.fragment -->

<!-- Fragment not found: join-pushdown-enabled-false.fragment -->

#### Predicate pushdown support

The connector does not support pushdown of any predicates on columns that use
the `CLOB`, `NCLOB`, `BLOB`, or `RAW(n)` Oracle database types, or Trino
data types that [map <oracle-type-mapping>](#map <oracle-type-mapping>) to these Oracle database types.

In the following example, the predicate is not pushed down for either query
since `name` is a column of type `VARCHAR`, which maps to `NCLOB` in
Oracle:

```sql
SHOW CREATE TABLE nation;

--             Create Table
----------------------------------------
-- CREATE TABLE oracle.trino_test.nation (
--    name VARCHAR
-- )
-- (1 row)

SELECT * FROM nation WHERE name > 'CANADA';
SELECT * FROM nation WHERE name = 'CANADA';
```

In the following example, the predicate is pushed down for both queries
since `name` is a column of type `VARCHAR(25)`, which maps to
`VARCHAR2(25)` in Oracle:

```sql
SHOW CREATE TABLE nation;

--             Create Table
----------------------------------------
-- CREATE TABLE oracle.trino_test.nation (
--    name VARCHAR(25)
-- )
-- (1 row)

SELECT * FROM nation WHERE name > 'CANADA';
SELECT * FROM nation WHERE name = 'CANADA';
```
