---
title: Release 464
description: Release 464 documentation
---
# Release 464 (30 Oct 2024)

## General

* {{breaking}} Require JDK 23 to run Trino, including updated [](jvm-config). ([#21316](https://github.com/trinodb/trino/issues/21316))
* Add the [](/connector/faker) for easy generation of data. ([#23691](https://github.com/trinodb/trino/issues/23691))
* Add the [](/connector/vertica). ([#23948](https://github.com/trinodb/trino/issues/23948))
* Rename the
  `fault-tolerant-execution-eager-speculative-tasks-node_memory-overcommit`
  configuration property to
  `fault-tolerant-execution-eager-speculative-tasks-node-memory-overcommit`.
  ([#23876](https://github.com/trinodb/trino/issues/23876))  

## Accumulo connector

* {{breaking}} Remove the Accumulo connector. ([#23792](https://github.com/trinodb/trino/issues/23792))  

## BigQuery connector

* Fix incorrect results when reading array columns and
  `bigquery.arrow-serialization.enabled` is set to true. ([#23982](https://github.com/trinodb/trino/issues/23982))

## Delta Lake connector

* Fix failure of S3 file listing of buckets that enforce [requester
  pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html).
  ([#23906](https://github.com/trinodb/trino/issues/23906))

## Hive connector

* Use the `hive.metastore.partition-batch-size.max` catalog configuration
  property value in the `sync_partition_metadata` procedure. Change the default
  batch size from 1000 to 100. ([#23895](https://github.com/trinodb/trino/issues/23895))
* Fix failure of S3 file listing of buckets that enforce [requester
  pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html).
  ([#23906](https://github.com/trinodb/trino/issues/23906))

## Hudi connector

* Fix failure of S3 file listing of buckets that enforce [requester
  pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html).
  ([#23906](https://github.com/trinodb/trino/issues/23906))

## Iceberg connector

* Improve performance of `OPTIMIZE` on large partitioned tables. ([#10785](https://github.com/trinodb/trino/issues/10785))
* Rename the `iceberg.expire_snapshots.min-retention` configuration property to
  `iceberg.expire-snapshots.min-retention`. ([#23876](https://github.com/trinodb/trino/issues/23876))
* Rename the `iceberg.remove_orphan_files.min-retention` configuration property
  to `iceberg.remove-orphan-files.min-retention`. ([#23876](https://github.com/trinodb/trino/issues/23876))
* Fix failure of S3 file listing of buckets that enforce [requester
  pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html).
  ([#23906](https://github.com/trinodb/trino/issues/23906))
* Fix incorrect column constraints when using the `migrate` procedure on tables
  that contain `NULL` values. ([#23928](https://github.com/trinodb/trino/issues/23928))

## Phoenix connector

* {{breaking}} Require JVM configuration to allow the Java security manager. ([#24207](https://github.com/trinodb/trino/issues/24207))
