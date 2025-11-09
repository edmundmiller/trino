---
title: Release 426
description: Release 426 documentation
---
# Release 426 (5 Sep 2023)

## General

* Add support for `SET SESSION AUTHORIZATION` and `RESET SESSION AUTHORIZATION`. ([#16067](https://github.com/trinodb/trino/issues/16067))
* Add support for automatic type coercion when creating tables. ([#13994](https://github.com/trinodb/trino/issues/13994))
* Improve performance of aggregations over decimal values. ([#18868](https://github.com/trinodb/trino/issues/18868))
* Fix event listener incorrectly reporting output columns for `UPDATE`
  statements with subqueries. ([#18815](https://github.com/trinodb/trino/issues/18815))
* Fix failure when performing an outer join involving geospatial functions in
  the join clause. ([#18860](https://github.com/trinodb/trino/issues/18860))
* Fix failure when querying partitioned tables with a `WHERE` clause that
  contains lambda expressions. ([#18865](https://github.com/trinodb/trino/issues/18865))
* Fix failure for `GROUP BY` queries over `map` and `array` types. ([#18863](https://github.com/trinodb/trino/issues/18863))

## Security

* Fix authentication failure with OAuth 2.0 when authentication tokens are
  larger than 4 KB. ([#18836](https://github.com/trinodb/trino/issues/18836))

## Delta Lake connector

* Add support for the `TRUNCATE TABLE` statement. ([#18786](https://github.com/trinodb/trino/issues/18786))
* Add support for the `CASCADE` option in `DROP SCHEMA` statements. ([#18333](https://github.com/trinodb/trino/issues/18333))
* Add support for
  [Databricks 13.3 LTS](https://docs.databricks.com/en/release-notes/runtime/13.3lts.html). ([#18888](https://github.com/trinodb/trino/issues/18888))
* Fix writing an incorrect transaction log for partitioned tables with an `id`
  or `name` column mapping mode. ([#18661](https://github.com/trinodb/trino/issues/18661))

## Hive connector

* Add the `hive.metastore.thrift.batch-fetch.enabled` configuration property,
  which can be set to `false` to disable batch metadata fetching from the Hive
  metastore. ([#18111](https://github.com/trinodb/trino/issues/18111))
* Fix `ANALYZE` failure when row count stats are missing. ([#18798](https://github.com/trinodb/trino/issues/18798))
* Fix the `hive.target-max-file-size` configuration property being ignored
  when writing to sorted tables. ([#18653](https://github.com/trinodb/trino/issues/18653))
* Fix query failure when reading large SequenceFile, RCFile, or Avro files. ([#18837](https://github.com/trinodb/trino/issues/18837))

## Iceberg connector

* Fix the `iceberg.target-max-file-size` configuration property being ignored
  when writing to sorted tables. ([#18653](https://github.com/trinodb/trino/issues/18653))

## SPI

* Remove the deprecated
  `ConnectorMetadata#dropSchema(ConnectorSession session, String schemaName)`
  method. ([#18839](https://github.com/trinodb/trino/issues/18839))
