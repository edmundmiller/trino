---
title: Release 444
description: Release 444 documentation
---
# Release 444 (3 Apr 2024)

## General

* Improve planning time for queries with a large number of joins. ([#21360](https://github.com/trinodb/trino/issues/21360))
* Fix failure for queries containing large numbers of `LIKE` terms in boolean
  expressions. ([#21235](https://github.com/trinodb/trino/issues/21235))
* Fix potential failure when queries contain filtered aggregations. ([#21272](https://github.com/trinodb/trino/issues/21272))

## Docker image

* Update Java runtime to Java 22. ([#21161](https://github.com/trinodb/trino/issues/21161))

## BigQuery connector

* Fix failure when reading BigQuery views with [Apache
  Arrow](https://arrow.apache.org/docs/). ([#21337](https://github.com/trinodb/trino/issues/21337))

## ClickHouse connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## Delta Lake connector

* Add support for reading `BYTE_STREAM_SPLIT` encoding in Parquet files. ([#8357](https://github.com/trinodb/trino/issues/8357))
* Add support for [Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl)
  with the native S3 file system. ([#21176](https://github.com/trinodb/trino/issues/21176))
* Add support for concurrent, non-conflicting writes when a table is read and
  written to in the same query. ([#20983](https://github.com/trinodb/trino/issues/20983))
* Add support for reading tables with [v2
  checkpoints](https://github.com/delta-io/delta/blob/master/PROTOCOL.md#v2-spec).
  ([#19345](https://github.com/trinodb/trino/issues/19345))
* Add support for reading [shallow cloned tables](delta-lake-shallow-clone).
  ([#17011](https://github.com/trinodb/trino/issues/17011))
* {{breaking}} Remove support for split size configuration with the catalog
  properties `delta.max-initial-splits` and `delta.max-initial-split-size`, and
  the catalog session property `max_initial_split_size`. ([#21320](https://github.com/trinodb/trino/issues/21320))
* Fix incorrect results when querying a table that's being modified
  concurrently. ([#21324](https://github.com/trinodb/trino/issues/21324))

## Druid connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## Hive connector

* Add support for reading `BYTE_STREAM_SPLIT` encoding in Parquet files. ([#8357](https://github.com/trinodb/trino/issues/8357))
* Add support for [Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl)
  with the native S3 file system. ([#21176](https://github.com/trinodb/trino/issues/21176))

## Hudi connector

* Add support for reading `BYTE_STREAM_SPLIT` encoding in Parquet files. ([#8357](https://github.com/trinodb/trino/issues/8357))
* Add support for [Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl)
  with the native S3 file system. ([#21176](https://github.com/trinodb/trino/issues/21176))

## Iceberg connector

* Add support for the `metadata_log_entries` system table. ([#20410](https://github.com/trinodb/trino/issues/20410))
* Add support for reading `BYTE_STREAM_SPLIT` encoding in Parquet files. ([#8357](https://github.com/trinodb/trino/issues/8357))
* Add support for [Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl)
  with the native S3 file system. ([#21176](https://github.com/trinodb/trino/issues/21176))

## Ignite connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## MariaDB connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## MySQL connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## Oracle connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## PostgreSQL connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## Redshift connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## SingleStore connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## Snowflake connector

* Add support for table comments. ([#21305](https://github.com/trinodb/trino/issues/21305))
* Improve performance of queries with `ORDER BY ... LIMIT` clause, or `avg`,
  `count(distinct)`, `stddev`, or `stddev_pop` aggregation functions when the
  computation can be pushed down to the underlying database. ([#21219](https://github.com/trinodb/trino/issues/21219),
  [#21148](https://github.com/trinodb/trino/issues/21148), [#21130](https://github.com/trinodb/trino/issues/21130), [#21338](https://github.com/trinodb/trino/issues/21338))
* Improve performance of reading table comments.  ([#21161](https://github.com/trinodb/trino/issues/21161))

## SQLServer connector

* Improve performance of reading table comments. ([#21238](https://github.com/trinodb/trino/issues/21238))

## SPI

* Change group id and capacity of `GroupedAccumulatorState` to `int` type. ([#21333](https://github.com/trinodb/trino/issues/21333))
