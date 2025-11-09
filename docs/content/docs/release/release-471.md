---
title: Release 471
description: Release 471 documentation
---
# Release 471 (19 Feb 2025)

## General

* Add [](/functions/ai) for textual tasks on data using OpenAI, Anthropic, or
  other LLMs using Ollama as backend.  ([#24963](https://github.com/trinodb/trino/issues/24963))
* Include split count and total split distribution time in the `EXPLAIN ANALYZE`
  output. ([#25028](https://github.com/trinodb/trino/issues/25028))
* Add support for JSON logging format to console with `log.console-format=JSON`. ([#25081](https://github.com/trinodb/trino/issues/25081))
* Support additional Python libraries for use with Python user-defined
  functions. ([#25058](https://github.com/trinodb/trino/issues/25058))
* Improve performance for Python user-defined functions. ([#25058](https://github.com/trinodb/trino/issues/25058))
* Improve performance for queries involving `ORDER BY ... LIMIT`. ([#24937](https://github.com/trinodb/trino/issues/24937))
* Prevent failures when fault-tolerant execution is configured with an exchange
  manager that uses Azure storage with workload identity. ([#25063](https://github.com/trinodb/trino/issues/25063))

## Server RPM

* Remove RPM package. Use the tarball or container image instead, or build an
  RPM with the setup in the [trino-packages
  repository](https://github.com/trinodb/trino-packages). ([#24997](https://github.com/trinodb/trino/issues/24997))

## Security

* Ensure that custom XML configuration files specified in the
  `access-control.properties` file are used during Ranger access control plugin
  initialization. ([#24887](https://github.com/trinodb/trino/issues/24887))

## Delta Lake connector

* Add support for reading `variant` type. ([#22309](https://github.com/trinodb/trino/issues/22309))
* Add [](/object-storage/file-system-local). ([#25006](https://github.com/trinodb/trino/issues/25006))
* Support reading cloned tables. ([#24946](https://github.com/trinodb/trino/issues/24946))
* Add support for configuring `s3.storage-class` when writing objects to S3. ([#24698](https://github.com/trinodb/trino/issues/24698))
* Fix failures when writing large checkpoint files. ([#25011](https://github.com/trinodb/trino/issues/25011))

## Hive connector

* Add [](/object-storage/file-system-local). ([#25006](https://github.com/trinodb/trino/issues/25006))
* Add support for configuring `s3.storage-class` when writing objects to S3. ([#24698](https://github.com/trinodb/trino/issues/24698))
* Fix reading restored S3 glacier objects when the configuration property
  `hive.s3.storage-class-filter` is set to `READ_NON_GLACIER_AND_RESTORED`. ([#24947](https://github.com/trinodb/trino/issues/24947))

## Hudi connector

* Add [](/object-storage/file-system-local). ([#25006](https://github.com/trinodb/trino/issues/25006))
* Add support for configuring `s3.storage-class` when writing objects to S3. ([#24698](https://github.com/trinodb/trino/issues/24698))

## Iceberg connector

* Add [](/object-storage/file-system-local). ([#25006](https://github.com/trinodb/trino/issues/25006))
* Add support for [S3 Tables](https://aws.amazon.com/s3/features/tables/). ([#24815](https://github.com/trinodb/trino/issues/24815))
* Add support for configuring `s3.storage-class` when writing objects to S3. ([#24698](https://github.com/trinodb/trino/issues/24698))
* Improve conflict detection to avoid failures from concurrent `MERGE` queries
  on Iceberg tables. ([#24470](https://github.com/trinodb/trino/issues/24470))
* Ensure that the `task.max-writer-count` configuration is respected for write
  operations on partitioned tables. ([#25068](https://github.com/trinodb/trino/issues/25068))

## MongoDB connector

* Fix failures caused by tables with case-sensitive name conflicts. ([#24998](https://github.com/trinodb/trino/issues/24998))

## SPI

* Remove `Connector.getInitialMemoryRequirement()`. ([#25055](https://github.com/trinodb/trino/issues/25055))
