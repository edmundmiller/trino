---
title: Release 473
description: Release 473 documentation
---
# Release 473 (19 Mar 2025)

> **Warning:** This release is broken and should not be used. GROUP BY and DISTINCT queries containing
more than 33M unique groups can produce incorrect results. See: ([#25381](https://github.com/trinodb/trino/issues/25381))

## General

* Add support for array literals. ([#25301](https://github.com/trinodb/trino/issues/25301))
* Reduce the amount of memory required for `DISTINCT` and `GROUP BY` operations. ([#25127](https://github.com/trinodb/trino/issues/25127))
* Improve performance of `GROUP BY` and `DISTINCT` aggregations when spilling to disk is enabled  
  or grouping by `row`, `array`, or `map` columns ([#25294](https://github.com/trinodb/trino/issues/25294))
* Fix failure when setting comments on columns with upper case letters. ([#25297](https://github.com/trinodb/trino/issues/25297))
* Fix potential query failure when `retry_policy` set to `TASK` ([#25217](https://github.com/trinodb/trino/issues/25217))

## Security

* Add LDAP-based group provider. ([#23900](https://github.com/trinodb/trino/issues/23900))
* Fix column masks not being applied on view columns with upper case. ([#24054](https://github.com/trinodb/trino/issues/24054))

## BigQuery connector

* Fix failure when initializing the connector on a machine with more than 32 CPU cores. ([#25228](https://github.com/trinodb/trino/issues/25228))

## Delta Lake connector

* Remove the deprecated `glue-v1` metastore type. ([#25201](https://github.com/trinodb/trino/issues/25201))
* Remove deprecated Databricks Unity catalog integration. ([#25250](https://github.com/trinodb/trino/issues/25250))
* Fix Glue endpoint URL override. ([#25324](https://github.com/trinodb/trino/issues/25324))

## Hive connector

* Remove the deprecated `glue-v1` metastore type. ([#25201](https://github.com/trinodb/trino/issues/25201))
* Remove deprecated Databricks Unity catalog integration. ([#25250](https://github.com/trinodb/trino/issues/25250))
* Fix Glue endpoint URL override. ([#25324](https://github.com/trinodb/trino/issues/25324))

## Hudi connector

* Fix queries getting stuck when reading empty partitions. ({issue}`19506 `)
* Remove the deprecated `glue-v1` metastore type. ([#25201](https://github.com/trinodb/trino/issues/25201))
* Fix Glue endpoint URL override. ([#25324](https://github.com/trinodb/trino/issues/25324))

## Iceberg connector

* Set the `write.<filetype>.compression-codec` table property when creating new tables. ([#24851](https://github.com/trinodb/trino/issues/24851))
* Expose additional properties in `$properties` tables. ([#24812](https://github.com/trinodb/trino/issues/24812))
* Fix Glue endpoint URL override. ([#25324](https://github.com/trinodb/trino/issues/25324))

## Kudu connector

* Remove the Kudu connector. ([#24417](https://github.com/trinodb/trino/issues/24417))

## Phoenix connector

* Remove the Phoenix connector. ([#24135](https://github.com/trinodb/trino/issues/24135))

## SPI

* Add `SourcePage` interface and `ConnectorPageSource.getNextSourcePage()`. ([#24011](https://github.com/trinodb/trino/issues/24011))
* Deprecate `ConnectorPageSource.getNextPage()` for removal. ([#24011](https://github.com/trinodb/trino/issues/24011))
