---
title: Release 475
description: Release 475 documentation
---
# Release 475 (23 Apr 2025)

## General

* Add support for the `CORRESPONDING` clause in set operations. ([#25260](https://github.com/trinodb/trino/issues/25260))
* Add support for the `AUTO` grouping set that includes all non-aggregated columns 
  in the `SELECT` clause. ([#18390](https://github.com/trinodb/trino/issues/18390))
* Publish additional metrics for input tables in event listener. ([#25475](https://github.com/trinodb/trino/issues/25475))
* Expose dynamic filter statistics in the `QueryCompletedEvent`. ([#25575](https://github.com/trinodb/trino/issues/25575))
* Improve scalability of inline data encoding in the spooling client protocol. ([#25439](https://github.com/trinodb/trino/issues/25439))
* Improve performance of queries involving the `exclude_columns` table function. ([#25117](https://github.com/trinodb/trino/issues/25117))
* Disallow dropping the `system` catalog. ([#24745](https://github.com/trinodb/trino/issues/24745))
* Fix occasional query failures when [adaptive planning](/docs/optimizer/adaptive-plan-optimizations) is enabled. ([#25411](https://github.com/trinodb/trino/issues/25411))
* Fix incorrect results when using window functions with `DISTINCT`. ([#25434](https://github.com/trinodb/trino/issues/25434))
* Fix query failures with `EXCEEDED_LOCAL_MEMORY_LIMIT` errors due to incorrect memory accounting. ([#25600](https://github.com/trinodb/trino/issues/25600))
* Properly handle inline session properties for `EXPLAIN` queries. ([#25496](https://github.com/trinodb/trino/issues/25496))
* Add support for exporting OpenTelemetry traces using the HTTP protocol with the `tracing.exporter.protocol` 
  configuration property set to `http/protobuf`. ([#25573](https://github.com/trinodb/trino/issues/25573))

## Security

* Fix incorrect access denial for access control with impersonation when access is granted via the role. ([#25166](https://github.com/trinodb/trino/issues/25166))

## JDBC driver

* Avoid query cancellation when the client is fetching results. ([#25267](https://github.com/trinodb/trino/issues/25267))

## CLI

* Avoid query cancellation when the client is fetching results. ([#25267](https://github.com/trinodb/trino/issues/25267))

## Clickhouse connector

* Add support for Clickhouse's `bool` type. ([#25130](https://github.com/trinodb/trino/issues/25130))

## BigQuery connector

* Add support for limiting the max parallelism with the `bigquery.max-parallelism` configuration property. ([#25422](https://github.com/trinodb/trino/issues/25422))
* Fix queries getting stuck when reading large tables. ([#25423](https://github.com/trinodb/trino/issues/25423))

## Delta Lake connector

* Allow cross-region data retrieval when using the S3 native filesystem. ([#25200](https://github.com/trinodb/trino/issues/25200))
* Add support for all storage classes when using the S3 native filesystem for writes. ([#25435](https://github.com/trinodb/trino/issues/25435))
* Improve performance when filtering on `$path`, `$file_modified_time` or `$file_size` columns. ([#25369](https://github.com/trinodb/trino/issues/25369))
* Improve performance of scans on Delta Lake tables with v2 checkpoints. ([#25469](https://github.com/trinodb/trino/issues/25469))

## Hive connector

* Allow cross-region data retrieval when using the S3 native filesystem. ([#25200](https://github.com/trinodb/trino/issues/25200))
* Add support for all storage classes when using the S3 native filesystem for writes. ([#25435](https://github.com/trinodb/trino/issues/25435))
* Add support for showing column comments on Hive views. ([#23845](https://github.com/trinodb/trino/issues/23845))
* Add support for multiple predicates on partition projection columns with [injected types](https://docs.aws.amazon.com/athena/latest/ug/partition-projection-supported-types.html#partition-projection-injected-type). ([#17641](https://github.com/trinodb/trino/issues/17641))
* Fix potential failures or incorrect results when querying partitioned tables using the OpenX JSON SerDe. ([#25444](https://github.com/trinodb/trino/issues/25444))
* Ensure Hive metastore locks are released if a failure occurs during lock acquisition. ([#25380](https://github.com/trinodb/trino/issues/25380))
* Rename `hive.s3.storage-class-filter` to `hive.s3-glacier-filter` to better reflect its purpose. ([#25633](https://github.com/trinodb/trino/issues/25633))
* Fix incorrect results when reading timestamp values with leading or trailing spaces using the Regex and 
  OpenX JSON table deserializers. ([#25442](https://github.com/trinodb/trino/issues/25442))
* Fix potential performance regression when reading ORC data. ([#25617](https://github.com/trinodb/trino/issues/25617))

## Iceberg connector

* Allow cross-region data retrieval when using the S3 native filesystem. ([#25200](https://github.com/trinodb/trino/issues/25200))
* Add support for all storage classes when using the S3 native filesystem for writes. ([#25435](https://github.com/trinodb/trino/issues/25435))
* Add `system.iceberg_tables` system table to allow listing only Iceberg tables. ([#25136](https://github.com/trinodb/trino/issues/25136))
* Add support for IAM role authentication with the REST catalog. ([#25002](https://github.com/trinodb/trino/issues/25002))
* Fix potential failure when queries modify a table concurrently. ([#25445](https://github.com/trinodb/trino/issues/25445))
* Add support for returning column statistics for new columns in `$partitions` system table. ([#25532](https://github.com/trinodb/trino/issues/25532))
* Improve the `optimize_manifests` procedure to produce better organized manifests. ([#25378](https://github.com/trinodb/trino/issues/25378))
* Clean up old snapshots when refreshing a materialized view. ([#25343](https://github.com/trinodb/trino/issues/25343))
* Set Glue catalog ID when `hive.metastore.glue.catalogid` is configured. ([#25511](https://github.com/trinodb/trino/issues/25511))
* Fix failure when executing `migrate` on tables partitioned on columns with special characters. ([#25106](https://github.com/trinodb/trino/issues/25106))
* Fix `OPTIMIZE` failures due to commit conflicts with certain `DELETE` queries. ([#25584](https://github.com/trinodb/trino/issues/25584))
* Fix failure when analyzing a table without any snapshots. ([#25563](https://github.com/trinodb/trino/issues/25563))

## Memory connector

* Fix incorrect memory usage accounting for truncated tables. ([#25564](https://github.com/trinodb/trino/issues/25564))

## MySQL connector

* Add support for creating tables with a primary key. ([#24930](https://github.com/trinodb/trino/issues/24930))

## PostgreSQL connector

* Add support for MERGE when `retry_policy` is set to `TASK`. ([#24467](https://github.com/trinodb/trino/issues/24467))
* Add support for `array(uuid)` type. ([#25557](https://github.com/trinodb/trino/issues/25557))

## SQL Server connector

* Fix incorrect results for queries involving `LIKE` on columns with case-insensitive collations. ([#25488](https://github.com/trinodb/trino/issues/25488))

## SPI

* Remove the `LazyBlock` class. ([#25255](https://github.com/trinodb/trino/issues/25255))
