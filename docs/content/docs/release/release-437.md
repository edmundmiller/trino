---
title: Release 437
description: Release 437 documentation
---
# Release 437 (24 Jan 2024)

## General

* Add support for `char(n)` values in {func}`to_utf8`. ([#20158](https://github.com/trinodb/trino/issues/20158))
* Add support for `char(n)` values in {func}`lpad`. ([#16907](https://github.com/trinodb/trino/issues/16907))
* {{breaking}} Replace the `exchange.compression-enabled` configuration property
  and `exchange_compression` session property with
  [the `exchange.compression-codec`and `exchange_compression_codec` properties](prop-exchange-compression-codec),
  respectively. ([#20274](https://github.com/trinodb/trino/issues/20274))
* {{breaking}} Replace the `spill-compression-enabled` configuration property 
  with [the `spill-compression-codec` property](prop-spill-compression-codec). ([#20274](https://github.com/trinodb/trino/issues/20274))
* {{breaking}} Remove the deprecated `experimental.spill-compression-enabled`
  configuration property. ([#20274](https://github.com/trinodb/trino/issues/20274))
* Fix failure when invoking functions that may return null values. ([#18456](https://github.com/trinodb/trino/issues/18456))
* Fix `ArrayIndexOutOfBoundsException` with RowBlockBuilder during output
  operations. ([#20426](https://github.com/trinodb/trino/issues/20426))

## Delta Lake connector

* Improve query performance for queries that don't use table statistics. ([#20054](https://github.com/trinodb/trino/issues/20054))

## Hive connector

* Fix error when coercing union-typed data to a single type when reading Avro
  files. ([#20310](https://github.com/trinodb/trino/issues/20310))

## Iceberg connector

* Fix materialized views being permanently stale when they reference
  [table functions](/docs/functions/table). ([#19904](https://github.com/trinodb/trino/issues/19904))
* Improve performance of queries with filters on `ROW` columns stored in Parquet
  files. ([#17133](https://github.com/trinodb/trino/issues/17133))
