---
title: Release 472
description: Release 472 documentation
---
# Release 472 (5 Mar 2025)

## General

* Color the server console output for improved readability. ([#25090](https://github.com/trinodb/trino/issues/25090))
* {{breaking}} Rename HTTP client property prefixes from `workerInfo` and
  `memoryManager` to `worker-info` and `memory-manager`. ([#25099](https://github.com/trinodb/trino/issues/25099))
* Fix failure for queries with large numbers of expressions in the `SELECT` clause. ([#25040](https://github.com/trinodb/trino/issues/25040))
* Improve performance of certain queries involving `ORDER BY ... LIMIT` with subqueries. ([#25138](https://github.com/trinodb/trino/issues/25138))
* Fix incorrect results when passing an array that contains nulls to
  `cosine_distance` and `cosine_similarity`. ([#25195](https://github.com/trinodb/trino/issues/25195))
* Prevent improper use of `WITH SESSION` with non-`SELECT` queries. ([#25112](https://github.com/trinodb/trino/issues/25112))

## JDBC driver

* Provide a `javax.sql.DataSource` implementation. ([#24985](https://github.com/trinodb/trino/issues/24985))
* Fix roles being cleared after invoking `SET SESSION AUTHORIZATION` or 
  `RESET SESSION AUTHORIZATION`. ([#25191](https://github.com/trinodb/trino/issues/25191))

## Docker image

* Improve performance when using Snappy compression. ([#25143](https://github.com/trinodb/trino/issues/25143))
* Fix initialization failure for the DuckDB connector. ([#25143](https://github.com/trinodb/trino/issues/25143))

## BigQuery connector

* Improve performance of listing tables when
  `bigquery.case-insensitive-name-matching` is enabled. ([#25222](https://github.com/trinodb/trino/issues/25222))

## Delta Lake connector

* Improve support for highly concurrent table modifications. ([#25141](https://github.com/trinodb/trino/issues/25141))

## Faker connector

* Add support for the `row` type and generate empty values for `array`, `map`,
  and `json` types. ([#25120](https://github.com/trinodb/trino/issues/25120))

## Iceberg connector

* Add the `$partition` hidden column. ([#24301](https://github.com/trinodb/trino/issues/24301))
* Fix incorrect results when reading Iceberg tables after deletes were
  performed. ([#25151](https://github.com/trinodb/trino/issues/25151))

## Loki connector

* Fix connection failures with Loki version higher than 3.2.0. ([#25156](https://github.com/trinodb/trino/issues/25156))

## PostgreSQL connector

* Improve performance for queries involving cast of
  [integer types](integer-data-types). ([#24950](https://github.com/trinodb/trino/issues/24950))

## SPI

* Remove the deprecated `ConnectorMetadata.addColumn(ConnectorSession session,
  ConnectorTableHandle tableHandle, ColumnMetadata column)` method. Use the
  `ConnectorMetadata.addColumn(ConnectorSession session, ConnectorTableHandle
  tableHandle, ColumnMetadata column, ColumnPosition position)` instead.
  ([#25163](https://github.com/trinodb/trino/issues/25163))
