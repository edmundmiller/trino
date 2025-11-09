---
title: Release 460
description: Release 460 documentation
---
# Release 460 (3 Oct 2024)

## General

* Fix failure for certain queries involving lambda expressions. ([#23649](https://github.com/trinodb/trino/issues/23649))

## Atop connector

* {{breaking}} Remove the Atop connector. ([#23550](https://github.com/trinodb/trino/issues/23550))

## ClickHouse connector

* Improve performance of listing columns. ([#23429](https://github.com/trinodb/trino/issues/23429))
* Improve performance for queries comparing `varchar` columns. ([#23558](https://github.com/trinodb/trino/issues/23558)) 
* Improve performance for queries using `varchar` columns for `IN` comparisons. ([#23581](https://github.com/trinodb/trino/issues/23581))
* Improve performance for queries with complex expressions involving `LIKE`. ([#23591](https://github.com/trinodb/trino/issues/23591))

## Delta Lake connector

* Add support for using an [Alluxio cluster as file system
  cache](/docs/object-storage/file-system-alluxio). ([#21603](https://github.com/trinodb/trino/issues/21603))
* Add support for WASBS to [](/object-storage/file-system-azure). ([#23548](https://github.com/trinodb/trino/issues/23548))
* Disallow writing to tables that both change data feed and [deletion
  vectors](https://docs.delta.io/latest/delta-deletion-vectors.html) are
  enabled. ([#23653](https://github.com/trinodb/trino/issues/23653))
* Fix query failures when writing bloom filters in Parquet files. ([#22701](https://github.com/trinodb/trino/issues/22701))

## Hive connector

* Add support for using an [Alluxio cluster as file system
  cache](/docs/object-storage/file-system-alluxio). ([#21603](https://github.com/trinodb/trino/issues/21603))
* Add support for WASBS to [](/object-storage/file-system-azure). ([#23548](https://github.com/trinodb/trino/issues/23548))
* Fix query failures when writing bloom filters in Parquet files. ([#22701](https://github.com/trinodb/trino/issues/22701))

## Hudi connector

* Add support for WASBS to [](/object-storage/file-system-azure). ([#23548](https://github.com/trinodb/trino/issues/23548))

## Iceberg connector

* Add support for using an [Alluxio cluster as file system
  cache](/docs/object-storage/file-system-alluxio). ([#21603](https://github.com/trinodb/trino/issues/21603))
* Add support for WASBS to [](/object-storage/file-system-azure). ([#23548](https://github.com/trinodb/trino/issues/23548))
* Ensure table columns are cached in Glue even when table comment is too long. ([#23483](https://github.com/trinodb/trino/issues/23483))
* Reduce planning time for queries on columns containing a large number of
  nested fields. ([#23451](https://github.com/trinodb/trino/issues/23451))
* Fix query failures when writing bloom filters in Parquet files. ([#22701](https://github.com/trinodb/trino/issues/22701))

## Oracle connector

* Improve performance for queries casting columns to `char` or to `varchar`. ([#22728](https://github.com/trinodb/trino/issues/22728))

## Raptor connector

* {{breaking}} Remove the Raptor connector. ([#23588](https://github.com/trinodb/trino/issues/23588))

## SQL Server connector

* Improve performance of listing columns. ([#23429](https://github.com/trinodb/trino/issues/23429))
