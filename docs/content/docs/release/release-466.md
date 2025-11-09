---
title: Release 466
description: Release 466 documentation
---
# Release 466 (27 Nov 2024)

## General

* Add support for changing the type of row fields when they are in a columns of
  type `map`. ([#24248](https://github.com/trinodb/trino/issues/24248))
* Remove the requirement for a Python runtime on Trino cluster nodes. ([#24271](https://github.com/trinodb/trino/issues/24271))
* Improve performance of queries involving `GROUP BY` and joins. ([#23812](https://github.com/trinodb/trino/issues/23812))
* Improve client protocol throughput by introducing the [spooling
  protocol](protocol-spooling). ([#24214](https://github.com/trinodb/trino/issues/24214))

## Security

* Add support for [data access control with Apache
  Ranger](/docs/security/ranger-access-control), including support for
  column masking, row filtering, and audit logging. ([#22675](https://github.com/trinodb/trino/issues/22675))

## JDBC driver

* Improve throughput by automatically using the [spooling
  protocol](jdbc-spooling-protocol) when it is configured on the Trino cluster,
  and add the parameter `encoding` to optionally set the preferred encoding from
  the JDBC driver. ([#24214](https://github.com/trinodb/trino/issues/24214))
* Improve decompression performance when running the client with Java 22 or
  newer. ([#24263](https://github.com/trinodb/trino/issues/24263))
* Improve performance `java.sql.DatabaseMetaData.getTables()`. ([#24159](https://github.com/trinodb/trino/issues/24159),
  [#24110](https://github.com/trinodb/trino/issues/24110))

## Server RPM

* Remove Python requirement. ([#24271](https://github.com/trinodb/trino/issues/24271))

## Docker image

* Remove Python runtime and libraries. ([#24271](https://github.com/trinodb/trino/issues/24271))

## CLI

* Improve throughput by automatically use the [spooling
  protocol](cli-spooling-protocol) when it is configured on the Trino cluster,
  and add the option `--encoding` to optionally set the preferred encoding from
  the CLI. ([#24214](https://github.com/trinodb/trino/issues/24214))
* Improve decompression performance when running the CLI with Java 22 or newer. ([#24263](https://github.com/trinodb/trino/issues/24263))

## BigQuery connector

* Add support for `LIMIT` pushdown. ([#23937](https://github.com/trinodb/trino/issues/23937))

## Iceberg connector

* Add support for the [object store file
  layout](https://iceberg.apache.org/docs/latest/aws/#object-store-file-layout).
  ([#8861](https://github.com/trinodb/trino/issues/8861))
* Add support for changing field types inside a map. ([#24248](https://github.com/trinodb/trino/issues/24248))
* Improve performance of queries with selective joins. ([#24277](https://github.com/trinodb/trino/issues/24277))
* Fix failure when reading columns containing nested row types that differ from
  the schema of the underlying Parquet data. ([#22922](https://github.com/trinodb/trino/issues/22922))

## Phoenix connector

* Improve performance for `MERGE` statements. ([#24075](https://github.com/trinodb/trino/issues/24075))

## SQL Server connector

* Rename the `sqlserver.experimental.stored-procedure-table-function-enabled`
  configuration property to `sqlserver.stored-procedure-table-function-enabled`.
  ([#24239](https://github.com/trinodb/trino/issues/24239))

## SPI

* Add `ConnectorSplit` argument to the `SystemTable.cursor()` method. ([#24159](https://github.com/trinodb/trino/issues/24159))
* Add support for partial row updates to the `ConnectorMetadata.beginMerge()`
  method. ([#24075](https://github.com/trinodb/trino/issues/24075))
