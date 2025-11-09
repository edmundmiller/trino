---
title: Release 470
description: Release 470 documentation
---
# Release 470 (5 Feb 2025)

## General

* Add [](/connector/duckdb). ([#18031](https://github.com/trinodb/trino/issues/18031))
* Add [](/connector/loki). ([#23053](https://github.com/trinodb/trino/issues/23053))
* Add support for the [](select-with-session) to set per-query session
  properties with `SELECT` queries. ([#24889](https://github.com/trinodb/trino/issues/24889))
* Improve compatibility of fault-tolerant exchange storage with S3-compliant
  object stores. ([#24822](https://github.com/trinodb/trino/issues/24822))
* Allow skipping directory schema validation to improve compatibility of
  fault-tolerant exchange storage with HDFS-like file systems. This can be
  configured with the `exchange.hdfs.skip-directory-scheme-validation` property. ([#24627](https://github.com/trinodb/trino/issues/24627))
* Export JMX metric for `blockedQueries`. ([#24907](https://github.com/trinodb/trino/issues/24907))
* {{breaking}} Remove support for the `optimize_hash_generation` session
  property and the `optimizer.optimize-hash-generation` configuration option.
  ([#24792](https://github.com/trinodb/trino/issues/24792))
* Fix failure when using upper-case variable names in SQL user-defined
  functions. ([#24460](https://github.com/trinodb/trino/issues/24460))
* Prevent failures of the {func}`array_histogram` function when the input
  contains null values. ([#24765](https://github.com/trinodb/trino/issues/24765))

## JDBC driver

* {{breaking}} Raise minimum runtime requirement to Java 11. ([#23639](https://github.com/trinodb/trino/issues/23639))

## CLI

* {{breaking}} Raise minimum runtime requirement to Java 11. ([#23639](https://github.com/trinodb/trino/issues/23639))

## Delta Lake connector

* Prevent connection leakage when using the Azure Storage file system. ([#24116](https://github.com/trinodb/trino/issues/24116))
* Deprecate use of the legacy file system support for Azure Storage, Google
  Cloud Storage, IBM Cloud Object Storage, S3 and S3-compatible object storage
  systems. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#24878](https://github.com/trinodb/trino/issues/24878))
* Fix potential table corruption when using the `vacuum` procedure. ([#24872](https://github.com/trinodb/trino/issues/24872))

## Faker connector

* [Derive constraints](faker-statistics) from source data when using `CREATE TABLE ... AS SELECT`. ([#24585](https://github.com/trinodb/trino/issues/24585))

## Hive connector

* Deprecate use of the legacy file system support for Azure Storage, Google
  Cloud Storage, IBM Cloud Object Storage, S3 and S3-compatible object storage
  systems. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#24878](https://github.com/trinodb/trino/issues/24878))
* Prevent connection leakage when using the Azure Storage file system. ([#24116](https://github.com/trinodb/trino/issues/24116))
* Fix NullPointerException when listing tables on Glue. ([#24834](https://github.com/trinodb/trino/issues/24834))

## Hudi connector

* Deprecate use of the legacy file system support for Azure Storage, Google
  Cloud Storage, IBM Cloud Object Storage, S3 and S3-compatible object storage
  systems. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#24878](https://github.com/trinodb/trino/issues/24878))
* Prevent connection leakage when using the Azure Storage file system. ([#24116](https://github.com/trinodb/trino/issues/24116))

## Iceberg connector

* Add the [optimize_manifests](iceberg-optimize-manifests) table procedure. ([#14821](https://github.com/trinodb/trino/issues/14821))
* Allow configuration of the number of commit retries with the
  `max_commit_retry` table property. ([#22672](https://github.com/trinodb/trino/issues/22672))
* Allow caching of table metadata when using the Hive metastore. ([#13115](https://github.com/trinodb/trino/issues/13115))
* Deprecate use of the legacy file system support for Azure Storage, Google
  Cloud Storage, IBM Cloud Object Storage, S3 and S3-compatible object storage
  systems. Use the migration guides for [Azure
  Storage](fs-legacy-azure-migration), [Google Cloud
  Storage](fs-legacy-gcs-migration), and [S3](fs-legacy-s3-migration) to assist
  if you have not switched from legacy support. ([#24878](https://github.com/trinodb/trino/issues/24878))
* Prevent connection leakage when using the Azure Storage file system. ([#24116](https://github.com/trinodb/trino/issues/24116))
* Fix failure when adding a new column with a name containing a dot. ([#24813](https://github.com/trinodb/trino/issues/24813))
* Fix failure when reading from tables with [equality
  deletes](https://iceberg.apache.org/spec/#equality-delete-files) with nested
  fields. ([#18625](https://github.com/trinodb/trino/issues/18625))
* Fix failure when reading `$entries` and `$all_entries` tables using [equality
  deletes](https://iceberg.apache.org/spec/#equality-delete-files). ([#24775](https://github.com/trinodb/trino/issues/24775))

## JMX connector

* Prevent missing metrics values when MBeans in coordinator and workers do not
  match. ([#24908](https://github.com/trinodb/trino/issues/24908))

## Kinesis connector

* {{breaking}} Remove the Kinesis connector. ([#23923](https://github.com/trinodb/trino/issues/23923)) 

## MySQL connector

* Add support for `MERGE` statement. ([#24428](https://github.com/trinodb/trino/issues/24428))
* Prevent writing of invalid, negative date values. ([#24809](https://github.com/trinodb/trino/issues/24809))

## PostgreSQL connector

* Raise minimum required version to PostgreSQL 12. ([#24836](https://github.com/trinodb/trino/issues/24836))
