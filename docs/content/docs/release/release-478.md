---
title: Release 478
description: Release 478 documentation
---
# Release 478 (29 Oct 2025)

## General

* Include lineage information for columns used in `UNNEST` expressions. ([#16946](https://github.com/trinodb/trino/issues/16946))
* Add support for limiting which retry policies a user can select. This can be configured using
  the `retry-policy.allowed` option. ([#26628](https://github.com/trinodb/trino/issues/26628))
* Add support for loading plugins from multiple directories. ([#26855](https://github.com/trinodb/trino/issues/26855))
* Allow dropping catalogs that failed to load correctly. ([#26918](https://github.com/trinodb/trino/issues/26918))
* Improve performance of queries with an `ORDER BY` clause using `varchar` or `varbinary` types. ([#26725](https://github.com/trinodb/trino/issues/26725))
* Improve performance of `MERGE` statements involving a `NOT MATCHED` case. ([#26759](https://github.com/trinodb/trino/issues/26759))
* Improve performance of queries involving `JOIN` when the join spills to disk. ([#26076](https://github.com/trinodb/trino/issues/26076))
* Fix potential incorrect results when query uses `row` type. ([#26806](https://github.com/trinodb/trino/issues/26806))
* Include catalogs that failed to load in the `metadata.catalogs` table. ([#26918](https://github.com/trinodb/trino/issues/26918))
* Fix `EXPLAIN ANALYZE` planning so that it executes with the same plan as would be used to execute the query
  being analyzed. ([#26938](https://github.com/trinodb/trino/issues/26938))
* Fix incorrect results when using logical navigation function `FIRST` in row pattern recognition. ([#26981](https://github.com/trinodb/trino/issues/26981))

## Security

* Propagate `queryId` to the [Open Policy Agent](/docs/security/opa-access-control)
  authorizer. ([#26851](https://github.com/trinodb/trino/issues/26851))

## Docker image

* Run Trino on JDK 25.0.0 (build 36). ([#26693](https://github.com/trinodb/trino/issues/26693))

## Delta Lake connector

* Fix failure when reading a `map(..., json)` column when the map item value is `NULL`. ([#26700](https://github.com/trinodb/trino/issues/26700))
* Deprecate the `gcs.use-access-token` configuration property. Use `gcs.auth-type` instead. ([#26681](https://github.com/trinodb/trino/issues/26681))

## Google Sheets connector

* Fix potential query failure when the `gsheets.delegated-user-email` configuration property
  is used. ([#26501](https://github.com/trinodb/trino/issues/26501))

## Hive connector

* Add support for reading encrypted Parquet files. ([#24517](https://github.com/trinodb/trino/issues/24517), [#9383](https://github.com/trinodb/trino/issues/9383))
* Deprecate the `gcs.use-access-token` configuration property. Use `gcs.auth-type` instead. ([#26681](https://github.com/trinodb/trino/issues/26681))
* Improve performance of queries using complex predicates on `$path` column. ([#27000](https://github.com/trinodb/trino/issues/27000))
* Fix writing ORC files to ensure that dates and timestamps before `1582-10-15` are read correctly by Apache Hive. ([#26507](https://github.com/trinodb/trino/issues/26507))
* Fix `flush_metadata_cache` procedure failure when metastore impersonation is enabled. ([#27059](https://github.com/trinodb/trino/issues/27059))

## Hudi connector

* Deprecate the `gcs.use-access-token` configuration property. Use `gcs.auth-type` instead. ([#26681](https://github.com/trinodb/trino/issues/26681))

## Iceberg connector

* Improve performance when writing sorted tables and `iceberg.sorted-writing.local-staging-path`
  is set. ([#24376](https://github.com/trinodb/trino/issues/24376))
* Improve performance of `ALTER TABLE EXECUTE OPTIMIZE` on tables with bucket transform partitioning. ([#27104](https://github.com/trinodb/trino/issues/27104))
* Return execution metrics while running the `remove_orphan_files` command. ([#26661](https://github.com/trinodb/trino/issues/26661))
* Deprecate the `gcs.use-access-token` configuration property. Use `gcs.auth-type` instead. ([#26681](https://github.com/trinodb/trino/issues/26681))
* Collect distinct values count on all columns when replacing tables. ([#26983](https://github.com/trinodb/trino/issues/26983))
* Fix failure due to column count mismatch when executing the `add_files_from_table`
  procedure. ([#26774](https://github.com/trinodb/trino/issues/26774))
* Fix failure when executing `optimize_manifests` on tables without a snapshot. ([#26970](https://github.com/trinodb/trino/issues/26970))
* Fix incorrect results when reading Avro files migrated from Hive. ([#26863](https://github.com/trinodb/trino/issues/26863))
* Fix failure when executing `SHOW CREATE SCHEMA` on a schema with unsupported properties
  with REST, Glue or Nessie catalog. ([#24744](https://github.com/trinodb/trino/issues/24744))
* Fix failure when running `EXPLAIN` or `EXPLAIN ANALYZE` on `OPTIMIZE` command. ([#26598](https://github.com/trinodb/trino/issues/26598))

## Kafka connector

* Fix failure when filtering partitions by timestamp offset. ([#26787](https://github.com/trinodb/trino/issues/26787))

## SPI

* Remove default implementation from `Connector.shutdown()`. ([#26718](https://github.com/trinodb/trino/issues/26718))
* Remove the deprecated `ConnectorSplit.getSplitInfo` method. ([#27063](https://github.com/trinodb/trino/issues/27063))
* Deprecate `io.trino.spi.type.Type#appendTo` method. ([#26922](https://github.com/trinodb/trino/issues/26922))
