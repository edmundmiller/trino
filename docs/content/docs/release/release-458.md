---
title: Release 458
description: Release 458 documentation
---
# Release 458 (17 Sep 2024)

## General

* Improve performance for queries with a redundant `DISTINCT` clause. ([#23087](https://github.com/trinodb/trino/issues/23087))

 ## JDBC

* Add support for tracing with OpenTelemetry. ([#23458](https://github.com/trinodb/trino/issues/23458))
* Remove publishing a JDBC driver JAR without bundled, third-party dependencies. ([#23452](https://github.com/trinodb/trino/issues/23452))

## Druid connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## Delta Lake connector

* {{breaking}} Deactivate [legacy file system support](file-system-legacy) for
  all catalogs. You must activate the desired [file system
  support](file-system-configuration) with
  `fs.native-azure.enabled`,`fs.native-gcs.enabled`, `fs.native-s3.enabled`, or
  `fs.hadoop.enabled` in each catalog. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#23343](https://github.com/trinodb/trino/issues/23343))
* Add JMX monitoring to the [](/object-storage/file-system-s3). ([#23177](https://github.com/trinodb/trino/issues/23177))
* Reduce the number of file system operations when reading from Delta Lake
  tables. ([#23329](https://github.com/trinodb/trino/issues/23329))
* Fix rare, long planning times when Hive metastore caching is enabled. ([#23401](https://github.com/trinodb/trino/issues/23401))

## Exasol connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## Hive connector

* {{breaking}} Deactivate [legacy file system support](file-system-legacy) for
  all catalogs. You must activate the desired [file system
  support](file-system-configuration) with
  `fs.native-azure.enabled`,`fs.native-gcs.enabled`, `fs.native-s3.enabled`, or
  `fs.hadoop.enabled` in each catalog. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#23343](https://github.com/trinodb/trino/issues/23343))
* Add JMX monitoring to the native S3 file system support. ([#23177](https://github.com/trinodb/trino/issues/23177))
* Reduce the number of file system operations when reading tables with file system
  caching enabled. ([#23327](https://github.com/trinodb/trino/issues/23327))
* Improve the `flush_metadata_cache` procedure to include flushing the file
  status cache. ([#22412](https://github.com/trinodb/trino/issues/22412))
* Fix listing failure when Glue contains Hive unsupported tables. ([#23253](https://github.com/trinodb/trino/issues/23253))
* Fix rare, long planning times when Hive metastore caching is enabled. ([#23401](https://github.com/trinodb/trino/issues/23401))

## Hudi connector

* {{breaking}} Deactivate [legacy file system support](file-system-legacy) for
  all catalogs. You must activate the desired [file system
  support](file-system-configuration) with
  `fs.native-azure.enabled`,`fs.native-gcs.enabled`, `fs.native-s3.enabled`, or
  `fs.hadoop.enabled` in each catalog. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#23343](https://github.com/trinodb/trino/issues/23343))
* Add JMX monitoring to the native S3 file system support. ([#23177](https://github.com/trinodb/trino/issues/23177))
* Fix rare, long planning times when Hive metastore caching is enabled. ([#23401](https://github.com/trinodb/trino/issues/23401))

## Iceberg connector

* {{breaking}} Deactivate [legacy file system support](file-system-legacy) for
  all catalogs. You must activate the desired [file system
  support](file-system-configuration) with
  `fs.native-azure.enabled`,`fs.native-gcs.enabled`, `fs.native-s3.enabled`, or
  `fs.hadoop.enabled` in each catalog. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#23343](https://github.com/trinodb/trino/issues/23343))
* Add JMX monitoring to the native S3 file system support. ([#23177](https://github.com/trinodb/trino/issues/23177))
* Fix rare, long planning times when Hive metastore caching is enabled. ([#23401](https://github.com/trinodb/trino/issues/23401))

## MariaDB connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## MySQL connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## Oracle connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## PostgreSQL connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## Redshift connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## SingleStore connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## Snowflake connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## SQL Server connector

* Reduce data transfer from remote systems for queries with large `IN` lists. ([#23381](https://github.com/trinodb/trino/issues/23381))

## SPI

* Add `@Constraint` annotation for functions. ([#23449](https://github.com/trinodb/trino/issues/23449))
* Remove the deprecated constructor from the `ConnectorTableLayout` class. ([#23395](https://github.com/trinodb/trino/issues/23395))
