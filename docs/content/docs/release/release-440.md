---
title: Release 440
description: Release 440 documentation
---
# Release 440 (8 Mar 2024)

## General

* Add [Snowflake connector](/docs/connector/snowflake). ([#17909](https://github.com/trinodb/trino/issues/17909))
* Add support for sub-queries inside `UNNEST` clauses. ([#17953](https://github.com/trinodb/trino/issues/17953))
* Improve performance of {func}`arrays_overlap`. ([#20900](https://github.com/trinodb/trino/issues/20900))
* Export JMX statistics for resource groups by default. This can be disabled
  with the `jmxExport` resource group property. ([#20810](https://github.com/trinodb/trino/issues/20810))
* {{breaking}} Remove the defunct `*.http-client.max-connections` properties.
  ([#20966](https://github.com/trinodb/trino/issues/20966))
* Fix query failure when a check constraint is null. ([#20906](https://github.com/trinodb/trino/issues/20906))
* Fix query failure for aggregations over `CASE` expressions when the input
  evaluation could throw an error. ([#20652](https://github.com/trinodb/trino/issues/20652))
* Fix incorrect behavior of the else clause in a SQL UDFs with a single
  if/end condition. ([#20926](https://github.com/trinodb/trino/issues/20926))
* Fix the `ALTER TABLE EXECUTE optimize` queries failing due to exceeding the
  open writer limit. ([#20871](https://github.com/trinodb/trino/issues/20871))
* Fix certain `INSERT` and `CREATE TABLE AS .. SELECT` queries failing due to
  exceeding the of open writer limit on partitioned tables. ([#20871](https://github.com/trinodb/trino/issues/20871))
* Fix "multiple entries with same key" query failure for queries with joins on
  partitioned tables. ([#20917](https://github.com/trinodb/trino/issues/20917))
* Fix incorrect results when using `GRANT`, `DENY`, and `REVOKE` clauses on
  views and materialized views. ([#20812](https://github.com/trinodb/trino/issues/20812))

## Security

* Add support for row filtering and column masking in Open Policy Agent access
  control. ([#20921](https://github.com/trinodb/trino/issues/20921))

## Web UI

* Fix error when using authentication tokens larger than 4 kB. ([#20787](https://github.com/trinodb/trino/issues/20787))

## Delta Lake connector

* Add support for concurrent `INSERT` queries. ([#18506](https://github.com/trinodb/trino/issues/18506))
* Improve latency for queries with file system caching enabled. ([#20851](https://github.com/trinodb/trino/issues/20851))
* Improve latency for queries on tables with checkpoints. ([#20901](https://github.com/trinodb/trino/issues/20901))
* Fix query failure due to "corrupted statistics" when reading Parquet files
  with a predicate on a long decimal column. ([#20981](https://github.com/trinodb/trino/issues/20981))

## Hive connector

* Add support for bearer token authentication for a Thrift metastore connection. ([#20371](https://github.com/trinodb/trino/issues/20371))
* Add support for commenting on partitioned columns in the Thrift metastore. ([#20264](https://github.com/trinodb/trino/issues/20264))
* Add support for changing a column's type from `varchar` to `float`. ([#20719](https://github.com/trinodb/trino/issues/20719))
* Add support for changing a column's type from `varchar` to `char`. ([#20723](https://github.com/trinodb/trino/issues/20723))
* Add support for changing a column's type from `varchar` to `boolean`. ([#20741](https://github.com/trinodb/trino/issues/20741))
* Add support for configuring a `region` and `endpoint` for S3 security mapping. ([#18838](https://github.com/trinodb/trino/issues/18838))
* Improve performance when reading JSON files. ([#19396](https://github.com/trinodb/trino/issues/19396))
* Fix incorrect truncation when decoding `varchar(n)` and `char(n)` in
  `TEXTFILE` and `SEQUENCEFILE` formats. ([#20731](https://github.com/trinodb/trino/issues/20731))
* Fix query failure when `hive.file-status-cache-tables` is enabled for a table
  and new manifest files have been added but not cached yet. ([#20344](https://github.com/trinodb/trino/issues/20344))
* Fix error when trying to `INSERT` into a transactional table that does not
  have partitions. ([#19407](https://github.com/trinodb/trino/issues/19407))
* Fix query failure due to "corrupted statistics" when reading Parquet files
  with a predicate on a long decimal column. ([#20981](https://github.com/trinodb/trino/issues/20981))

## Hudi connector

* Fix query failure due to "corrupted statistics" when reading Parquet files
  with a predicate on a long decimal column. ([#20981](https://github.com/trinodb/trino/issues/20981))

## Iceberg connector

> **Warning:** This release has a major regression which is fixed in Trino 442.

* Improve latency of queries when file system caching is enabled. ([#20803](https://github.com/trinodb/trino/issues/20803))
* Disallow setting the materialized view owner when using system security with
  the Glue catalog. ([#20647](https://github.com/trinodb/trino/issues/20647))
* Rename the `orc.bloom.filter.columns` and `orc.bloom.filter.fpp` table
  properties to `write.orc.bloom.filter.columns` and
  `write.orc.bloom.filter.fpp`, respectively. ([#20432](https://github.com/trinodb/trino/issues/20432))
* Fix query failure due to "corrupted statistics" when reading Parquet files
  with a predicate on a long decimal column. ([#20981](https://github.com/trinodb/trino/issues/20981))

## SPI

* Add reset to position method to `BlockBuilder`. ([#19577](https://github.com/trinodb/trino/issues/19577))
* Remove the `getChildren` method from `Block`. ([#19577](https://github.com/trinodb/trino/issues/19577))
* Remove the `get{Type}` methods from `Block`.  Callers must unwrap a `Block`
  and downcast the `ValueBlock` to `Type.getValueBlockType()` implementation. ([#19577](https://github.com/trinodb/trino/issues/19577))
