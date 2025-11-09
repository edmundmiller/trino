---
title: Release 443
description: Release 443 documentation
---
# Release 443 (21 Mar 2024)

## General

* Fix formatting of casts from double or real to varchar when running with
  non-US locales. ([#21136](https://github.com/trinodb/trino/issues/21136))
* Prevent query failure when partial aggregation over decimals with precision
  larger than 18 below joins. ([#21099](https://github.com/trinodb/trino/issues/21099))

## Delta Lake connector

* Automatically use `timestamp(6)` as type during table creation when other
  timestamp precision is specified. ([#19336](https://github.com/trinodb/trino/issues/19336))
* Ensure all files are deleted when native S3 file system support is enabled. ([#21111](https://github.com/trinodb/trino/issues/21111))

## Hive connector

* Reduce coordinator CPU and memory usage. ([#21075](https://github.com/trinodb/trino/issues/21075))
* Prevent failures when listing columms of a table that is concurrently dropped
  and `sql-standard` authorization is used. ([#21109](https://github.com/trinodb/trino/issues/21109))
* Ensure all files are deleted when native S3 file system support is enabled. ([#21111](https://github.com/trinodb/trino/issues/21111))

## Hudi connector

* Ensure all files are deleted when native S3 file system support is enabled. ([#21111](https://github.com/trinodb/trino/issues/21111))

## Iceberg connector

* Improve storage table cleanup when creating a materialized view fails. ([#20837](https://github.com/trinodb/trino/issues/20837))
* Fix dropping materialized views created before Trino 433 when using a Hive
  metastore. ([#20837](https://github.com/trinodb/trino/issues/20837))
* Fix support for trailing slashes for the `table_location` specified with the
  `register_table` procedure. ([#19143](https://github.com/trinodb/trino/issues/19143))
* Ensure all files are deleted when native S3 file system support is enabled. ([#21111](https://github.com/trinodb/trino/issues/21111))

## Prometheus connector

* Add support for a custom authorization header name. ([#21187](https://github.com/trinodb/trino/issues/21187))

## SPI

* Add catalog store support for dynamic catalog storage implementation in
  connector plugins. ([#21114](https://github.com/trinodb/trino/issues/21114))
