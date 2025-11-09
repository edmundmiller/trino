---
title: Mariadb
description: Mariadb documentation
---

# MariaDB connector

<img src="../_static/img/mariadb.png" class="connector-logo">


The MariaDB connector allows querying and creating tables in an external MariaDB
database.

## Requirements

To connect to MariaDB, you need:

- MariaDB version 10.10 or higher.
- Network access from the Trino coordinator and workers to MariaDB. Port
  3306 is the default port.

## Configuration

To configure the MariaDB connector, create a catalog properties file in
`etc/catalog` named, for example, `example.properties`, to mount the MariaDB
connector as the `example` catalog. Create the file with the following
contents, replacing the connection properties as appropriate for your setup:

```text
connector.name=mariadb
connection-url=jdbc:mariadb://example.net:3306
connection-user=root
connection-password=secret
```

The `connection-user` and `connection-password` are typically required and
determine the user credentials for the connection, often a service user. You can
use [secrets ](/docs//security/secrets) to avoid actual values in the catalog
properties files.

<!-- Fragment not found: jdbc-authentication.fragment -->

<!-- Fragment not found: jdbc-common-configurations.fragment -->

<!-- Fragment not found: jdbc-domain-compaction-threshold.fragment -->

<!-- Fragment not found: jdbc-case-insensitive-matching.fragment -->

### Fault-tolerant execution support

The connector supports [/admin/fault-tolerant-execution](/docs//admin/fault-tolerant-execution) of query
processing. Read and write operations are both supported with any retry policy.

## Querying MariaDB

The MariaDB connector provides a schema for every MariaDB *database*.
You can see the available MariaDB databases by running `SHOW SCHEMAS`:

```
SHOW SCHEMAS FROM example;
```

If you have a MariaDB database named `web`, you can view the tables
in this database by running `SHOW TABLES`:

```
SHOW TABLES FROM example.web;
```

You can see a list of the columns in the `clicks` table in the `web`
database using either of the following:

```
DESCRIBE example.web.clicks;
SHOW COLUMNS FROM example.web.clicks;
```

Finally, you can access the `clicks` table in the `web` database:

```
SELECT * FROM example.web.clicks;
```

If you used a different name for your catalog properties file, use
that catalog name instead of `example` in the above examples.

% mariadb-type-mapping:

## Type mapping

Because Trino and MariaDB each support types that the other does not, this
connector [modifies some types <type-mapping-overview>](#modifies some types <type-mapping-overview>) when reading or
writing data. Data types may not map the same way in both directions between
Trino and the data source. Refer to the following sections for type mapping in
each direction.

### MariaDB type to Trino type mapping

The connector maps MariaDB types to the corresponding Trino types according
to the following table:

#### MariaDB type to Trino type mapping

| MariaDB type | Trino type | Notes |
|---|---|---|
| `BOOLEAN` | `TINYINT` | `BOOL` and `BOOLEAN` are aliases of `TINYINT(1)` |
| `TINYINT` | `TINYINT` |  |
| `TINYINT UNSIGNED` | `SMALLINT` |  |
| `SMALLINT` | `SMALLINT` |  |
| `SMALLINT UNSIGNED` | `INTEGER` |  |
| `INT` | `INTEGER` |  |
| `INT UNSIGNED` | `BIGINT` |  |
| `BIGINT` | `BIGINT` |  |
| `BIGINT UNSIGNED` | `DECIMAL(20, 0)` |  |
| `FLOAT` | `REAL` |  |
| `DOUBLE` | `DOUBLE` |  |
| `DECIMAL(p,s)` | `DECIMAL(p,s)` |  |
| `CHAR(n)` | `CHAR(n)` |  |
| `TINYTEXT` | `VARCHAR(255)` |  |
| `TEXT` | `VARCHAR(65535)` |  |
| `MEDIUMTEXT` | `VARCHAR(16777215)` |  |
| `LONGTEXT` | `VARCHAR` |  |
| `VARCHAR(n)` | `VARCHAR(n)` |  |
| `TINYBLOB` | `VARBINARY` |  |
| `BLOB` | `VARBINARY` |  |
| `MEDIUMBLOB` | `VARBINARY` |  |
| `LONGBLOB` | `VARBINARY` |  |
| `VARBINARY(n)` | `VARBINARY` |  |
| `DATE` | `DATE` |  |
| `TIME(n)` | `TIME(n)` |  |
| `TIMESTAMP(n)` | `TIMESTAMP(n)` | MariaDB stores the current timestamp by default. Enable [explicit_defaults_for_timestamp](https://mariadb.com/docs/reference/mdb/system-variables/explicit_defaults_for_timestamp/) to avoid implicit default values and use `NULL` as the default value. |


No other types are supported.

### Trino type mapping to MariaDB type mapping

The connector maps Trino types to the corresponding MariaDB types according
to the following table:

#### Trino type mapping to MariaDB type mapping

| Trino type | MariaDB type | Notes |
|---|---|---|
| `BOOLEAN` | `BOOLEAN` |  |
| `TINYINT` | `TINYINT` |  |
| `SMALLINT` | `SMALLINT` |  |
| `INTEGER` | `INT` |  |
| `BIGINT` | `BIGINT` |  |
| `REAL` | `FLOAT` |  |
| `DOUBLE` | `DOUBLE` |  |
| `DECIMAL(p,s)` | `DECIMAL(p,s)` |  |
| `CHAR(n)` | `CHAR(n)` |  |
| `VARCHAR(255)` | `TINYTEXT` | Maps on `VARCHAR` of length 255 or less. |
| `VARCHAR(65535)` | `TEXT` | Maps on `VARCHAR` of length between 256 and 65535, inclusive. |
| `VARCHAR(16777215)` | `MEDIUMTEXT` | Maps on `VARCHAR` of length between 65536 and 16777215, inclusive. |
| `VARCHAR` | `LONGTEXT` | `VARCHAR` of length greater than 16777215 and unbounded `VARCHAR` map to `LONGTEXT`. |
| `VARBINARY` | `MEDIUMBLOB` |  |
| `DATE` | `DATE` |  |
| `TIME(n)` | `TIME(n)` |  |


No other types are supported.

Complete list of [MariaDB data types](https://mariadb.com/kb/en/data-types/).

<!-- Fragment not found: jdbc-type-mapping.fragment -->

## SQL support

The connector provides read access and write access to data and metadata in a
MariaDB database. In addition to the [globally
available](sql-globally-available) and [read operation](sql-read-operations)
statements, the connector supports the following features:

- [](/sql/insert), see also [](mariadb-insert)
- [](/sql/update), see also [](mariadb-update)
- [](/sql/delete), see also [](mariadb-delete)
- [](/sql/truncate)
- [](/sql/create-table)
- [](/sql/create-table-as)
- [](/sql/drop-table)
- [](/sql/alter-table)
- [](/sql/create-schema)
- [](/sql/drop-schema)
- [](mariadb-procedures)
- [](mariadb-table-functions)

(mariadb-insert)=
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


(mariadb-delete)=
<!-- Fragment not found: sql-delete-limitation.fragment -->

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
access MariaDB.

#### `query(varchar) -> table`

The `query` function allows you to query the underlying database directly. It
requires syntax native to MariaDB, because the full query is pushed down and
processed in MariaDB. This can be useful for accessing native features which are
not available in Trino or for improving query performance in situations where
running a query natively may be faster.

<!-- Fragment not found: query-passthrough-warning.fragment -->

As an example, query the `example` catalog and select the age of employees by
using `TIMESTAMPDIFF` and `CURDATE`:

```
SELECT
  age
FROM
  TABLE(
    example.system.query(
      query => 'SELECT
        TIMESTAMPDIFF(
          YEAR,
          date_of_birth,
          CURDATE()
        ) AS age
      FROM
        tiny.employees'
    )
  );
```

<!-- Fragment not found: query-table-function-ordering.fragment -->

## Performance

The connector includes a number of performance improvements, detailed in the
following sections.

### Table statistics

The MariaDB connector can use [table and column
statistics](/docs/optimizer/statistics) for [cost based
optimizations](/docs/optimizer/cost-based-optimizations) to improve query processing
performance based on the actual data in the data source.

The statistics are collected by MariaDB and retrieved by the connector.

To collect statistics for a table, execute the following statement in
MariaDB.

```text
ANALYZE TABLE table_name;
```

Refer to [MariaDB documentation](https://mariadb.com/kb/en/analyze-table/) for
additional information.

### Pushdown

The connector supports pushdown for a number of operations:

- [join-pushdown](#join-pushdown)
- [limit-pushdown](#limit-pushdown)
- [topn-pushdown](#topn-pushdown)

[Aggregate pushdown <aggregation-pushdown>](#Aggregate pushdown <aggregation-pushdown>) for the following functions:

- {func}`avg`
- {func}`count`
- {func}`max`
- {func}`min`
- {func}`sum`
- {func}`stddev`
- {func}`stddev_pop`
- {func}`stddev_samp`
- {func}`variance`
- {func}`var_pop`
- {func}`var_samp`

<!-- Fragment not found: pushdown-correctness-behavior.fragment -->

<!-- Fragment not found: no-pushdown-text-type.fragment -->
