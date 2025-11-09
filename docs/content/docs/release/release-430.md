---
title: Release 430
description: Release 430 documentation
---
# Release 430 (20 Oct 2023)

## General

* Improve performance of queries with `GROUP BY`. ([#19302](https://github.com/trinodb/trino/issues/19302))
* Fix incorrect results for queries involving `ORDER BY` and window functions
 with ordered frames. ([#19399](https://github.com/trinodb/trino/issues/19399))
* Fix incorrect results for query involving an aggregation in a correlated
  subquery. ([#19002](https://github.com/trinodb/trino/issues/19002))

## Security

* Enforce authorization capability of client when receiving commands `RESET` and
  `SET` for `SESSION AUTHORIZATION`. ([#19217](https://github.com/trinodb/trino/issues/19217))

## JDBC driver

* Add support for a `timezone` parameter to set the session timezone. ([#19102](https://github.com/trinodb/trino/issues/19102))

## Iceberg connector

* Add an option to require filters on partition columns. This can be enabled by
  setting the ``iceberg.query-partition-filter-required`` configuration property
  or the ``query_partition_filter_required`` session property. ([#17263](https://github.com/trinodb/trino/issues/17263))
* Improve performance when reading partition columns. ([#19303](https://github.com/trinodb/trino/issues/19303))

## Ignite connector

* Fix failure when a query contains `LIKE` with `ESCAPE`. ([#19464](https://github.com/trinodb/trino/issues/19464))

## MariaDB connector

* Add support for table statistics. ([#19408](https://github.com/trinodb/trino/issues/19408))

## MongoDB connector

* Fix incorrect results when a query contains several `<>` or `NOT IN`
  predicates. ([#19404](https://github.com/trinodb/trino/issues/19404))

## SPI

* Change the Java stack type for a `map` value to `SqlMap` and a `row` value to
  `SqlRow`, which do not implement `Block`. ([#18948](https://github.com/trinodb/trino/issues/18948))
