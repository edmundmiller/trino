---
title: Release 469
description: Release 469 documentation
---
# Release 469 (27 Jan 2025)

## General

* Add support for the `FIRST`, `AFTER`, and `LAST` clauses to `ALTER TABLE ...
  ADD COLUMN`. ([#20091](https://github.com/trinodb/trino/issues/20091))
* Add the {func}`ST_GeomFromKML` function. ([#24297](https://github.com/trinodb/trino/issues/24297))
* Allow configuring the spooling client protocol behaviour with session
  properties. ([#24655](https://github.com/trinodb/trino/issues/24655), [#24757](https://github.com/trinodb/trino/issues/24757))
* Improve stability of the cluster under load. ([#24572](https://github.com/trinodb/trino/issues/24572))
* Prevent planning failures resulting from join pushdown for modified tables. ([#24447](https://github.com/trinodb/trino/issues/24447))
* Fix parsing of negative hexadecimal, octal, and binary numeric literals. ([#24601](https://github.com/trinodb/trino/issues/24601))
* Fix failures with recursive delete operations on S3Express preventing usage
  for fault-tolerant execution. ([#24763](https://github.com/trinodb/trino/issues/24763))

## Web UI

* Add support for filtering queries by client tags. ([#24494](https://github.com/trinodb/trino/issues/24494))

## JDBC driver

* Add `planningTimeMillis`, `analysisTimeMillis`, `finishingTimeMillis`,
  `physicalInputBytes`, `physicalWrittenBytes`, `internalNetworkInputBytes` and
  `physicalInputTimeMillis` to `io.trino.jdbc.QueryStats`. ([#24571](https://github.com/trinodb/trino/issues/24571),
  [#24604](https://github.com/trinodb/trino/issues/24604))
* Improve the `Connection.isValid(int)` method so it validates the connection
  and credentials, and add the `validateConnection` connection property.
  ([#24127](https://github.com/trinodb/trino/issues/24127), [#22684](https://github.com/trinodb/trino/issues/22684))
* Prevent failures when using the spooling protocol with a cluster using its own
  certificate chain. ([#24595](https://github.com/trinodb/trino/issues/24595))
* Fix deserialization failures with `SetDigest`, `BingTile`, and `Color` types. ([#24612](https://github.com/trinodb/trino/issues/24612))

## CLI

* Prevent failures when using the spooling protocol with a cluster using its own
  certificate chain. ([#24595](https://github.com/trinodb/trino/issues/24595))
* Fix deserialization of `SetDigest`, `BingTile`, and `Color` types. ([#24612](https://github.com/trinodb/trino/issues/24612))

## BigQuery connector

* Allow configuration of the channel pool for gRPC communication with BigQuery. ([#24638](https://github.com/trinodb/trino/issues/24638))

## ClickHouse connector

* {{breaking}} Raise minimum required versions to ClickHouse 24.3 and Altinity
  22.3. ([#24515](https://github.com/trinodb/trino/issues/24515))
* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## Delta Lake connector

* Add support for SSE-C in S3 security mapping. ([#24566](https://github.com/trinodb/trino/issues/24566))
* Allow configuring the endpoint for the Google Storage file system with the
  `gcs.endpoint` property. ([#24626](https://github.com/trinodb/trino/issues/24626))
* Improve performance of reading from new Delta Lake table data by compressing
  files with `ZSTD` by default, instead of the previous `SNAPPY`.
  ([#17426](https://github.com/trinodb/trino/issues/17426))
* Improve performance of queries on tables with large transaction log JSON
  files. ([#24491](https://github.com/trinodb/trino/issues/24491))
* Improve performance of reading from Parquet files with a large number of row
  groups. ([#24618](https://github.com/trinodb/trino/issues/24618))
* Improve performance for the `OPTIMIZE` statement by enabling concurrent
  execution. ([#16985](https://github.com/trinodb/trino/issues/16985))
* Improve performance of reading from large files on S3. ([#24521](https://github.com/trinodb/trino/issues/24521))
* Correct catalog information in JMX metrics when using file system caching with
  multiple catalogs. ([#24510](https://github.com/trinodb/trino/issues/24510))
* Fix table read failures when using the Alluxio file system. ([#23815](https://github.com/trinodb/trino/issues/23815))
* Fix incorrect results when updating tables with deletion vectors enabled. ([#24648](https://github.com/trinodb/trino/issues/24648))
* Fix incorrect results when reading from tables with deletion vectors enabled. ([#22972](https://github.com/trinodb/trino/issues/22972))

## Elasticsearch connector

* Improve performance of queries that reference nested fields from Elasticsearch
  documents. ([#23069](https://github.com/trinodb/trino/issues/23069))

## Faker connector

* Add support for views. ([#24242](https://github.com/trinodb/trino/issues/24242))
* Support generating sequences. ([#24590](https://github.com/trinodb/trino/issues/24590))
* {{breaking}} Replace specifying constraints using `WHERE` clauses with the
  `min`, `max`, and `options` column properties. ([#24147](https://github.com/trinodb/trino/issues/24147))

## Hive connector

* Add support for SSE-C in S3 security mapping. ([#24566](https://github.com/trinodb/trino/issues/24566))
* Allow configuring the endpoint for the Google Storage file system with the
  `gcs.endpoint` property. ([#24626](https://github.com/trinodb/trino/issues/24626))
* Split AWS SDK client retry count metrics into separate client-level, logical
  retries and lower-level HTTP client retries. ([#24606](https://github.com/trinodb/trino/issues/24606))
* Improve performance of reading from Parquet files with a large number of row
  groups. ([#24618](https://github.com/trinodb/trino/issues/24618))
* Improve performance of reading from large files on S3. ([#24521](https://github.com/trinodb/trino/issues/24521))
* Correct catalog information in JMX metrics when using file system caching with
  multiple catalogs. ([#24510](https://github.com/trinodb/trino/issues/24510))
* Fix table read failures when using the Alluxio file system. ([#23815](https://github.com/trinodb/trino/issues/23815))
* Prevent writing of invalid data for NaN, Infinity, -Infinity values to JSON
  files. ([#24558](https://github.com/trinodb/trino/issues/24558))

## Hudi connector

* Add support for SSE-C in S3 security mapping. ([#24566](https://github.com/trinodb/trino/issues/24566))
* Allow configuring the endpoint for the Google Storage file system with the
  `gcs.endpoint` property. ([#24626](https://github.com/trinodb/trino/issues/24626))
* Improve performance of reading from Parquet files with a large number of row
  groups. ([#24618](https://github.com/trinodb/trino/issues/24618))
* Improve performance of reading from large files on S3. ([#24521](https://github.com/trinodb/trino/issues/24521))

## Iceberg connector

* Add support for the `FIRST`, `AFTER`, and `LAST` clauses to `ALTER TABLE ...
  ADD COLUMN`. ([#20091](https://github.com/trinodb/trino/issues/20091))
* Add support for SSE-C in S3 security mapping. ([#24566](https://github.com/trinodb/trino/issues/24566))
* Allow configuring the endpoint for the Google Storage file system with the
  `gcs.endpoint` property. ([#24626](https://github.com/trinodb/trino/issues/24626))
* Add `$entries` metadata table. ([#24172](https://github.com/trinodb/trino/issues/24172))
* Add `$all_entries` metadata table. ([#24543](https://github.com/trinodb/trino/issues/24543))
* Allow configuring the `parquet_bloom_filter_columns` table property. ([#24573](https://github.com/trinodb/trino/issues/24573))
* Allow configuring the `orc_bloom_filter_columns` table property. ([#24584](https://github.com/trinodb/trino/issues/24584))
* Add the `rollback_to_snapshot` table procedure. The existing
  `system.rollback_to_snapshot` procedure is deprecated. ([#24580](https://github.com/trinodb/trino/issues/24580))
* Improve performance when listing columns. ([#23909](https://github.com/trinodb/trino/issues/23909))
* Improve performance of reading from Parquet files with a large number of row
  groups. ([#24618](https://github.com/trinodb/trino/issues/24618))
* Improve performance of reading from large files on S3. ([#24521](https://github.com/trinodb/trino/issues/24521))
* Remove the oldest tracked version metadata files when
  `write.metadata.delete-after-commit.enabled` is set to `true`. ([#19582](https://github.com/trinodb/trino/issues/19582))
* Correct catalog information in JMX metrics when using file system caching with
  multiple catalogs. ([#24510](https://github.com/trinodb/trino/issues/24510))
* Fix table read failures when using the Alluxio file system. ([#23815](https://github.com/trinodb/trino/issues/23815))
* Prevent return of incomplete results by the `table_changes` table function. ([#24709](https://github.com/trinodb/trino/issues/24709)) 
* Prevent failures on queries accessing tables with multiple nested partition
  columns. ([#24628](https://github.com/trinodb/trino/issues/24628))

## Ignite connector

* Add support for `MERGE` statements. ([#24443](https://github.com/trinodb/trino/issues/24443))
* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## Kudu connector

* Add support for unpartitioned tables. ([#24661](https://github.com/trinodb/trino/issues/24661))

## MariaDB connector

* Add support for the `FIRST`, `AFTER`, and `LAST` clauses to `ALTER TABLE ...
  ADD COLUMN`. ([#24735](https://github.com/trinodb/trino/issues/24735))
* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## MySQL connector

* Add support for the `FIRST`, `AFTER`, and `LAST` clauses to `ALTER TABLE ...
  ADD COLUMN`. ([#24735](https://github.com/trinodb/trino/issues/24735))
* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## Oracle connector

* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## Phoenix connector

* Allow configuring scan page timeout with the
  `phoenix.server-scan-page-timeout` configuration property. ([#24689](https://github.com/trinodb/trino/issues/24689))
* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## PostgreSQL connector

* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## Redshift connector

* Improve performance of reading from Redshift tables. ([#24117](https://github.com/trinodb/trino/issues/24117))
* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## SingleStore connector

* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## Snowflake connector

* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## SQL Server connector

* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## Vertica connector

* Fix failure when updating values to `NULL`. ([#24204](https://github.com/trinodb/trino/issues/24204))

## SPI

* Remove support for connector-level event listeners and the related
  `Connector.getEventListeners()` method. ([#24609](https://github.com/trinodb/trino/issues/24609))
