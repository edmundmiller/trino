---
title: Release 457
description: Release 457 documentation
---
# Release 457 (6 Sep 2024)

## General

* Expose additional JMX metrics about resource groups, including CPU and memory
  usage, limits, and scheduling policy. ([#22957](https://github.com/trinodb/trino/issues/22957))
* Improve performance of queries involving joins when fault tolerant execution
  is enabled. This [adaptive plan
  optimization](/docs/optimizer/adaptive-plan-optimizations) can be disabled with the
  `fault-tolerant-execution-adaptive-join-reordering-enabled` configuration
  property or the `fault_tolerant_execution_adaptive_join_reordering_enabled`
  session property. ([#23046](https://github.com/trinodb/trino/issues/23046))
* Improve performance for [LZ4, Snappy and ZSTD compression and
  decompression](file-compression) used for [exchange spooling with
  fault-tolerant execution](fte-exchange-manager). ([#22532](https://github.com/trinodb/trino/issues/22532))
* {{breaking}} Shorten the name for the Kafka event listener to `kafka`. ([#23308](https://github.com/trinodb/trino/issues/23308))
* Extend the Kafka event listener to send split completion events. ([#23065](https://github.com/trinodb/trino/issues/23065))

## JDBC driver

* Publish a [JDBC driver JAR](jdbc-installation) without bundled, third-party
  dependencies. ([#22098](https://github.com/trinodb/trino/issues/22098))

## BigQuery connector

* Fix failures with queries using table functions when `parent-project-id` is
  defined. ([#23041](https://github.com/trinodb/trino/issues/23041))

## Blackhole connector

* Add support for the `REPLACE` modifier as part of a `CREATE TABLE` statement. ([#23004](https://github.com/trinodb/trino/issues/23004))

## Delta Lake connector

* Add support for creating tables with
  [deletion vector](https://docs.delta.io/latest/delta-deletion-vectors.html).
  ([#22104](https://github.com/trinodb/trino/issues/22104))
* Improve performance for concurrent write operations on S3 by using lock-less
  Delta Lake write reconciliation. ([#23145](https://github.com/trinodb/trino/issues/23145))
* Improve performance for [LZ4, Snappy, and ZSTD compression and
  decompression](file-compression). ([#22532](https://github.com/trinodb/trino/issues/22532))
* Fix SSE configuration when using S3SecurityMapping with kmsKeyId configured. ([#23299](https://github.com/trinodb/trino/issues/23299))

## Hive connector

* Improve performance of queries that scan a large number of partitions. ([#23194](https://github.com/trinodb/trino/issues/23194))
* Improve performance for [LZ4, Snappy, and ZSTD compression and
  decompression](file-compression). ([#22532](https://github.com/trinodb/trino/issues/22532))
* Fix OpenX JSON decoding a JSON array line that resulted in data being written
  to the wrong output column. ([#23120](https://github.com/trinodb/trino/issues/23120))

## Hudi connector

* Improve performance for [LZ4, Snappy, and ZSTD compression and
  decompression](file-compression). ([#22532](https://github.com/trinodb/trino/issues/22532))

## Iceberg connector

* Improve performance for [LZ4, Snappy, and ZSTD compression and
  decompression](file-compression). ([#22532](https://github.com/trinodb/trino/issues/22532))

## Memory connector

* Add support for renaming schemas with `ALTER SCHEMA ... RENAME`. ([#22659](https://github.com/trinodb/trino/issues/22659))

## Prometheus connector

* Fix reading large Prometheus responses. ([#23025](https://github.com/trinodb/trino/issues/23025))

## SPI

* Remove the deprecated `ConnectorMetadata.createView` method. ([#23208](https://github.com/trinodb/trino/issues/23208))
* Remove the deprecated `ConnectorMetadata.beginRefreshMaterializedView` method.
  ([#23212](https://github.com/trinodb/trino/issues/23212))
* Remove the deprecated `ConnectorMetadata.finishInsert` method. ([#23213](https://github.com/trinodb/trino/issues/23213))
* Remove the deprecated `ConnectorMetadata.createTable(ConnectorSession session,
  ConnectorTableMetadata tableMetadata, boolean ignoreExisting)` method.
  ([#23209](https://github.com/trinodb/trino/issues/23209))
* Remove the deprecated `ConnectorMetadata.beginCreateTable` method. ([#23211](https://github.com/trinodb/trino/issues/23211))
* Remove the deprecated `ConnectorSplit.getInfo` method. ([#23271](https://github.com/trinodb/trino/issues/23271))
* Remove the deprecated `DecimalConversions.realToShortDecimal(long value, long
  precision, long scale)` method. ( [#23275](https://github.com/trinodb/trino/issues/23275))
* Remove the deprecated constructor from the `ConstraintApplicationResult`
  class. ([#23272](https://github.com/trinodb/trino/issues/23272))
