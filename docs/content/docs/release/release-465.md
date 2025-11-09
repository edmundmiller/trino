---
title: Release 465
description: Release 465 documentation
---
# Release 465 (20 Nov 2024)

## General

* Add the {func}`cosine_similarity` function for dense vectors. ([#23964](https://github.com/trinodb/trino/issues/23964))
* Add support for reading geometries in [EWKB
  format](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)
  with the {func}`ST_GeomFromBinary` function. ([#23824](https://github.com/trinodb/trino/issues/23824))
* Add support for parameter of `bigint` type for the {func}`repeat` function. ([#22867](https://github.com/trinodb/trino/issues/22867))
* Add support for the `ORDER BY` clause in a windowed aggregate function. ([#23929](https://github.com/trinodb/trino/issues/23929))
* {{breaking}} Change the data type for `client_info` in the MySQL event
  listener to `MEDIUMTEXT`. ([#22362](https://github.com/trinodb/trino/issues/22362))
* Improve performance of queries with selective joins. ([#22824](https://github.com/trinodb/trino/issues/22824))
* Improve performance when using various string functions in queries involving
  joins. ([#24182](https://github.com/trinodb/trino/issues/24182))
* Reduce chance of out of memory query failure when `retry-policy` is set to
  `task`. ([#24114](https://github.com/trinodb/trino/issues/24114))
* Prevent some query failures when `retry-policy` is set to `task`. ([#24165](https://github.com/trinodb/trino/issues/24165))

## JDBC driver

* Add support for `LocalDateTime` and `Instant` in `getObject` and `setObject`. ([#22906](https://github.com/trinodb/trino/issues/22906))

## CLI

* Fix incorrect quoting of output values when the `CSV_UNQUOTED` or the 
  `CSV_HEADER_UNQUOTED` format is used. ([#24113](https://github.com/trinodb/trino/issues/24113))

## BigQuery connector 

* Fix failure when reading views with `timestamp` columns. ([#24004](https://github.com/trinodb/trino/issues/24004))

## Cassandra connector

* {{breaking}} Require setting the `cassandra.security` configuration property
  to `PASSWORD` along with `cassandra.username` and `cassandra.password` for
  password-based authentication. ([#23899](https://github.com/trinodb/trino/issues/23899))

## Clickhouse connector

* Fix insert of invalid time zone data for tables using the timestamp with time
  zone type. ([#23785](https://github.com/trinodb/trino/issues/23785))
* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## Delta Lake connector

* Add support for customer-provided SSE key in [S3 file
  system](/docs/object-storage/file-system-s3). ([#22992](https://github.com/trinodb/trino/issues/22992))
* Fix incorrect results for queries filtering on a partition columns and the
  `NAME` column mapping mode is used. ([#24104](https://github.com/trinodb/trino/issues/24104))

## Druid connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## Exasol connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## Faker connector

* Add the {func}`random_string` catalog function. ([#23990](https://github.com/trinodb/trino/issues/23990))
* Make generated data deterministic for repeated queries. ([#24008](https://github.com/trinodb/trino/issues/24008))
* Allow configuring locale with the `faker.locale` configuration property. ([#24152](https://github.com/trinodb/trino/issues/24152))

## Hive connector

* Add support for skipping archiving when committing to a table in the Glue metastore
  and the `hive.metastore.glue.skip-archive` configuration property is set to
  `true`. ([#23817](https://github.com/trinodb/trino/issues/23817))
* Add support for customer-provided SSE key in [S3 file
  system](/docs/object-storage/file-system-s3). ([#22992](https://github.com/trinodb/trino/issues/22992))

## Hudi connector

* Add support for customer-provided SSE key in [S3 file
  system](/docs/object-storage/file-system-s3). ([#22992](https://github.com/trinodb/trino/issues/22992))

## Iceberg connector

* Add support for reading and writing arbitrary table properties with the
  `extra_properties` table property. ([#17427](https://github.com/trinodb/trino/issues/17427), [#24031](https://github.com/trinodb/trino/issues/24031))
* Add the `spec_id`, `partition`, `sort_order_id`, and `readable_metrics`
  columns to the `$files` metadata table. ([#24102](https://github.com/trinodb/trino/issues/24102))
* Add support for configuring an OAuth2 server URI with the
  `iceberg.rest-catalog.oauth2.server-uri` configuration property. ([#23086](https://github.com/trinodb/trino/issues/23086))
* Add support for retrying requests to a JDBC catalog with the
  `iceberg.jdbc-catalog.retryable-status-codes` configuration property.
  ([#23095](https://github.com/trinodb/trino/issues/23095))
* Add support for case-insensitive name matching in the REST catalog. ([#23715](https://github.com/trinodb/trino/issues/23715))
* Add support for customer-provided SSE key in [S3 file
  system](/docs/object-storage/file-system-s3). ([#22992](https://github.com/trinodb/trino/issues/22992))
* Disallow adding duplicate files in the `add_files` and `add_files_from_table`
  procedures. ([#24188](https://github.com/trinodb/trino/issues/24188))
* Improve performance of Iceberg queries involving multiple table scans. ([#23945](https://github.com/trinodb/trino/issues/23945))
* Prevent `MERGE`, `UPDATE`, and `DELETE` query failures for tables with
  equality deletes. ([#15952](https://github.com/trinodb/trino/issues/15952))

## Ignite connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## MariaDB connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## MySQL connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## Oracle connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## PostgreSQL connector

* Add support for the `geometry` type. ([#5580](https://github.com/trinodb/trino/issues/5580))
* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## Redshift connector

* Add support pushing down casts from varchar to varchar and char to char into
  Redshift. ([#23808](https://github.com/trinodb/trino/issues/23808))
* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## SingleStore connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## Snowflake connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## SQL Server connector

* Update required SQL Server version to SQL Server 2019 or higher. ([#24173](https://github.com/trinodb/trino/issues/24173))
* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## Vertica connector

* Fix connector initialization issue when multiple catalogs with the connector
  are configured. ([#24058](https://github.com/trinodb/trino/issues/24058))

## SPI

* {{breaking}} Remove deprecated variants of `checkCanExecuteQuery` and
  `checkCanSetSystemSessionProperty` without a `QueryId` parameter from
  `SystemAccessControl`. ([#23244](https://github.com/trinodb/trino/issues/23244))
