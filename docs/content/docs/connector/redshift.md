---
title: Redshift
description: Redshift documentation
---

# Redshift connector

<img src="../_static/img/redshift.png" class="connector-logo">


The Redshift connector allows querying and creating tables in an
external [Amazon Redshift](https://aws.amazon.com/redshift/) cluster. This can be used to join data between
different systems like Redshift and Hive, or between two different
Redshift clusters.

## Requirements

To connect to Redshift, you need:

- Network access from the Trino coordinator and workers to Redshift.
  Port 5439 is the default port.

## Configuration

To configure the Redshift connector, create a catalog properties file in
`etc/catalog` named, for example, `example.properties`, to mount the
Redshift connector as the `example` catalog. Create the file with the
following contents, replacing the connection properties as appropriate for your
setup:

```text
connector.name=redshift
connection-url=jdbc:redshift://example.net:5439/database
connection-user=root
connection-password=secret
```

The `connection-user` and `connection-password` are typically required and
determine the user credentials for the connection, often a service user. You can
use [secrets ](/docs//security/secrets) to avoid actual values in the catalog
properties files.

### Connection security

If you have TLS configured with a globally-trusted certificate installed on your
data source, you can enable TLS between your cluster and the data
source by appending a parameter to the JDBC connection string set in the
`connection-url` catalog configuration property.

For example, on version 2.1 of the Redshift JDBC driver, TLS/SSL is enabled by
default with the `SSL` parameter. You can disable or further configure TLS
by appending parameters to the `connection-url` configuration property:

```properties
connection-url=jdbc:redshift://example.net:5439/database;SSL=TRUE;
```

For more information on TLS configuration options, see the [Redshift JDBC driver
documentation](https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-configuration-options.html#jdbc20-ssl-option).

<!-- Fragment not found: jdbc-authentication.fragment -->

### Multiple Redshift databases or clusters

The Redshift connector can only access a single database within
a Redshift cluster. Thus, if you have multiple Redshift databases,
or want to connect to multiple Redshift clusters, you must configure
multiple instances of the Redshift connector.

To add another catalog, simply add another properties file to `etc/catalog`
with a different name, making sure it ends in `.properties`. For example,
if you name the property file `sales.properties`, Trino creates a
catalog named `sales` using the configured connector.

<!-- Fragment not found: jdbc-common-configurations.fragment -->

<!-- Fragment not found: query-comment-format.fragment -->

<!-- Fragment not found: jdbc-domain-compaction-threshold.fragment -->

<!-- Fragment not found: jdbc-case-insensitive-matching.fragment -->

## Fault-tolerant execution support

The connector supports [/admin/fault-tolerant-execution](/docs//admin/fault-tolerant-execution) of query
processing. Read and write operations are both supported with any retry policy.

## Querying Redshift

The Redshift connector provides a schema for every Redshift schema.
You can see the available Redshift schemas by running `SHOW SCHEMAS`:

```
SHOW SCHEMAS FROM example;
```

If you have a Redshift schema named `web`, you can view the tables
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

Finally, you can access the `clicks` table in the `web` schema:

```
SELECT * FROM example.web.clicks;
```

If you used a different name for your catalog properties file, use that catalog
name instead of `example` in the above examples.

## Type mapping

<!-- Fragment not found: jdbc-type-mapping.fragment -->

## SQL support

The connector provides read access and write access to data and metadata in
Redshift. In addition to the [globally available
<sql-globally-available>](#globally available
<sql-globally-available>) and [read operation <sql-read-operations>](#read operation <sql-read-operations>)
statements, the connector supports the following features:

- [](/sql/insert), see also [](redshift-insert)
- [](/sql/update), see also [](redshift-update)
- [](/sql/delete), see also [](redshift-delete)
- [](/sql/truncate)
- [](sql-schema-table-management), see also:
  - [](redshift-alter-table)
  - [](redshift-alter-schema)
- [](redshift-procedures)
- [](redshift-table-functions)

(redshift-insert)=
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


(redshift-delete)=
<!-- Fragment not found: sql-delete-limitation.fragment -->

(redshift-alter-table)=
<!-- Fragment not found: alter-table-limitation.fragment -->

(redshift-alter-schema)=
<!-- Fragment not found: alter-schema-limitation.fragment -->

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
access Redshift.

#### `query(varchar) -> table`

The `query` function allows you to query the underlying database directly. It
requires syntax native to Redshift, because the full query is pushed down and
processed in Redshift. This can be useful for accessing native features which
are not implemented in Trino or for improving query performance in situations
where running a query natively may be faster.

<!-- Fragment not found: query-passthrough-warning.fragment -->

For example, query the `example` catalog and select the top 10 nations by
population:

```
SELECT
  *
FROM
  TABLE(
    example.system.query(
      query => 'SELECT
        TOP 10 *
      FROM
        tpch.nation
      ORDER BY
        population DESC'
    )
  );
```

<!-- Fragment not found: query-table-function-ordering.fragment -->

## Performance

The connector includes a number of performance improvements, detailed in the
following sections.

### Parallel read via S3

The connector supports the Redshift `UNLOAD` command to transfer data to Parquet
files on S3. This enables parallel read of the data in Trino instead of the
default, single-threaded JDBC-based connection to Redshift, used by the
connector.

Configure the required S3 location with `redshift.unload-location` to enable the
parallel read. Parquet files are automatically removed with query completion.
The Redshift cluster and the configured S3 bucket must use the same AWS region.

#### Parallel read configuration properties

| Property value | Description |
|---|---|
| `redshift.unload-location` | A writeable location in Amazon S3 in the same AWS region as the Redshift cluster. Used for temporary storage during query processing using the `UNLOAD` command from Redshift. To ensure cleanup even for failed automated removal, configure a life cycle policy to auto clean up the bucket regularly. |


Use the `unload_enabled` [catalog session property](/docs/sql/set-session) to
deactivate the parallel read during a client session for a specific query, and
potentially re-activate it again afterward.

Additionally, define further required [S3 configuration such as IAM key, role,
or region](/docs/object-storage/file-system-s3), except `fs.native-s3.enabled`,

