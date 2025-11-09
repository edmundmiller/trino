---
title: Release 436
description: Release 436 documentation
---
# Release 436 (11 Jan 2024)

## General

* {{breaking}} Require JDK 21.0.1 to run Trino, including updated
  [](jvm-config). ([#20010](https://github.com/trinodb/trino/issues/20010))
* Improve performance by not generating redundant predicates. ([#16520](https://github.com/trinodb/trino/issues/16520))
* Fix query failure when invoking the `json_table` function. ([#20122](https://github.com/trinodb/trino/issues/20122))
* Fix query hang when a [](/udf/sql) dereferences a row field. ([#19997](https://github.com/trinodb/trino/issues/19997)).
* Fix potential incorrect results when using the {func}`ST_Centroid` and
  {func}`ST_Buffer` functions for tiny geometries. ([#20237](https://github.com/trinodb/trino/issues/20237))

## Delta Lake connector

* Add support for querying files with corrupt or incorrect statistics, which can
  be enabled with the `parquet_ignore_statistics` catalog session property. ([#20228](https://github.com/trinodb/trino/issues/20228))
* Improve performance of queries with selective joins on partition columns. ([#20261](https://github.com/trinodb/trino/issues/20261))
* Reduce the number of requests made to AWS Glue when listing tables, schemas,
  or functions. ([#20189](https://github.com/trinodb/trino/issues/20189))
* Fix incorrect results when querying Parquet files containing column indexes
  when the query has filters on multiple columns. ([#20267](https://github.com/trinodb/trino/issues/20267))

## ElasticSearch connector

* {{breaking}} Add support for ElasticSearch
  [version 8](https://www.elastic.co/guide/en/elasticsearch/reference/current/es-release-notes.html),
  and remove support for ElasticSearch version 6. ([#20258](https://github.com/trinodb/trino/issues/20258))
* Add [OpenSearch connector](/docs/connector/opensearch). ([#11377](https://github.com/trinodb/trino/issues/11377))

## Hive connector

* Reduce the number of requests made to AWS Glue when listing tables, schemas,
  or functions. ([#20189](https://github.com/trinodb/trino/issues/20189))
* Fix failure when reading certain Avro data with Union data types. ([#20233](https://github.com/trinodb/trino/issues/20233))
* Fix incorrect results when querying Parquet files containing column indexes
  when the query has filters on multiple columns. ([#20267](https://github.com/trinodb/trino/issues/20267))

## Hudi connector

* Add support for enforcing that a filter on a partition key must be present in
  the query. This can be enabled by with the
  ``hudi.query-partition-filter-required`` configuration property or the
  ``query_partition_filter_required`` catalog session property. ([#19906](https://github.com/trinodb/trino/issues/19906))
* Fix incorrect results when querying Parquet files containing column indexes
  when the query has filters on multiple columns. ([#20267](https://github.com/trinodb/trino/issues/20267))

## Iceberg connector

* Add support for querying files with corrupt or incorrect statistics, which can
  be enabled with the `parquet_ignore_statistics` catalog session property. ([#20228](https://github.com/trinodb/trino/issues/20228))
* Improve performance of queries with selective joins on partition columns. ([#20212](https://github.com/trinodb/trino/issues/20212))
* Reduce the number of requests made to AWS Glue when listing tables, schemas,
  or functions. ([#20189](https://github.com/trinodb/trino/issues/20189))
* Fix potential loss of data when running multiple `INSERT` queries at the same
  time. ([#20092](https://github.com/trinodb/trino/issues/20092))
* Fix incorrect results when providing a nonexistent namespace while listing
  namespaces. ([#19980](https://github.com/trinodb/trino/issues/19980))
* Fix predicate pushdown not running for Parquet files when columns have been
  renamed. ([#18855](https://github.com/trinodb/trino/issues/18855))

## SQL Server connector

* Fix incorrect results for `DATETIMEOFFSET` values before the year 1400. ([#16559](https://github.com/trinodb/trino/issues/16559))
