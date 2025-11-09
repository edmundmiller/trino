---
title: Release 461
description: Release 461 documentation
---
# Release 461 (10 Oct 2024)

## General

* Rename the configuration property `max-tasks-waiting-for-execution-per-stage`
  to `max-tasks-waiting-for-execution-per-query` and the session property
  `max_tasks_waiting_for_node_per_stage` to
  `max_tasks_waiting_for_node_per_query` to match implemented semantics. ([#23585](https://github.com/trinodb/trino/issues/23585))
* Fix failure when joining tables with large numbers of columns. ([#23720](https://github.com/trinodb/trino/issues/23720))
* Fix failure for `MERGE` queries on tables with large numbers of columns. ([#15848](https://github.com/trinodb/trino/issues/15848))

## Security

* Add support for BCrypt versions 2A, 2B, and 2X usage in password database files
  used with file-based authentication. ([#23648](https://github.com/trinodb/trino/issues/23648))

## Web UI

* Add buttons on the query list to access query details. ([#22831](https://github.com/trinodb/trino/issues/22831))
* Add syntax highlighting to query display on query list. ([#22831](https://github.com/trinodb/trino/issues/22831))

## BigQuery connector

* Fix failure when `bigquery.case-insensitive-name-matching` is enabled and
  `bigquery.case-insensitive-name-matching.cache-ttl` is `0m`. ([#23698](https://github.com/trinodb/trino/issues/23698))

## Delta Lake connector

* Enforce access control for new tables in the `register_table` procedure. ([#23728](https://github.com/trinodb/trino/issues/23728))

## Hive connector

* Add support for reading Hive tables that use `CombineTextInputFormat`. ([#21842](https://github.com/trinodb/trino/issues/21842))
* Improve performance of queries with selective joins. ([#23687](https://github.com/trinodb/trino/issues/23687))

## Iceberg connector

* Add support for the `add_files` and `add_files_from_table` procedures. ([#11744](https://github.com/trinodb/trino/issues/11744))
* Support `timestamp` type columns with the `migrate` procedure. ([#17006](https://github.com/trinodb/trino/issues/17006))
* Enforce access control for new tables in the `register_table` procedure. ([#23728](https://github.com/trinodb/trino/issues/23728))

## Redshift connector

* Improve performance of queries with range filters on integers. ([#23417](https://github.com/trinodb/trino/issues/23417))
