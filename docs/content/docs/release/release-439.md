---
title: Release 439
description: Release 439 documentation
---
# Release 439 (15 Feb 2024)

## General

* Fix failure when setting session properties for a catalog with a `.` in its
  name. ([#20474](https://github.com/trinodb/trino/issues/20474))
* Fix potential out-of-memory query failures when using the experimental scheduler. ([#20694](https://github.com/trinodb/trino/issues/20694))
* Fix potential performance regression when dynamic filters are not applied. ([#20709](https://github.com/trinodb/trino/issues/20709))

## BigQuery connector

* Fix failure when pushing down predicates into BigQuery views. ([#20627](https://github.com/trinodb/trino/issues/20627))

## Delta Lake connector

* Improve performance when reading data by adding support for
  [caching data on local storage](/docs/object-storage/file-system-cache). ([#18719](https://github.com/trinodb/trino/issues/18719))
* Fix potential crash when reading corrupted Snappy data. ([#20631](https://github.com/trinodb/trino/issues/20631))

## Hive connector

* {{breaking}} Improve performance of caching data on local storage. Deprecate
  the `hive.cache.enabled` configuration property in favor of 
  [`fs.cache.enabled`](/docs/object-storage/file-system-cache). ([#20658](https://github.com/trinodb/trino/issues/20658), [#20102](https://github.com/trinodb/trino/issues/20102))
* Fix query failure when a value has not been specified for the
  `orc_bloom_filter_fpp` table property. ([#16589](https://github.com/trinodb/trino/issues/16589))
* Fix potential query failure when writing ORC files. ([#20587](https://github.com/trinodb/trino/issues/20587))
* Fix potential crash when reading corrupted Snappy data. ([#20631](https://github.com/trinodb/trino/issues/20631))

## Hudi connector

* Fix potential crash when reading corrupted Snappy data. ([#20631](https://github.com/trinodb/trino/issues/20631))

## Iceberg connector

* Improve performance when reading data by adding support for
  [caching data on local storage](/docs/object-storage/file-system-cache). ([#20602](https://github.com/trinodb/trino/issues/20602))
* Fix query failure when a value has not been specified for the
  `orc_bloom_filter_fpp` table property. ([#16589](https://github.com/trinodb/trino/issues/16589))
* Fix potential query failure when writing ORC files. ([#20587](https://github.com/trinodb/trino/issues/20587))
* Fix potential crash when reading corrupted Snappy data. ([#20631](https://github.com/trinodb/trino/issues/20631))

## Redshift connector

* Fix potential crash when reading corrupted Snappy data. ([#20631](https://github.com/trinodb/trino/issues/20631))
