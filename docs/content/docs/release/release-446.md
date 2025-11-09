---
title: Release 446
description: Release 446 documentation
---
# Release 446 (1 May 2024)

## General

* Improve performance of `INSERT` statements into partitioned tables when the
  `retry_policy` configuration property is set to `TASK`. ({issue}`21661 `)
* Improve performance of queries with complex grouping operations.  ([#21726](https://github.com/trinodb/trino/issues/21726))
* Reduce delay before killing queries when the cluster runs out of memory. ([#21719](https://github.com/trinodb/trino/issues/21719))
* Prevent assigning null values to non-null columns as part of a `MERGE`
  statement. ([#21619](https://github.com/trinodb/trino/issues/21619))
* Fix `CREATE CATALOG` statements including quotes in catalog names. ([#21399](https://github.com/trinodb/trino/issues/21399))
* Fix potential query failure when a column name ends with a `:`. ([#21676](https://github.com/trinodb/trino/issues/21676))
* Fix potential query failure when a [](/udf/sql) contains a label
  reference in a `LEAVE`, `ITERATE`, `REPEAT`, or `WHILE` statement. ([#21682](https://github.com/trinodb/trino/issues/21682))
* Fix query failure when [](/udf/sql) use the `NULLIF` or `BETWEEN`
  functions. ([#19820](https://github.com/trinodb/trino/issues/19820))
* Fix potential query failure due to worker nodes running out of memory in
  concurrent scenarios. ([#21706](https://github.com/trinodb/trino/issues/21706))

## BigQuery connector

* Improve performance when listing table comments. ([#21581](https://github.com/trinodb/trino/issues/21581))
* {{breaking}} Enable `bigquery.arrow-serialization.enabled` by default. This
  requires `--add-opens=java.base/java.nio=ALL-UNNAMED` in
  `jvm-config`. ([#21580](https://github.com/trinodb/trino/issues/21580))

## Delta Lake connector

* Fix failure when reading from Azure file storage and the schema, table, or
  column name contains non-alphanumeric characters. ([#21586](https://github.com/trinodb/trino/issues/21586))
* Fix incorrect results when reading a partitioned table with a
  [deletion vector](https://docs.delta.io/latest/delta-deletion-vectors.html). ([#21737](https://github.com/trinodb/trino/issues/21737))

## Hive connector

* Add support for reading S3 objects restored from Glacier storage. ([#21164](https://github.com/trinodb/trino/issues/21164))
* Fix failure when reading from Azure file storage and the schema, table, or
  column name contains non-alphanumeric characters. ([#21586](https://github.com/trinodb/trino/issues/21586))
* Fix failure when listing Hive views with unsupported syntax. ([#21748](https://github.com/trinodb/trino/issues/21748))

## Iceberg connector

* Add support for the [Snowflake catalog](iceberg-snowflake-catalog). ([#19362](https://github.com/trinodb/trino/issues/19362))
* Automatically use `varchar` as a type during table creation when `char` is
  specified. ([#19336](https://github.com/trinodb/trino/issues/19336), [#21515](https://github.com/trinodb/trino/issues/21515))
* Deprecate the `schema` and `table` arguments for the `table_changes` function
  in favor of `schema_name` and `table_name`, respectively. ([#21698](https://github.com/trinodb/trino/issues/21698))
* Fix failure when executing the `migrate` procedure with partitioned Hive
  tables on Glue. ([#21391](https://github.com/trinodb/trino/issues/21391))
* Fix failure when reading from Azure file storage and the schema, table, or
  column name contains non-alphanumeric characters. ([#21586](https://github.com/trinodb/trino/issues/21586))

## Pinot connector

* Fix query failure when a predicate contains a `'`. ([#21681](https://github.com/trinodb/trino/issues/21681))

## Snowflake connector

* Add support for the `unsupported-type-handling` and
  `jdbc-types-mapped-to-varchar` type mapping configuration properties. ([#21528](https://github.com/trinodb/trino/issues/21528))

## SPI

* Remove support for `@RemoveInput` as an annotation for aggregation functions.
  A `WindowAggregation` can be declared in `@AggregationFunction` instead, which
   supports input removal. ([#21349](https://github.com/trinodb/trino/issues/21349))
* Extend `QueryCompletionEvent` with various aggregated, per-stage, per-task
  distribution statistics. New information is available in
  `QueryCompletedEvent.statistics.taskStatistics`. ([#21694](https://github.com/trinodb/trino/issues/21694))
