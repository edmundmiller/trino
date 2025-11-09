---
title: Release 467
description: Release 467 documentation
---
# Release 467 (6 Dec 2024)

## General

* Add support for the `DISTINCT` clause in windowed aggregate functions. ([#24352](https://github.com/trinodb/trino/issues/24352))
* Allow using `LISTAGG` as a windowed aggregate function. ([#24366](https://github.com/trinodb/trino/issues/24366))
* Change default protocol for internal communication to HTTP/1.1 to address
  issues with HTTP/2. ([#24299](https://github.com/trinodb/trino/issues/24299))
* Return compressed results to clients by default when using the spooling
  protocol. ([#24332](https://github.com/trinodb/trino/issues/24332))
* Add application identifier `azure.application-id`, `gcs.application-id`, or
  `s3.application-id` to the storage when using the spooling protocol. ([#24361](https://github.com/trinodb/trino/issues/24361))
* Add support for OpenTelemetry tracing to the HTTP, Kafka, and MySQL event
  listener. ([#24389](https://github.com/trinodb/trino/issues/24389))
* Fix incorrect handling of SIGTERM signal, which prevented the server from
  shutting down. ([#24380](https://github.com/trinodb/trino/issues/24380))
* Fix query failures or missing statistics in `SHOW STATS` when a connector
  returns `NaN` values for table statistics. ([#24315](https://github.com/trinodb/trino/issues/24315))

## Docker image

* Remove the `microdnf` package manager.  ([#24281](https://github.com/trinodb/trino/issues/24281))

## Iceberg connector

* Add the `$all_manifests` metadata tables. ([#24330](https://github.com/trinodb/trino/issues/24330))
* {{breaking}} Remove the deprecated `schema` and `table` arguments from the
  `table_changes` table function. Use `schema_name` and `table_name` instead. ([#24324](https://github.com/trinodb/trino/issues/24324))
* {{breaking}} Use the `iceberg.rest-catalog.warehouse` configuration property
  instead of `iceberg.rest-catalog.parent-namespace` with Unity catalogs. ([#24269](https://github.com/trinodb/trino/issues/24269))
* Fix failure when writing concurrently with [transformed
  partition](https://iceberg.apache.org/spec/#partition-transforms) columns.
  ([#24160](https://github.com/trinodb/trino/issues/24160))
* Clean up table transaction files when `CREATE TABLE` fails. ([#24279](https://github.com/trinodb/trino/issues/24279))

## Delta Lake

* Add the `$transactions` metadata table. ([#24330](https://github.com/trinodb/trino/issues/24330))
* Add the `operation_metrics` column to the `$history` metadata table. ([#24379](https://github.com/trinodb/trino/issues/24379))

## SPI

* {{breaking}} Remove the deprecated `SystemAccessControlFactory#create` method. ([#24382](https://github.com/trinodb/trino/issues/24382))
