---
title: Release 448
description: Release 448 documentation
---
# Release 448 (15 May 2024)

## General

* Fix query failure when reading columns with names that contain only
  non-alphanumeric characters. ([#21833](https://github.com/trinodb/trino/issues/21833))
* Fix potential incorrect results for queries with complex predicates. ([#21887](https://github.com/trinodb/trino/issues/21887))
* Fix potential loss of a query completion event when multiple queries fail at
  the same time. ([#21896](https://github.com/trinodb/trino/issues/21896))
* Fix startup failure when fault-tolerant execution is enabled with Google
  Cloud Storage exchange. ([#21951](https://github.com/trinodb/trino/issues/21951))
* Fix potential failure when queries contain `try_cast`. ([#21952](https://github.com/trinodb/trino/issues/21952))
* Fix graceful shutdown potentially hanging indefinitely when a worker node has
  crashed. ([#18329](https://github.com/trinodb/trino/issues/18329))

## Delta Lake connector

* Add support for caching Glue metadata. ([#20657](https://github.com/trinodb/trino/issues/20657))
* Update Glue to V2 REST interface. The old implementation can be temporarily
  restored by setting the `hive.metastore` configuration property to `glue-v1`. ([#20657](https://github.com/trinodb/trino/issues/20657))
  * {{breaking}} The new implementation does not support and ignores the following
    configuration properties: `hive.metastore-refresh-interval`,
    `hive.metastore-refresh-max-threads`, `hive.metastore-cache.cache-partitions`,
    `hive.metastore-cache.cache-missing`, `hive.metastore-cache.cache-missing-partitions`,
    `hive.metastore-cache.cache-missing-stats`.
* Improve performance of reading from Parquet files. ([#21465](https://github.com/trinodb/trino/issues/21465))

## Hive connector

* Add support for reading integers and timestamps in Parquet files as `DOUBLE`
  and `VARCHAR` columns, respectively, in Trino. ([#21509](https://github.com/trinodb/trino/issues/21509))
* Add support for caching Glue metadata. ([#20657](https://github.com/trinodb/trino/issues/20657))
* Update Glue to V2 REST interface. The old implementation can be temporarily
  restored by setting the `hive.metastore` configuration property to `glue-v1`. ([#20657](https://github.com/trinodb/trino/issues/20657))
  * {{breaking}} The new implementation does not support and ignores the following
    configuration properties: `hive.metastore-refresh-interval`,
    `hive.metastore-refresh-max-threads`, `hive.metastore-cache.cache-partitions`,
    `hive.metastore-cache.cache-missing`, `hive.metastore-cache.cache-missing-partitions`,
    `hive.metastore-cache.cache-missing-stats`.
* Improve performance of reading from Parquet files. ([#21465](https://github.com/trinodb/trino/issues/21465))
* Fix potential failure when reading ORC files larger than 2GB. ([#21587](https://github.com/trinodb/trino/issues/21587))

## Hudi connector

* Improve performance of reading from Parquet files. ([#21465](https://github.com/trinodb/trino/issues/21465))
* Fix potential failure when reading ORC files larger than 2GB. ([#21587](https://github.com/trinodb/trino/issues/21587))
* Update Glue to V2 REST interface. The old implementation can be temporarily
  restored by setting the `hive.metastore` configuration property to `glue-v1`. ([#20657](https://github.com/trinodb/trino/issues/20657))
  * {{breaking}} The new implementation does not support and ignores the following
    configuration properties: `hive.metastore-refresh-interval`,
    `hive.metastore-refresh-max-threads`, `hive.metastore-cache.cache-partitions`,
    `hive.metastore-cache.cache-missing`, `hive.metastore-cache.cache-missing-partitions`,
    `hive.metastore-cache.cache-missing-stats`.

## Iceberg connector

* Improve performance of reading from Parquet files. ([#21465](https://github.com/trinodb/trino/issues/21465))
* Fix potential failure when reading ORC files larger than 2GB. ([#21587](https://github.com/trinodb/trino/issues/21587))

## Phoenix connector

* Remove incorrect type mapping for `TIME` values. ([#21879](https://github.com/trinodb/trino/issues/21879))
