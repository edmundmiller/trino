---
title: Release 441
description: Release 441 documentation
---
# Release 441 (13 Mar 2024)

## General

* Fix incorrect results of window aggregations when any input data includes 
  `NaN` or infinity. ([#20946](https://github.com/trinodb/trino/issues/20946))
* Fix `NoSuchMethodError` in filtered aggregations. ([#21002](https://github.com/trinodb/trino/issues/21002))

## Cassandra connector

* Fix incorrect results when a query contains predicates on clustering columns. ([#20963](https://github.com/trinodb/trino/issues/20963))

## Hive connector

* {{breaking}} Remove the default `legacy` mode for the `hive.security`
  configuration property, and change the default value to `allow-all`.
  Additionally, remove the legacy properties `hive.allow-drop-table`,
  `hive.allow-rename-table`, `hive.allow-add-column`, `hive.allow-drop-column`,
  `hive.allow-rename-column`, `hive.allow-comment-table`, and
  `hive.allow-comment-column`. ([#21013](https://github.com/trinodb/trino/issues/21013))
* Fix query failure when reading array types from Parquet files produced by some
  legacy writers. ([#20943](https://github.com/trinodb/trino/issues/20943))

## Hudi connector

* Disallow creating files on non-existent partitions. ([#20133](https://github.com/trinodb/trino/issues/20133))
