---
title: Release 428
description: Release 428 documentation
---
# Release 428 (4 Oct 2023)

## General

* Reduce memory usage for queries involving `GROUP BY` clauses. ([#19187](https://github.com/trinodb/trino/issues/19187))
* Simplify writer count configuration. Add the new `task.min-writer-count`
  and `task.max-writer-count` configuration properties along with the
  `task_min_writer_count` and `task_max_writer_count` session properties, which
  control the number of writers depending on scenario. Deprecate the
  `task.writer-count`, `task.scale-writers.max-writer-count`, and
  `task.partitioned-writer-count` configuration properties, which will be
  removed in the future. Remove the `task_writer_count`,
  `task_partitioned_writer_count`, and `task_scale_writers_max_writer_count`
  session properties. ([#19135](https://github.com/trinodb/trino/issues/19135))
* Remove support for the `parse-decimal-literals-as-double` legacy configuration
  property. ([#19166](https://github.com/trinodb/trino/issues/19166))
* Fix out of memory error when running queries with `GROUP BY` clauses. ([#19119](https://github.com/trinodb/trino/issues/19119))

## Delta Lake connector

* Reduce the number of read requests for scanning small Parquet files. Add the
  `parquet.small-file-threshold` configuration property and the
  `parquet_small_file_threshold` session property to change the default size of
  `3MB`, below which, files will be read in their entirety. Setting this
  configuration to `0B` disables the feature. ([#19127](https://github.com/trinodb/trino/issues/19127))
* Fix potential data duplication when running `OPTIMIZE` coincides with
  updates to a table. ([#19128](https://github.com/trinodb/trino/issues/19128))
* Fix error when deleting rows in tables that have partitions with certain
  non-alphanumeric characters in their names. ([#18922](https://github.com/trinodb/trino/issues/18922))

## Hive connector

* Reduce the number of read requests for scanning small Parquet files. Add the
  `parquet.small-file-threshold` configuration property and the
  `parquet_small_file_threshold` session property to change the default size of
  `3MB`, below which, files will be read in their entirety. Setting this
  configuration to `0B` disables the feature. ([#19127](https://github.com/trinodb/trino/issues/19127))

## Hudi connector

* Reduce the number of read requests for scanning small Parquet files. Add the
  `parquet.small-file-threshold` configuration property and the
  `parquet_small_file_threshold` session property to change the default size of
  `3MB`, below which, files will be read in their entirety. Setting this
  configuration to `0B` disables the feature. ([#19127](https://github.com/trinodb/trino/issues/19127))

## Iceberg connector

* Reduce the number of read requests for scanning small Parquet files. Add the
  `parquet.small-file-threshold` configuration property and the
  `parquet_small_file_threshold` session property to change the default size of
  `3MB`, below which, files will be read in their entirety. Setting this
  configuration to `0B` disables the feature. ([#19127](https://github.com/trinodb/trino/issues/19127))
* Fix incorrect column statistics for the Parquet file format in manifest files. ([#19052](https://github.com/trinodb/trino/issues/19052))

## Pinot connector

* Add support for [query options](https://docs.pinot.apache.org/users/user-guide-query/query-options)
  in dynamic tables. ([#19078](https://github.com/trinodb/trino/issues/19078))
