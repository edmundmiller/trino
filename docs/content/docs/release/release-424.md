---
title: Release 424
description: Release 424 documentation
---
# Release 424 (17 Aug 2023)

## General

* Reduce coordinator overhead on large clusters. ([#18542](https://github.com/trinodb/trino/issues/18542))
* Require the JVM default charset to be UTF-8. This can be set with the JVM
  command line option `-Dfile.encoding=UTF-8`. ([#18657](https://github.com/trinodb/trino/issues/18657))

## JDBC driver

* Add the number of bytes that have been written to the query results response. ([#18651](https://github.com/trinodb/trino/issues/18651))

## Delta Lake connector

* Remove the legacy Parquet reader, along with the
  `parquet.optimized-reader.enabled` and
  `parquet.optimized-nested-reader.enabled` configuration properties. ([#18639](https://github.com/trinodb/trino/issues/18639))

## Hive connector

* Improve performance for line-oriented Hive formats. ([#18703](https://github.com/trinodb/trino/issues/18703))
* Improve performance of reading JSON files. ([#18709](https://github.com/trinodb/trino/issues/18709))
* Remove the legacy Parquet reader, along with the
  `parquet.optimized-reader.enabled` and
  `parquet.optimized-nested-reader.enabled` configuration properties. ([#18639](https://github.com/trinodb/trino/issues/18639))
* Fix incorrect reporting of written bytes for uncompressed text files, which
  prevented the `target_max_file_size` session property from working. ([#18701](https://github.com/trinodb/trino/issues/18701))

## Hudi connector

* Remove the legacy Parquet reader, along with the
  `parquet.optimized-reader.enabled` and
  `parquet.optimized-nested-reader.enabled` configuration properties. ([#18639](https://github.com/trinodb/trino/issues/18639))

## Iceberg connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18689](https://github.com/trinodb/trino/issues/18689))
* Remove the legacy Parquet reader, along with the
  `parquet.optimized-reader.enabled` and
  `parquet.optimized-nested-reader.enabled` configuration properties. ([#18639](https://github.com/trinodb/trino/issues/18639))
* Fix potential incorrect query results when a query involves a predicate on a
  `timestamp with time zone` column. ([#18588](https://github.com/trinodb/trino/issues/18588))

## Memory connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18668](https://github.com/trinodb/trino/issues/18668))

## PostgreSQL connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18663](https://github.com/trinodb/trino/issues/18663))
* Remove support for Postgres versions older than
  [version 11](https://www.postgresql.org/support/versioning/). ([#18696](https://github.com/trinodb/trino/issues/18696))

## SPI

* Introduce the `getNewTableWriterScalingOptions` and
  `getInsertWriterScalingOptions` methods to `ConnectorMetadata`, which enable
  connectors to limit writer scaling. ([#18561](https://github.com/trinodb/trino/issues/18561))
