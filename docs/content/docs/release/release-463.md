---
title: Release 463
description: Release 463 documentation
---
# Release 463 (23 Oct 2024)

## General

* Enable HTTP/2 for internal communication by default. The previous behavior can
  be restored by setting `internal-communication.http2.enabled` to `false`. ([#21793](https://github.com/trinodb/trino/issues/21793))
* Support connecting over HTTP/2 for client drivers and client applications. ([#21793](https://github.com/trinodb/trino/issues/21793))
* Add {func}`timezone` functions to extract the timezone identifier from from a
  `timestamp(p) with time zone` or `time(p) with time zone`. ([#20893](https://github.com/trinodb/trino/issues/20893))
* Include table functions with `SHOW FUNCTIONS` output. ([#12550](https://github.com/trinodb/trino/issues/12550))
* Print peak memory usage in `EXPLAIN ANALYZE` output. ([#23874](https://github.com/trinodb/trino/issues/23874))
* Disallow the window framing clause for {func}`ntile`, {func}`rank`,
  {func}`dense_rank`, {func}`percent_rank`,  {func}`cume_dist`, and
  {func}`row_number`. ([#23742](https://github.com/trinodb/trino/issues/23742))

## JDBC driver

* Support connecting over HTTP/2. ([#21793](https://github.com/trinodb/trino/issues/21793))

## CLI

* Support connecting over HTTP/2. ([#21793](https://github.com/trinodb/trino/issues/21793))

## ClickHouse connector

* Improve performance for queries with `IS NULL` expressions. ([#23459](https://github.com/trinodb/trino/issues/23459))

## Delta Lake connector

* Add support for writing change data feed when [deletion vector](https://docs.delta.io/latest/delta-deletion-vectors.html) 
  is enabled. ([#23620](https://github.com/trinodb/trino/issues/23620))

## Iceberg connector

* Add support for nested namespaces with the REST catalog. ([#22916](https://github.com/trinodb/trino/issues/22916))
* Add support for configuring the maximum number of rows per row-group in the
  ORC writer with the `orc_writer_max_row_group_rows` catalog session property. ([#23722](https://github.com/trinodb/trino/issues/23722))
* Clean up position delete files when `OPTIMIZE` is run on a subset of the
  table's partitions. ([#23801](https://github.com/trinodb/trino/issues/23801))
* Rename `iceberg.add_files-procedure.enabled` catalog configuration property to
  `iceberg.add-files-procedure.enabled`. ([#23873](https://github.com/trinodb/trino/issues/23873))

## SingleStore connector

* Fix incorrect column length of `varchar` type in SingleStore version 8. ([#23780](https://github.com/trinodb/trino/issues/23780))
