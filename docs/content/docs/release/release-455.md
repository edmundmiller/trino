---
title: Release 455
description: Release 455 documentation
---
# Release 455 (29 Aug 2024)

## General

* Add query starting time in `QueryStatistics` in all [](admin-event-listeners).
  ([#23113](https://github.com/trinodb/trino/issues/23113))
* Add JMX metrics for the bean
  `trino.execution.executor.timesharing:name=TimeSharingTaskExecutor` replacing
  metrics previously found in `trino.execution.executor:name=TaskExecutor`.
  ([#22914](https://github.com/trinodb/trino/issues/22914))
* Add support S3 file system encryption with fault-tolerant execution mode. ([#22529](https://github.com/trinodb/trino/issues/22529))
* Fix memory tracking issue for aggregations that could cause worker crashes
  with out-of-memory errors. ([#23098](https://github.com/trinodb/trino/issues/23098))

## Delta Lake connector

* Allow configuring endpoint for the native Azure filesystem. ([#23071](https://github.com/trinodb/trino/issues/23071))
* Improve stability for concurrent Glue connections. ([#23039](https://github.com/trinodb/trino/issues/23039))

## ClickHouse connector

* Add support for creating tables with the `MergeTree` engine without the
  `order_by` table property. ([#23048](https://github.com/trinodb/trino/issues/23048))

## Hive connector

* Allow configuring endpoint for the native Azure filesystem. ([#23071](https://github.com/trinodb/trino/issues/23071))
* Improve stability for concurrent Glue connections. ([#23039](https://github.com/trinodb/trino/issues/23039))
* Fix query failures when Parquet files contain column names that only differ in
  case. ([#23050](https://github.com/trinodb/trino/issues/23050))

## Hudi connector

* Allow configuring endpoint for the native Azure filesystem. ([#23071](https://github.com/trinodb/trino/issues/23071))

## Iceberg connector

* Allow configuring endpoint for the native Azure filesystem. ([#23071](https://github.com/trinodb/trino/issues/23071))
* Improve stability for concurrent Glue connections. ([#23039](https://github.com/trinodb/trino/issues/23039))
* Fix `$files` table not showing delete files with the Iceberg v2 format. ([#16233](https://github.com/trinodb/trino/issues/16233))

## OpenSearch connector

* Improve performance of queries that reference nested fields from OpenSearch
  documents. ([#22646](https://github.com/trinodb/trino/issues/22646))

## PostgreSQL

* Fix potential failure for pushdown of `euclidean_distance`, `cosine_distance`
  and `dot_product` functions. ([#23152](https://github.com/trinodb/trino/issues/23152))

## Prometheus connector

* Add support for the catalog session properties `query_chunk_size_duration` and
  `max_query_range_duration`. ([#22319](https://github.com/trinodb/trino/issues/22319))

## Redshift connector

* Release resources in Redshift promptly when a query is cancelled. ([#22774](https://github.com/trinodb/trino/issues/22774))
