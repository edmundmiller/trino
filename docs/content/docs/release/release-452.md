---
title: Release 452
description: Release 452 documentation
---
# Release 452 (11 Jul 2024)

## General

* Add [](/connector/exasol). ([#16083](https://github.com/trinodb/trino/issues/16083))
* Add support for processing the `X-Forwarded-Prefix` header when the
  `http-server.process-forwarded` property is enabled. ([#22227](https://github.com/trinodb/trino/issues/22227))
* Add support for the {func}`euclidean_distance`, {func}`dot_product`, and
  {func}`cosine_distance` functions. ([#22397](https://github.com/trinodb/trino/issues/22397))
* Improve performance of queries with selective joins by performing fine-grained
  filtering of rows using dynamic filters. This behavior is enabled by default
  and can be disabled using the `enable-dynamic-row-filtering` configuration
  property or the `enable_dynamic_row_filtering` session property. ([#22411](https://github.com/trinodb/trino/issues/22411))
* Fix sporadic query failure when the `retry_policy` property is set to `TASK`. ([#22617](https://github.com/trinodb/trino/issues/22617))

## Web UI

* Fix query plans occasionally not rendering the stage details page. ([#22542](https://github.com/trinodb/trino/issues/22542))

## BigQuery connector

* Add support for using the
  [BigQuery Storage Read API](https://cloud.google.com/bigquery/docs/reference/storage)
  when using the [`query` table function](bigquery-query-function). ([#22432](https://github.com/trinodb/trino/issues/22432))

## Black Hole connector

* Add support for adding, dropping and renaming columns. ([#22620](https://github.com/trinodb/trino/issues/22620))

## ClickHouse connector

* Add [`query` table function](clickhouse-query-function) for full query
  pass-through to ClickHouse. ([#16182](https://github.com/trinodb/trino/issues/16182))

## Delta Lake connector

* Add support for type coercion when adding new columns. ([#19708](https://github.com/trinodb/trino/issues/19708))
* Improve performance of reading from Parquet files with large schemas. ([#22434](https://github.com/trinodb/trino/issues/22434))
* Fix incorrect results when reading `INT32` values in Parquet files as
  `varchar` or `decimal` types in Trino. ([#21556](https://github.com/trinodb/trino/issues/21556))
* Fix a performance regression when using the native filesystem for Azure. ([#22561](https://github.com/trinodb/trino/issues/22561))

## Hive connector

* Add support for changing column types for structural data types for
  non-partitioned tables using ORC files. ([#22326](https://github.com/trinodb/trino/issues/22326))
* Add support for type coercion when adding new columns. ([#19708](https://github.com/trinodb/trino/issues/19708))
* Add support for changing a column's type from `varbinary` to `varchar`. ([#22322](https://github.com/trinodb/trino/issues/22322))
* Improve performance of reading from Parquet files with large schemas. ([#22434](https://github.com/trinodb/trino/issues/22434))
* Fix incorrect results when reading `INT32` values in Parquet files as
  `varchar` or `decimal` types in Trino. ([#21556](https://github.com/trinodb/trino/issues/21556))
* Fix `sync_partition_metadata` ignoring case-sensitive variations of partition
  names in storage. ([#22484](https://github.com/trinodb/trino/issues/22484))
* Fix a performance regression when using the native filesystem for Azure. ([#22561](https://github.com/trinodb/trino/issues/22561))

## Hudi connector

* Improve performance of reading from Parquet files with large schemas. ([#22434](https://github.com/trinodb/trino/issues/22434))
* Fix incorrect results when reading `INT32` values in Parquet files as
  `varchar` or `decimal` types in Trino. ([#21556](https://github.com/trinodb/trino/issues/21556))
* Fix a performance regression when using the native filesystem for Azure. ([#22561](https://github.com/trinodb/trino/issues/22561))

## Iceberg connector

* Add support for type coercion when adding new columns. ([#19708](https://github.com/trinodb/trino/issues/19708))
* Improve performance of reading from Parquet files with a large number of
  columns. ([#22434](https://github.com/trinodb/trino/issues/22434))
* Fix files being deleted when dropping tables with the Nessie catalog. ([#22392](https://github.com/trinodb/trino/issues/22392))
* Fix incorrect results when reading `INT32` values in Parquet files as
  `varchar` or `decimal` types in Trino. ([#21556](https://github.com/trinodb/trino/issues/21556))
* Fix failure when hidden partition names conflict with other columns. ([#22351](https://github.com/trinodb/trino/issues/22351))
* Fix failure when reading tables with `null` on partition columns while the
  `optimize_metadata_queries` session property is enabled. ([#21844](https://github.com/trinodb/trino/issues/21844))
* Fix failure when listing views with an unsupported dialect in the REST
  catalog. ([#22598](https://github.com/trinodb/trino/issues/22598))
* Fix a performance regression when using the native filesystem for Azure. ([#22561](https://github.com/trinodb/trino/issues/22561))

## Kudu connector

* Fix failure when adding new columns with a `decimal` type. ([#22558](https://github.com/trinodb/trino/issues/22558))

## Memory connector

* Add support for adding new columns. ([#22610](https://github.com/trinodb/trino/issues/22610))
* Add support for renaming columns. ([#22607](https://github.com/trinodb/trino/issues/22607))
* Add support for the `NOT NULL` constraint. ([#22601](https://github.com/trinodb/trino/issues/22601))

## PostgreSQL connector

* Improve performance of the {func}`reverse` function by pushing down execution
  to the underlying database. ([#22203](https://github.com/trinodb/trino/issues/22203))
