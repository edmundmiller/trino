---
title: Release 431
description: Release 431 documentation
---
# Release 431 (27 Oct 2023)

## General

* Add support for [](/udf/sql). ([#19308](https://github.com/trinodb/trino/issues/19308))
* Add support for [](/sql/create-function) and [](/sql/drop-function) statements. ([#19308](https://github.com/trinodb/trino/issues/19308))
* Add support for the `REPLACE` modifier to the `CREATE TABLE` statement. ([#13180](https://github.com/trinodb/trino/issues/13180))
* Disallow a `null` offset for the {func}`lead` and {func}`lag` functions. ([#19003](https://github.com/trinodb/trino/issues/19003))
* Improve performance of queries with short running splits. ([#19487](https://github.com/trinodb/trino/issues/19487))

## Security

* Support defining rules for procedures in file-based access control. ([#19416](https://github.com/trinodb/trino/issues/19416))
* Mask additional sensitive values in log files. ([#19519](https://github.com/trinodb/trino/issues/19519))

## JDBC driver

* Improve latency for prepared statements for Trino versions that support
  `EXECUTE IMMEDIATE` when the `explicitPrepare` parameter to is set to `false`.
  ([#19541](https://github.com/trinodb/trino/issues/19541))

## Delta Lake connector

* Replace the `hive.metastore-timeout` Hive metastore configuration property
  with the `hive.metastore.thrift.client.connect-timeout` and
  `hive.metastore.thrift.client.read-timeout` properties. ([#19390](https://github.com/trinodb/trino/issues/19390))

## Hive connector

* Add support for [](udf-management). ([#19308](https://github.com/trinodb/trino/issues/19308))
* Replace the `hive.metastore-timeout` Hive metastore configuration property
  with the `hive.metastore.thrift.client.connect-timeout` and
  `hive.metastore.thrift.client.read-timeout` properties. ([#19390](https://github.com/trinodb/trino/issues/19390))
* Improve support for concurrent updates of table statistics in Glue. ([#19463](https://github.com/trinodb/trino/issues/19463))
* Fix Hive view translation failures involving comparisons between char and
  varchar fields. ([#18337](https://github.com/trinodb/trino/issues/18337))

## Hudi connector

* Replace the `hive.metastore-timeout` Hive metastore configuration property
  with the `hive.metastore.thrift.client.connect-timeout` and
  `hive.metastore.thrift.client.read-timeout` properties. ([#19390](https://github.com/trinodb/trino/issues/19390))

## Iceberg connector

* Add support for the `REPLACE` modifier to the `CREATE TABLE` statement. ([#13180](https://github.com/trinodb/trino/issues/13180))
* Replace the `hive.metastore-timeout` Hive metastore configuration property
  with the `hive.metastore.thrift.client.connect-timeout` and
  `hive.metastore.thrift.client.read-timeout` properties. ([#19390](https://github.com/trinodb/trino/issues/19390))

## Memory connector

* Add support for [](udf-management). ([#19308](https://github.com/trinodb/trino/issues/19308))

## SPI

* Add `ValueBlock` abstraction along with `VALUE_BLOCK_POSITION` and
  `VALUE_BLOCK_POSITION_NOT_NULL` calling conventions. ([#19385](https://github.com/trinodb/trino/issues/19385))
* Require a separate block position for each argument of aggregation functions.
  ([#19385](https://github.com/trinodb/trino/issues/19385))
* Require implementations of `Block` to implement `ValueBlock`. ([#19480](https://github.com/trinodb/trino/issues/19480))
