---
title: Sqlserver
description: Sqlserver documentation
---

# SQL Server connector

<img src="../_static/img/sqlserver.png" class="connector-logo">


The SQL Server connector allows querying and creating tables in an external
[Microsoft SQL Server](https://www.microsoft.com/sql-server/) database. This
can be used to join data between different systems like SQL Server and Hive, or
between two different SQL Server instances.

## Requirements

To connect to SQL Server, you need:

- SQL Server 2019 or higher, or Azure SQL Database.
- Network access from the Trino coordinator and workers to SQL Server.
  Port 1433 is the default port.

## Configuration

The connector can query a single database on a given SQL Server instance. Create
a catalog properties file that specifies the SQL server connector by setting the
`connector.name` to `sqlserver`.

For example, to access a database as `example`, create the file
`etc/catalog/example.properties`. Replace the connection properties as
appropriate for your setup:

```properties
connector.name=sqlserver
connection-url=jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false
connection-user=root
connection-password=secret
```

The `connection-url` defines the connection information and parameters to pass
to the SQL Server JDBC driver. The supported parameters for the URL are
available in the [SQL Server JDBC driver documentation](https://docs.microsoft.com/sql/connect/jdbc/building-the-connection-url).

The `connection-user` and `connection-password` are typically required and
determine the user credentials for the connection, often a service user. You can
use [secrets ](/docs//security/secrets) to avoid actual values in the catalog
properties files.

### Connection security

The JDBC driver, and therefore the connector, automatically use Transport Layer
Security (TLS) encryption and certificate validation. This requires a suitable
TLS certificate configured on your SQL Server database host.

If you do not have the necessary configuration established, you can disable
encryption in the connection string with the `encrypt` property:

```properties
connection-url=jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false
```

Further parameters like `trustServerCertificate`, `hostNameInCertificate`,
`trustStore`, and `trustStorePassword` are details in the [TLS section of
SQL Server JDBC driver documentation](https://docs.microsoft.com/sql/connect/jdbc/using-ssl-encryption).

<!-- Fragment not found: jdbc-authentication.fragment -->

### Multiple SQL Server databases or servers

The SQL Server connector can only access a single SQL Server database
within a single catalog. Thus, if you have multiple SQL Server databases,
or want to connect to multiple SQL Server instances, you must configure
multiple instances of the SQL Server connector.

To add another catalog, simply add another properties file to `etc/catalog`
with a different name, making sure it ends in `.properties`. For example,
if you name the property file `sales.properties`, Trino creates a
catalog named `sales` using the configured connector.

<!-- Fragment not found: jdbc-common-configurations.fragment -->

<!-- Fragment not found: query-comment-format.fragment -->

<!-- Fragment not found: jdbc-domain-compaction-threshold.fragment -->

### Specific configuration properties

The SQL Server connector supports additional catalog properties to configure the
behavior of the connector and the issues queries to the database.

| Property name | Description |
|---|---|


<!-- Fragment not found: jdbc-case-insensitive-matching.fragment -->

### Fault-tolerant execution support

The connector supports [/admin/fault-tolerant-execution](/docs//admin/fault-tolerant-execution) of query
processing. Read and write operations are both supported with any retry policy.


## Querying SQL Server

The SQL Server connector provides access to all schemas visible to the specified
user in the configured database. For the following examples, assume the SQL
Server catalog is `example`.

You can see the available schemas by running `SHOW SCHEMAS`:

```
SHOW SCHEMAS FROM example;
```

If you have a schema named `web`, you can view the tables
in this schema by running `SHOW TABLES`:

```
SHOW TABLES FROM example.web;
```

You can see a list of the columns in the `clicks` table in the `web` database
using either of the following:

```
DESCRIBE example.web.clicks;
SHOW COLUMNS FROM example.web.clicks;
```

Finally, you can query the `clicks` table in the `web` schema:

```
SELECT * FROM example.web.clicks;
```

If you used a different name for your catalog properties file, use
that catalog name instead of `example` in the above examples.

## Type mapping

Because Trino and SQL Server each support types that the other does not, this
connector [modifies some types <type-mapping-overview>](#modifies some types <type-mapping-overview>) when reading or
writing data. Data types may not map the same way in both directions between
Trino and the data source. Refer to the following sections for type mapping in
each direction.

### SQL Server type to Trino type mapping

The connector maps SQL Server types to the corresponding Trino types following this table:

#### SQL Server type to Trino type mapping

| SQL Server database type | Trino type | Notes |
|---|---|---|
| `BIT` | `BOOLEAN` |  |
| `TINYINT` | `SMALLINT` | SQL Server `TINYINT` is actually `unsigned TINYINT` |
| `SMALLINT` | `SMALLINT` |  |
| `INTEGER` | `INTEGER` |  |
| `BIGINT` | `BIGINT` |  |
| `DOUBLE PRECISION` | `DOUBLE` |  |
| `FLOAT[(n)]` | `REAL` or `DOUBLE` | See [](sqlserver-numeric-mapping) |
| `REAL` | `REAL` |  |
| `DECIMAL[(p[, s])]`, `NUMERIC[(p[, s])]` | `DECIMAL(p, s)` |  |
| `CHAR[(n)]` | `CHAR(n)` | `1 <= n <= 8000` |
| `NCHAR[(n)]` | `CHAR(n)` | `1 <= n <= 4000` |
| `VARCHAR[(n | max)]`, `NVARCHAR[(n | max)]` | `VARCHAR(n)` | `1 <= n <= 8000`, `max = 2147483647` |
| `TEXT` | `VARCHAR(2147483647)` |  |
| `NTEXT` | `VARCHAR(1073741823)` |  |
| `VARBINARY[(n | max)]` | `VARBINARY` | `1 <= n <= 8000`, `max = 2147483647` |
| `DATE` | `DATE` |  |
| `TIME[(n)]` | `TIME(n)` | `0 <= n <= 7` |
| `DATETIME2[(n)]` | `TIMESTAMP(n)` | `0 <= n <= 7` |
| `SMALLDATETIME` | `TIMESTAMP(0)` |  |


### Trino type to SQL Server type mapping

The connector maps Trino types to the corresponding SQL Server types following this table:

#### Trino type to SQL Server type mapping

| Trino type | SQL Server type | Notes |
|---|---|---|
| `BOOLEAN` | `BIT` |  |
| `TINYINT` | `TINYINT` | Trino only supports writing values belonging to `[0, 127]` |
| `SMALLINT` | `SMALLINT` |  |
| `INTEGER` | `INTEGER` |  |
| `BIGINT` | `BIGINT` |  |
| `REAL` | `REAL` |  |
| `DOUBLE` | `DOUBLE PRECISION` |  |
| `DECIMAL(p, s)` | `DECIMAL(p, s)` |  |
| `CHAR(n)` | `NCHAR(n)` or `NVARCHAR(max)` | See [](sqlserver-character-mapping) |
| `VARCHAR(n)` | `NVARCHAR(n)` or `NVARCHAR(max)` | See [](sqlserver-character-mapping) |
| `VARBINARY` | `VARBINARY(max)` |  |
| `DATE` | `DATE` |  |
| `TIME(n)` | `TIME(n)` | `0 <= n <= 7` |


Complete list of [SQL Server data types](https://msdn.microsoft.com/library/ms187752.aspx).

### Numeric type mapping

For SQL Server `FLOAT[(n)]`:

- If `n` is not specified maps to Trino `Double`
- If `1 <= n <= 24` maps to Trino `REAL`
- If `24 < n <= 53` maps to Trino `DOUBLE`

### Character type mapping

For Trino `CHAR(n)`:

- If `1 <= n <= 4000` maps SQL Server `NCHAR(n)`
- If `n > 4000` maps SQL Server `NVARCHAR(max)`

For Trino `VARCHAR(n)`:

- If `1 <= n <= 4000` maps SQL Server `NVARCHAR(n)`
- If `n > 4000` maps SQL Server `NVARCHAR(max)`

<!-- Fragment not found: jdbc-type-mapping.fragment -->

## SQL support

The connector provides read access and write access to data and metadata in SQL
Server. In addition to the [globally available](sql-globally-available) and
[read operation](sql-read-operations) statements, the connector supports the
following features:

- [](/sql/insert), see also [](sqlserver-insert)
- [](/sql/update), see also [](sqlserver-update)
- [](/sql/delete), see also [](sqlserver-delete)
- [](/sql/truncate)
- [](sql-schema-table-management), see also:
  - [](sqlserver-alter-table)
- [](sqlserver-procedures)
- [](sqlserver-table-functions)


(sqlserver-insert)=
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


(sqlserver-delete)=
<!-- Fragment not found: sql-delete-limitation.fragment -->

(sqlserver-alter-table)=
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
access SQL Server.

#### `query(varchar) -> table`

The `query` function allows you to query the underlying database directly. It
requires syntax native to SQL Server, because the full query is pushed down and
processed in SQL Server. This can be useful for accessing native features which
are not implemented in Trino or for improving query performance in situations
where running a query natively may be faster.

<!-- Fragment not found: query-passthrough-warning.fragment -->

For example, query the `example` catalog and select the top 10 percent of
nations by population:

```
SELECT
  *
FROM
  TABLE(
    example.system.query(
      query => 'SELECT
        TOP(10) PERCENT *
      FROM
        tpch.nation
      ORDER BY
        population DESC'
    )
  );
```

### `procedure(varchar) -> table`

The `procedure` function allows you to run stored procedures on the underlying
database directly. It requires syntax native to SQL Server, because the full query
is pushed down and processed in SQL Server. In order to use this table function set
`sqlserver.stored-procedure-table-function-enabled` to `true`.

:::{note}
The `procedure` function does not support running StoredProcedures that return multiple statements,
use a non-select statement, use output parameters, or use conditional statements.
:::

:::{warning}
This feature is experimental only. The function has security implication and syntax might change and
be backward incompatible.
:::

The follow example runs the stored procedure `employee_sp` in the `example` catalog and the
`example_schema` schema in the underlying SQL Server database:

```
SELECT
  *
FROM
  TABLE(
    example.system.procedure(
      query => 'EXECUTE example_schema.employee_sp'
    )
  );
```

If the stored procedure `employee_sp` requires any input
append the parameter value to the procedure statement:

```
SELECT
  *
FROM
  TABLE(
    example.system.procedure(
      query => 'EXECUTE example_schema.employee_sp 0'
    )
  );
```

<!-- Fragment not found: query-table-function-ordering.fragment -->

## Performance

The connector includes a number of performance improvements, detailed in the
following sections.

### Table statistics

The SQL Server connector can use [table and column statistics
](/docs//optimizer/statistics) for [cost based optimizations
](/docs//optimizer/cost-based-optimizations), to improve query processing performance
based on the actual data in the data source.

The statistics are collected by SQL Server and retrieved by the connector.

The connector can use information stored in single-column statistics. SQL Server
Database can automatically create column statistics for certain columns. If
column statistics are not created automatically for a certain column, you can
create them by executing the following statement in SQL Server Database.

```sql
CREATE STATISTICS example_statistics_name ON table_schema.table_name (column_name);
```

SQL Server Database routinely updates the statistics. In some cases, you may
want to force statistics update (e.g. after defining new column statistics or
after changing data in the table). You can do that by executing the following
statement in SQL Server Database.

```sql
UPDATE STATISTICS table_schema.table_name;
```

Refer to SQL Server documentation for information about options, limitations and
additional considerations.

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

<!-- Fragment not found: join-pushdown-enabled-true.fragment -->

#### Predicate pushdown support

The connector supports pushdown of predicates on `VARCHAR` and `NVARCHAR`
columns if the underlying columns in SQL Server use a case-sensitive [collation](https://learn.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?view=sql-server-ver16).

The following operators are pushed down:

- `=`
- `<>`
- `IN`
- `NOT IN`

To ensure correct results, operators are not pushed down for columns using a
case-insensitive collation.

### Bulk insert

You can optionally use the [bulk copy API](https://docs.microsoft.com/sql/connect/jdbc/use-bulk-copy-api-batch-insert-operation)
to drastically speed up write operations.

Enable bulk copying and a lock on the destination table to meet [minimal
logging requirements](https://docs.microsoft.com/sql/relational-databases/import-export/prerequisites-for-minimal-logging-in-bulk-import).

The following table shows the relevant catalog configuration properties and
their default values:

#### Bulk load properties

| Property name | Description | Default |
|---|---|---|
| `sqlserver.bulk-copy-for-write.enabled` | Use the SQL Server bulk copy API for writes. The corresponding catalog session property is `bulk_copy_for_write`. | `false` |


Limitations:

- Column names with leading and trailing spaces are not supported.

## Data compression

You can specify the [data compression policy for SQL Server tables](https://docs.microsoft.com/sql/relational-databases/data-compression/data-compression)
with the `data_compression` table property. Valid policies are `NONE`, `ROW` or `PAGE`.

Example:

```
CREATE TABLE example_schema.scientists (
  recordkey VARCHAR,
  name VARCHAR,
  age BIGINT,
  birthday DATE
)
WITH (
  data_compression = 'ROW'
);
```
