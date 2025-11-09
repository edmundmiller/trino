---
title: Release 434
description: Release 434 documentation
---
# Release 434 (29 Nov 2023)

## General

* Add support for a `FILTER` clause to the `LISTAGG` function. ([#19869](https://github.com/trinodb/trino/issues/19869))
* {{breaking}} Rename the `query.max-writer-tasks-count` configuration property
  and the related `max_writer_tasks_count` session property to
  `query.max-writer-task-count` and `max_writer_task_count`. ([#19793](https://github.com/trinodb/trino/issues/19793))
* Improve performance of `INSERT ... SELECT` queries that contain a redundant
  `ORDER BY` clause. ([#19916](https://github.com/trinodb/trino/issues/19916))
* Fix incorrect results for queries involving comparisons between `double` and
  `real` zero and negative zero. ([#19828](https://github.com/trinodb/trino/issues/19828))
* Fix performance regression caused by suboptimal scalar subqueries planning. ([#19922](https://github.com/trinodb/trino/issues/19922))
* Fix failure when queries on data stored on HDFS involve table functions. ([#19849](https://github.com/trinodb/trino/issues/19849))
* Prevent sudden increases in memory consumption in some queries with
  joins involving `UNNEST`. ([#19762](https://github.com/trinodb/trino/issues/19762))

## BigQuery connector

* Add support for reading `json` columns. ([#19790](https://github.com/trinodb/trino/issues/19790))
* Add support for `DELETE` statement. ([#6870](https://github.com/trinodb/trino/issues/6870))
* Improve performance when writing rows. ([#18897](https://github.com/trinodb/trino/issues/18897))

## ClickHouse connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## Delta Lake connector

* {{breaking}} Disallow invalid configuration options. Previously, they were
  silently ignored.  ([#19735](https://github.com/trinodb/trino/issues/19735))
* Improve performance when reading large checkpoint files on partitioned tables.
  ([#19588](https://github.com/trinodb/trino/issues/19588), [#19848](https://github.com/trinodb/trino/issues/19848))
* Push down filters involving columns of type `timestamp(p) with time zone`. ([#18664](https://github.com/trinodb/trino/issues/18664))
* Fix query failure when reading Parquet column index for timestamp columns. ([#16801](https://github.com/trinodb/trino/issues/16801))

## Druid connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## Hive connector

* Add support for columns that changed from `timestamp` to `date` type. ([#19513](https://github.com/trinodb/trino/issues/19513))
* Fix query failure when reading Parquet column index for timestamp columns. ([#16801](https://github.com/trinodb/trino/issues/16801))

## Hudi connector

* Fix query failure when reading Parquet column index for timestamp columns. ([#16801](https://github.com/trinodb/trino/issues/16801))

## Iceberg connector

* {{breaking}} Remove support for legacy table statistics tracking. ([#19803](https://github.com/trinodb/trino/issues/19803))
* {{breaking}} Disallow invalid configuration options. Previously, they were
  silently ignored.  ([#19735](https://github.com/trinodb/trino/issues/19735))
* Fix query failure when reading Parquet column index for timestamp columns. ([#16801](https://github.com/trinodb/trino/issues/16801))
* Don't set owner for Glue materialized views when system security is enabled. ([#19681](https://github.com/trinodb/trino/issues/19681))

## Ignite connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## MariaDB connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## MySQL connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## Oracle connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## Phoenix connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## PostgreSQL connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))
* Prevent possible query failures when join is pushed down. ([#18984](https://github.com/trinodb/trino/issues/18984))

## Redshift connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))
* Prevent possible query failures when join is pushed down. ([#18984](https://github.com/trinodb/trino/issues/18984))

## SingleStore connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))

## SQL Server connector

* Add support for separate metadata caching configuration for schemas, tables,
  and metadata. ([#19859](https://github.com/trinodb/trino/issues/19859))
* Prevent possible query failures when join is pushed down. ([#18984](https://github.com/trinodb/trino/issues/18984))

## SPI

* Add bulk append methods to `BlockBuilder`. ([#19577](https://github.com/trinodb/trino/issues/19577))
* {{breaking}} Remove the `VariableWidthBlockBuilder.buildEntry` method. ([#19577](https://github.com/trinodb/trino/issues/19577))
* {{breaking}} Add required  `ConnectorSession` parameter to the method
  `TableFunctionProcessorProvider.getDataProcessor`. ([#19778](https://github.com/trinodb/trino/issues/19778))
