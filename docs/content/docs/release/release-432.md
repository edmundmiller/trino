---
title: Release 432
description: Release 432 documentation
---
# Release 432 (2 Nov 2023)

:::{note}
Release notes now include a ⚠️ symbol to highlight any changes as potentially
breaking changes. The following changes are considered and may require
adjustments:
* Removal or renaming of configuration properties that may prevent startup or
  require configuration changes
* Changes to default values for configuration properties that may significantly
  change the behavior of a system
* Updates to the requirements for external systems or software used with Trino,
  such as removal of support for an old version of a data source in a connector
* Non-backwards compatible changes to the SPI which may require plugins to be
  updated
* Otherwise significant changes that requires specific attention from teams
  managing a Trino deployment
:::

## General

* Improve performance of `CREATE TABLE AS ... SELECT` queries that contain a redundant
  `ORDER BY` clause. ([#19547](https://github.com/trinodb/trino/issues/19547))
* {{breaking}} Remove support for late materialization, including the
  `experimental.late-materialization.enabled` and
  `experimental.work-processor-pipelines` configuration properties. ([#19611](https://github.com/trinodb/trino/issues/19611))
* Fix potential query failure when using inline functions. ([#19561](https://github.com/trinodb/trino/issues/19561))

## Docker image

* Update Java runtime to Java 21. ([#19553](https://github.com/trinodb/trino/issues/19553))

## CLI

* Fix crashes when using Homebrew's version of the `stty` command. ([#19549](https://github.com/trinodb/trino/issues/19549))

## Delta Lake connector

* Improve performance of filtering on columns with long strings stored in
  Parquet files. ([#19038](https://github.com/trinodb/trino/issues/19038))

## Hive connector

* Improve performance of filtering on columns with long strings stored in
  Parquet files. ([#19038](https://github.com/trinodb/trino/issues/19038))

## Iceberg connector

* Add support for the `register_table` and `unregister_table` procedures with 
  the REST catalog. ([#15512](https://github.com/trinodb/trino/issues/15512))
* Add support for the [`BEARER` authentication type](https://projectnessie.org/tools/client_config/)
  for connecting to the Nessie catalog. ([#17725](https://github.com/trinodb/trino/issues/17725))
* Improve performance of filtering on columns with long strings stored in
  Parquet files. ([#19038](https://github.com/trinodb/trino/issues/19038))

## MongoDB connector

* Add support for predicate pushdown on `real` and `double` types. ([#19575](https://github.com/trinodb/trino/issues/19575))

## SPI

* Add Trino version to SystemAccessControlContext. ([#19585](https://github.com/trinodb/trino/issues/19585))
* {{breaking}} Remove null-suppression from RowBlock fields. Add new factory methods to
  create a `RowBlock`, and remove the old factory methods. ([#19479](https://github.com/trinodb/trino/issues/19479))
