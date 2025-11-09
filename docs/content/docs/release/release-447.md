---
title: Release 447
description: Release 447 documentation
---
# Release 447 (8 May 2024)

## General

* Add support for [](/sql/show-create-function). ([#21809](https://github.com/trinodb/trino/issues/21809))
* Add support for the {func}`bitwise_xor_agg` aggregation function. ([#21436](https://github.com/trinodb/trino/issues/21436))
* {{breaking}} Require JDK 22 to run Trino, including updated [](jvm-config).([#20980](https://github.com/trinodb/trino/issues/20980))
* Improve performance of `ORDER BY` queries with `LIMIT` on large data sets. ([#21761](https://github.com/trinodb/trino/issues/21761))
* Improve performance of queries containing the {func}`rank` or
  {func}`row_number` window functions. ([#21639](https://github.com/trinodb/trino/issues/21639))
* Improve performance of correlated queries with `EXISTS`. ([#21422](https://github.com/trinodb/trino/issues/21422))
* Fix potential failure for expressions involving `try_cast(parse_json(...))`. ([#21877](https://github.com/trinodb/trino/issues/21877))

## CLI

* Fix incorrect error location markers for SQL UDFs causing the CLI to print
  exceptions. ([#21357](https://github.com/trinodb/trino/issues/21357))

## Delta Lake connector

* Add support for concurrent `DELETE` and `TRUNCATE` queries. ([#18521](https://github.com/trinodb/trino/issues/18521))
* Fix under-accounting of memory usage when writing strings to Parquet files. ([#21745](https://github.com/trinodb/trino/issues/21745))

## Hive connector

* Add support for metastore caching on tables that have not been analyzed, which
  can be enabled with the `hive.metastore-cache.cache-missing-stats` and
  `hive.metastore-cache.cache-missing-partitions` configuration properties. ([#21822](https://github.com/trinodb/trino/issues/21822))
* Fix under-accounting of memory usage when writing strings to Parquet files. ([#21745](https://github.com/trinodb/trino/issues/21745))
* Fix failure when translating Hive views that contain `EXISTS` clauses. ([#21829](https://github.com/trinodb/trino/issues/21829))

## Hudi connector

* Fix under-accounting of memory usage when writing strings to Parquet files. ([#21745](https://github.com/trinodb/trino/issues/21745))

## Iceberg connector

* Fix under-accounting of memory usage when writing strings to Parquet files. ([#21745](https://github.com/trinodb/trino/issues/21745))

## Phoenix connector

* {{breaking}} Remove support for Phoenix versions 5.1.x and earlier. ([#21569](https://github.com/trinodb/trino/issues/21569))

## Pinot connector

* Add support for specifying an explicit broker URL with the `pinot.broker-url`
  configuration property. ([#17791](https://github.com/trinodb/trino/issues/17791))

## Redshift connector

* {{breaking}} Remove deprecated legacy type mapping and the associated
  `redshift.use-legacy-type-mapping` configuration property. ([#21855](https://github.com/trinodb/trino/issues/21855))
