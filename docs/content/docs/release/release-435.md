---
title: Release 435
description: Release 435 documentation
---
# Release 435 (13 Dec 2023)

## General

* Add support for the `json_table` table function. ([#18017](https://github.com/trinodb/trino/issues/18017))
* Reduce coordinator memory usage. ([#20018](https://github.com/trinodb/trino/issues/20018), [#20022](https://github.com/trinodb/trino/issues/20022))
* Increase reliability and memory consumption of inserts. ([#20040](https://github.com/trinodb/trino/issues/20040))
* Fix incorrect results for `LIKE` with some strings containing repeated
  substrings. ([#20089](https://github.com/trinodb/trino/issues/20089))
* Fix coordinator memory leak. ([#20023](https://github.com/trinodb/trino/issues/20023))
* Fix possible query failure for `MERGE` queries when `retry-policy` set to
  `TASK` and `query.determine-partition-count-for-write-enabled` set to `true`.
  ([#19979](https://github.com/trinodb/trino/issues/19979))
* Prevent hanging query processing with `retry.policy` set to `TASK` when a
  worker node died. ({issue}`18603 `)
* Fix query failure when reading array columns. ([#20065](https://github.com/trinodb/trino/issues/20065))

## Delta Lake connector

* {{breaking}} Remove support for registering external tables with
  `CREATE TABLE` and the `location` table property. Use the
  `register_table` procedure as replacement. The property
  `delta.legacy-create-table-with-existing-location.enabled` is
  also removed. ([#17016](https://github.com/trinodb/trino/issues/17016))
* Improve query planning performance on Delta Lake tables. ([#19795](https://github.com/trinodb/trino/issues/19795))
* Ensure AWS access keys are used for connections to the AWS Security Token
  Service. ([#19982](https://github.com/trinodb/trino/issues/19982))
* Reduce memory usage for inserts into partitioned tables. ([#19649](https://github.com/trinodb/trino/issues/19649))
* Improve reliability when reading from GCS. ([#20003](https://github.com/trinodb/trino/issues/20003))
* Fix failure when reading ORC data. ([#19935](https://github.com/trinodb/trino/issues/19935))

## Elasticsearch connector

* Ensure certificate validation is skipped when
  `elasticsearch.tls.verify-hostnames` is `false`. ([#20076](https://github.com/trinodb/trino/issues/20076))

## Hive connector

* Add support for columns that changed from integer types to `decimal` type. ([#19931](https://github.com/trinodb/trino/issues/19931))
* Add support for columns that changed from `date` to `varchar` type. ([#19500](https://github.com/trinodb/trino/issues/19500))
* Rename `presto_version` table property to `trino_version`. ([#19967](https://github.com/trinodb/trino/issues/19967))
* Rename `presto_query_id` table property to `trino_query_id`. ([#19967](https://github.com/trinodb/trino/issues/19967))
* Ensure AWS access keys are used for connections to the AWS Security Token
  Service. ([#19982](https://github.com/trinodb/trino/issues/19982))
* Improve query planning time on Hive tables without statistics. ([#20034](https://github.com/trinodb/trino/issues/20034))
* Reduce memory usage for inserts into partitioned tables. ([#19649](https://github.com/trinodb/trino/issues/19649))
* Improve reliability when reading from GCS. ([#20003](https://github.com/trinodb/trino/issues/20003))
* Fix failure when reading ORC data. ([#19935](https://github.com/trinodb/trino/issues/19935))

## Hudi connector

* Ensure AWS access keys are used for connections to the AWS Security Token
  Service. ([#19982](https://github.com/trinodb/trino/issues/19982))
* Improve reliability when reading from GCS. ([#20003](https://github.com/trinodb/trino/issues/20003))
* Fix failure when reading ORC data. ([#19935](https://github.com/trinodb/trino/issues/19935))

## Iceberg connector

* Fix incorrect removal of statistics files when executing
  `remove_orphan_files`. ([#19965](https://github.com/trinodb/trino/issues/19965))
* Ensure AWS access keys are used for connections to the AWS Security Token
  Service. ([#19982](https://github.com/trinodb/trino/issues/19982))
* Improve performance of metadata queries involving materialized views. ([#19939](https://github.com/trinodb/trino/issues/19939))
* Reduce memory usage for inserts into partitioned tables. ([#19649](https://github.com/trinodb/trino/issues/19649))
* Improve reliability when reading from GCS. ([#20003](https://github.com/trinodb/trino/issues/20003))
* Fix failure when reading ORC data. ([#19935](https://github.com/trinodb/trino/issues/19935))

## Ignite connector

* Improve performance of queries involving `OR` with `IS NULL`, `IS NOT NULL`
  predicates, or involving `NOT` expression by pushing predicate computation to
  the Ignite database. ([#19453](https://github.com/trinodb/trino/issues/19453))

## MongoDB connector

* Allow configuration to use local scheduling of MongoDB splits with
  `mongodb.allow-local-scheduling`. ([#20078](https://github.com/trinodb/trino/issues/20078))

## SQL Server connector

* Fix incorrect results when reading dates between `1582-10-05` and
  `1582-10-14`. ([#20005](https://github.com/trinodb/trino/issues/20005))
