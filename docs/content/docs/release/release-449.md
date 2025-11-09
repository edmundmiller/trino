---
title: Release 449
description: Release 449 documentation
---
# Release 449 (31 May 2024)

## General

* Add [OpenLineage event listener](/docs/admin/event-listeners-openlineage). ([#21265](https://github.com/trinodb/trino/issues/21265))
* Fix rare query failure or incorrect results for array types when the data is
  dictionary encoded. ([#21911](https://github.com/trinodb/trino/issues/21911))
* Fix JMX metrics not exporting for resource groups. ([#21343](https://github.com/trinodb/trino/issues/21343))

## BigQuery connector

* Improve performance when listing schemas while the
  `bigquery.case-insensitive-name-matching` configuration property is enabled. ([#22033](https://github.com/trinodb/trino/issues/22033))

## ClickHouse connector

* Add support for pushing down execution of the `count(distinct)`, `corr`,
  `covar_samp`, and `covar_pop` functions to the underlying database. ([#7100](https://github.com/trinodb/trino/issues/7100))
* Improve performance when pushing down equality predicates on textual types. ([#7100](https://github.com/trinodb/trino/issues/7100))

## Delta Lake connector

* Add support for [the `$partitions` system table](delta-lake-partitions-table). ([#18590](https://github.com/trinodb/trino/issues/18590))
* Add support for reading from and writing to tables with
  [VACUUM Protocol Check](https://github.com/delta-io/delta/blob/master/PROTOCOL.md#vacuum-protocol-check). ([#21398](https://github.com/trinodb/trino/issues/21398))
* Add support for configuring the request retry policy on the native S3
  filesystem with the `s3.retry-mode` and `s3.max-error-retries` configuration
  properties. ([#21900](https://github.com/trinodb/trino/issues/21900))
* Automatically use `timestamp(6)` in struct types as a type during table creation
  when `timestamp` is specified. ([#21511](https://github.com/trinodb/trino/issues/21511))
* Improve performance of writing data files. ([#22089](https://github.com/trinodb/trino/issues/22089))
* Fix query failure when the `hive.metastore.glue.catalogid` configuration
  property is set. ([#22048](https://github.com/trinodb/trino/issues/22048))

## Hive connector

* Add support for specifying a catalog name in the Thrift metastore with the
  `hive.metastore.thrift.catalog-name` configuration property. ([#10287](https://github.com/trinodb/trino/issues/10287))
* Add support for configuring the request retry policy on the native S3
  filesystem with the `s3.retry-mode` and `s3.max-error-retries` configuration
  properties. ([#21900](https://github.com/trinodb/trino/issues/21900))
* Improve performance of writing to Parquet files. ([#22089](https://github.com/trinodb/trino/issues/22089))
* Allow usage of filesystem caching on the Trino coordinator when
  `node-scheduler.include-coordinator` is enabled. ([#21987](https://github.com/trinodb/trino/issues/21987))
* Fix failure when listing Hive tables with unsupported syntax. ([#21981](https://github.com/trinodb/trino/issues/21981))
* Fix query failure when the `hive.metastore.glue.catalogid` configuration
  property is set. ([#22048](https://github.com/trinodb/trino/issues/22048))
* Fix failure when running the `flush_metadata_cache` table procedure with the
  Glue v2 metastore. ([#22075](https://github.com/trinodb/trino/issues/22075))

## Hudi connector

* Add support for configuring the request retry policy on the native S3
  filesystem with the `s3.retry-mode` and `s3.max-error-retries` configuration
  properties. ([#21900](https://github.com/trinodb/trino/issues/21900))

## Iceberg connector

* Add support for views when using the Iceberg REST catalog. ([#19818](https://github.com/trinodb/trino/issues/19818))
* Add support for configuring the request retry policy on the native S3
  filesystem with the `s3.retry-mode` and `s3.max-error-retries` configuration
   properties. ([#21900](https://github.com/trinodb/trino/issues/21900))
* Automatically use `varchar` in struct types as a type during table creation
  when `char` is specified. ([#21511](https://github.com/trinodb/trino/issues/21511))
* Automatically use microsecond precision for temporal types in struct types
  during table creation. ([#21511](https://github.com/trinodb/trino/issues/21511))
* Improve performance and memory usage when
  [equality delete](https://iceberg.apache.org/spec/#equality-delete-files)
  files are used. ([#18396](https://github.com/trinodb/trino/issues/18396))
* Improve performance of writing to Parquet files. ([#22089](https://github.com/trinodb/trino/issues/22089))
* Fix failure when writing to tables with Iceberg `VARBINARY` values. ([#22072](https://github.com/trinodb/trino/issues/22072))

## Pinot connector

* {{breaking}} Remove support for non-gRPC clients and the `pinot.grpc.enabled`
  and `pinot.estimated-size-in-bytes-for-non-numeric-column` configuration
  properties. ([#22213](https://github.com/trinodb/trino/issues/22213))

## Snowflake connector

* Fix incorrect type mapping for numeric values. ([#20977](https://github.com/trinodb/trino/issues/20977))
