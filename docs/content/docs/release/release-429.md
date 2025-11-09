---
title: Release 429
description: Release 429 documentation
---
# Release 429 (11 Oct 2023)

## General

* Allow [/sql/show-functions](/docs//sql/show-functions) for a specific schema. ([#19243](https://github.com/trinodb/trino/issues/19243))
* Add security for function listing. ([#19243](https://github.com/trinodb/trino/issues/19243))

## Security

* Stop performing security checks for functions in the `system.builtin` schema. ([#19160](https://github.com/trinodb/trino/issues/19160))
* Remove support for using function kind as a rule in file-based access control. ([#19160](https://github.com/trinodb/trino/issues/19160))

## Web UI

* Log out from a Trino OAuth session when logging out from the Web UI. ([#13060](https://github.com/trinodb/trino/issues/13060))

## Delta Lake connector

* Allow using the `#` and `?` characters in S3 location paths or URLs. ([#19296](https://github.com/trinodb/trino/issues/19296))

## Hive connector

* Add support for changing a column's type from `varchar` to `date`. ([#19201](https://github.com/trinodb/trino/issues/19201))
* Add support for changing a column's type from `decimal` to `tinyint`,
  `smallint`, `integer`, or `bigint` in partitioned Hive tables. ([#19201](https://github.com/trinodb/trino/issues/19201))
* Improve performance of reading ORC files. ([#19295](https://github.com/trinodb/trino/issues/19295))
* Allow using the `#` and `?` characters in S3 location paths or URLs. ([#19296](https://github.com/trinodb/trino/issues/19296))
* Fix error reading Avro files when a schema has uppercase characters in its
  name. ([#19249](https://github.com/trinodb/trino/issues/19249))

## Hudi connector

* Allow using the `#` and `?` characters in S3 location paths or URLs. ([#19296](https://github.com/trinodb/trino/issues/19296))

## Iceberg connector

* Add support for specifying timestamp precision as part of
  `CREATE TABLE AS .. SELECT` statements. ([#13981](https://github.com/trinodb/trino/issues/13981))
* Improve performance of reading ORC files. ([#19295](https://github.com/trinodb/trino/issues/19295))
* Allow using the `#` and `?` characters in S3 location paths or URLs. ([#19296](https://github.com/trinodb/trino/issues/19296))

## MongoDB connector

* Fix mixed case schema names being inaccessible when using custom roles and
  the `case-insensitive-name-matching` configuration property is enabled. ([#19218](https://github.com/trinodb/trino/issues/19218))

## SPI

* Change function security checks to return a boolean instead of throwing an
  exception. ([#19160](https://github.com/trinodb/trino/issues/19160))
* Add SQL path field to `ConnectorViewDefinition`,
  `ConnectorMaterializedViewDefinition`, and `ViewExpression`. ([#19160](https://github.com/trinodb/trino/issues/19160))
