---
title: Release 423
description: Release 423 documentation
---
# Release 423 (10 Aug 2023)

## General

* Add support for renaming nested fields in a column via `RENAME COLUMN`. ([#16757](https://github.com/trinodb/trino/issues/16757))
* Add support for setting the type of a nested field in a column via `SET DATA TYPE`. ([#16959](https://github.com/trinodb/trino/issues/16959))
* Add support for comments on materialized view columns. ([#18016](https://github.com/trinodb/trino/issues/18016))
* Add support for displaying all Unicode characters in string literals. ([#5061](https://github.com/trinodb/trino/issues/5061))
* Improve performance of `INSERT` and `CREATE TABLE AS ... SELECT` queries. ([#18212](https://github.com/trinodb/trino/issues/18212))
* Improve performance when planning queries involving multiple window functions. ([#18491](https://github.com/trinodb/trino/issues/18491))
* Improve performance of queries involving `BETWEEN` clauses. ([#18501](https://github.com/trinodb/trino/issues/18501))
* Improve performance of queries containing redundant `ORDER BY` clauses in
  views or `WITH` clauses. This may affect the semantics of queries that
  incorrectly rely on implementation-specific behavior. The old behavior can be
  restored via the `skip_redundant_sort` session property or the
  `optimizer.skip-redundant-sort` configuration property. ([#18159](https://github.com/trinodb/trino/issues/18159))
* Reduce default values for the `task.partitioned-writer-count` and
  `task.scale-writers.max-writer-count` configuration properties to reduce the
  memory requirements of queries that write data. ([#18488](https://github.com/trinodb/trino/issues/18488))
* Remove the deprecated `optimizer.use-mark-distinct` configuration property,
  which has been replaced with `optimizer.mark-distinct-strategy`. ([#18540](https://github.com/trinodb/trino/issues/18540))
* Fix query planning failure due to dynamic filters in
  [fault tolerant execution mode](/docs/admin/fault-tolerant-execution). ([#18383](https://github.com/trinodb/trino/issues/18383))
* Fix `EXPLAIN` failure when a query contains `WHERE ... IN (NULL)`. ([#18328](https://github.com/trinodb/trino/issues/18328))

## JDBC driver

* Add support for
  [constrained delegation](https://web.mit.edu/kerberos/krb5-latest/doc/appdev/gssapi.html#constrained-delegation-s4u)
  with Kerberos. ([#17853](https://github.com/trinodb/trino/issues/17853))

## CLI

* Add support for accepting a single Trino JDBC URL with parameters as an
  alternative to passing command line arguments. ([#12587](https://github.com/trinodb/trino/issues/12587))

## ClickHouse connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18305](https://github.com/trinodb/trino/issues/18305))

## Blackhole connector

* Add support for the `COMMENT ON VIEW` statement. ([#18516](https://github.com/trinodb/trino/issues/18516))

## Delta Lake connector

* Add `$properties` system table which can be queried to inspect Delta Lake
  table properties. ([#17294](https://github.com/trinodb/trino/issues/17294))
* Add support for reading the `timestamp_ntz` type. ([#17502](https://github.com/trinodb/trino/issues/17502))
* Add support for writing the `timestamp with time zone` type on partitioned
  columns. ([#16822](https://github.com/trinodb/trino/issues/16822))
* Add option to enforce that a filter on a partition key is present for
  query processing. This can be enabled by setting the
  ``delta.query-partition-filter-required`` configuration property or the
  ``query_partition_filter_required`` session property to ``true``.
  ([#18345](https://github.com/trinodb/trino/issues/18345))
* Improve performance of the `$history` system table. ([#18427](https://github.com/trinodb/trino/issues/18427))
* Improve memory accounting of the Parquet writer. ([#18564](https://github.com/trinodb/trino/issues/18564))
* Allow metadata changes on Delta Lake tables with
  [identity columns](https://github.com/delta-io/delta/blob/master/PROTOCOL.md#identity-columns). ([#18200](https://github.com/trinodb/trino/issues/18200))
* Fix incorrectly creating files smaller than the configured
  `file_size_threshold` as part of `OPTIMIZE`. ([#18388](https://github.com/trinodb/trino/issues/18388))
* Fix query failure when a table has a file with a location ending with
  whitespace. ([#18206](https://github.com/trinodb/trino/issues/18206))

## Hive connector

* Add support for changing a column's type from `varchar` to `timestamp`. ([#18014](https://github.com/trinodb/trino/issues/18014))
* Improve memory accounting of the Parquet writer. ([#18564](https://github.com/trinodb/trino/issues/18564))
* Remove the legacy Parquet writer, along with the
  `parquet.optimized-writer.enabled` configuration property and the
  `parquet_optimized_writer_enabled ` session property. Replace the
  `parquet.optimized-writer.validation-percentage` configuration property with
  `parquet.writer.validation-percentage`. ([#18420](https://github.com/trinodb/trino/issues/18420))
* Disallow coercing Hive `timestamp` types to `varchar` for dates before 1900. ([#18004](https://github.com/trinodb/trino/issues/18004))
* Fix loss of data precision when coercing Hive `timestamp` values. ([#18003](https://github.com/trinodb/trino/issues/18003))
* Fix incorrectly creating files smaller than the configured
  `file_size_threshold` as part of `OPTIMIZE`. ([#18388](https://github.com/trinodb/trino/issues/18388))
* Fix query failure when a table has a file with a location ending with
  whitespace. ([#18206](https://github.com/trinodb/trino/issues/18206))
* Fix incorrect results when using S3 Select and a query predicate includes a
  quote character (`"`) or a decimal column. ([#17775](https://github.com/trinodb/trino/issues/17775))
* Add the `hive.s3select-pushdown.experimental-textfile-pushdown-enabled`
  configuration property to enable S3 Select pushdown for `TEXTFILE` tables. ([#17775](https://github.com/trinodb/trino/issues/17775))

## Hudi connector

* Fix query failure when a table has a file with a location ending with
  whitespace. ([#18206](https://github.com/trinodb/trino/issues/18206))

## Iceberg connector

* Add support for renaming nested fields in a column via `RENAME COLUMN`. ([#16757](https://github.com/trinodb/trino/issues/16757))
* Add support for setting the type of a nested field in a column via
  `SET DATA TYPE`. ([#16959](https://github.com/trinodb/trino/issues/16959))
* Add support for comments on materialized view columns. ([#18016](https://github.com/trinodb/trino/issues/18016))
* Add support for `tinyint` and `smallint` types in the `migrate` procedure. ([#17946](https://github.com/trinodb/trino/issues/17946))
* Add support for reading Parquet files with time stored in millisecond precision. ([#18535](https://github.com/trinodb/trino/issues/18535))
* Improve performance of `information_schema.columns` queries for tables managed
  by Trino with AWS Glue as metastore. ([#18315](https://github.com/trinodb/trino/issues/18315))
* Improve performance of `system.metadata.table_comments` when querying Iceberg
  tables backed by AWS Glue as metastore.  ([#18517](https://github.com/trinodb/trino/issues/18517))
* Improve performance of `information_schema.columns` when using the Glue
  catalog. ([#18586](https://github.com/trinodb/trino/issues/18586))
* Improve memory accounting of the Parquet writer. ([#18564](https://github.com/trinodb/trino/issues/18564))
* Fix incorrectly creating files smaller than the configured
  `file_size_threshold` as part of `OPTIMIZE`. ([#18388](https://github.com/trinodb/trino/issues/18388))
* Fix query failure when a table has a file with a location ending with
  whitespace. ([#18206](https://github.com/trinodb/trino/issues/18206))
* Fix failure when creating a materialized view on a table which has been
  rolled back. ([#18205](https://github.com/trinodb/trino/issues/18205))
* Fix query failure when reading ORC files with nullable `time` columns. ([#15606](https://github.com/trinodb/trino/issues/15606))
* Fix failure to calculate query statistics when referring to `$path` as part of
  a `WHERE` clause. ([#18330](https://github.com/trinodb/trino/issues/18330))
* Fix write conflict detection for `UPDATE`, `DELETE`, and `MERGE` operations.
  In rare situations this issue may have resulted in duplicate rows when
  multiple operations were run at the same time, or at the same time as an
  `optimize` procedure. ([#18533](https://github.com/trinodb/trino/issues/18533))

## Kafka connector

* Rename the `ADD_DUMMY` value for the `kafka.empty-field-strategy`
  configuration property and the `empty_field_strategy` session property to
  `MARK` ([#18485](https://github.com/trinodb/trino/issues/18485)).

## Kudu connector

* Add support for optimized local scheduling of splits. ([#18121](https://github.com/trinodb/trino/issues/18121))

## MariaDB connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18305](https://github.com/trinodb/trino/issues/18305))

## MongoDB connector

* Add support for predicate pushdown on `char` and `decimal` type. ([#18382](https://github.com/trinodb/trino/issues/18382))

## MySQL connector

* Add support for predicate pushdown for `=`, `<>`, `IN`, `NOT IN`, and `LIKE`
  operators on case-sensitive `varchar` and `nvarchar` columns. ([#18140](https://github.com/trinodb/trino/issues/18140), [#18441](https://github.com/trinodb/trino/issues/18441))
* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18305](https://github.com/trinodb/trino/issues/18305))

## Oracle connector

* Add support for Oracle `timestamp` types with non-millisecond precision. ([#17934](https://github.com/trinodb/trino/issues/17934))
* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18305](https://github.com/trinodb/trino/issues/18305))

## SingleStore connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18305](https://github.com/trinodb/trino/issues/18305))

## SPI

* Deprecate the `ConnectorMetadata.getTableHandle(ConnectorSession, SchemaTableName)`
  method signature. Connectors should implement
  `ConnectorMetadata.getTableHandle(ConnectorSession, SchemaTableName, Optional, Optional)`
  instead. ([#18596](https://github.com/trinodb/trino/issues/18596))
* Remove the deprecated `supportsReportingWrittenBytes` method from
  ConnectorMetadata. ([#18617](https://github.com/trinodb/trino/issues/18617))
