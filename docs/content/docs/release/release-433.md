---
title: Release 433
description: Release 433 documentation
---
# Release 433 (10 Nov 2023)

## General

* Improve planning time and resulting plan efficiency for queries involving
  `UNION ALL` with `LIMIT`. ([#19471](https://github.com/trinodb/trino/issues/19471))
* Fix long query planning times for queries with multiple window functions. ([#18491](https://github.com/trinodb/trino/issues/18491))
* Fix resource groups not noticing updates to the `softMemoryLimit` if it is
  changed from a percent-based value to an absolute value. ([#19626](https://github.com/trinodb/trino/issues/19626))
* Fix potential query failure for queries involving arrays, `GROUP BY`,
  or `DISTINCT`. ([#19596](https://github.com/trinodb/trino/issues/19596))

## BigQuery connector

* Fix incorrect results for queries involving projections and the `query` table
  function. ([#19570](https://github.com/trinodb/trino/issues/19570))

## Delta Lake connector

* Fix query failure when reading ORC files with a `DECIMAL` column that
  contains only null values. ([#19636](https://github.com/trinodb/trino/issues/19636))
* Fix possible JVM crash when reading short decimal columns in Parquet files
  created by Impala. ([#19697](https://github.com/trinodb/trino/issues/19697))

## Hive connector

* Add support for reading tables where a column's type has been changed from
  `boolean` to `varchar`. ([#19571](https://github.com/trinodb/trino/issues/19571))
* Add support for reading tables where a column's type has been changed from
  `varchar` to `double`. ([#19517](https://github.com/trinodb/trino/issues/19517))
* Add support for reading tables where a column's type has been changed from
  `tinyint`, `smallint`, `integer`, or `bigint` to `double`. ([#19520](https://github.com/trinodb/trino/issues/19520))
* Add support for altering table comments in the Glue catalog. ([#19073](https://github.com/trinodb/trino/issues/19073))
* Fix query failure when reading ORC files with a `DECIMAL` column that
  contains only null values. ([#19636](https://github.com/trinodb/trino/issues/19636))
* Fix possible JVM crash when reading short decimal columns in Parquet files
  created by Impala. ([#19697](https://github.com/trinodb/trino/issues/19697))

## Hudi connector

* Fix query failure when reading ORC files with a `DECIMAL` column that
  contains only null values. ([#19636](https://github.com/trinodb/trino/issues/19636))
* Fix possible JVM crash when reading short decimal columns in Parquet files
  created by Impala. ([#19697](https://github.com/trinodb/trino/issues/19697))

## Iceberg connector

* Fix incorrect query results when querying Parquet files with dynamic filtering
  on `UUID` columns. ([#19670](https://github.com/trinodb/trino/issues/19670))
* Fix query failure when reading ORC files with a `DECIMAL` column that
  contains only null values. ([#19636](https://github.com/trinodb/trino/issues/19636))
* Fix possible JVM crash when reading short decimal columns in Parquet files
  created by Impala. ([#19697](https://github.com/trinodb/trino/issues/19697))
* Prevent creation of separate entries for storage tables of materialized views.
  ([#18853](https://github.com/trinodb/trino/issues/18853))

## SPI

* Add JMX metrics for event listeners through
  `trino.eventlistener:name=EventListenerManager`. ([#19623](https://github.com/trinodb/trino/issues/19623))
