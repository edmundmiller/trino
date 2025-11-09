---
title: Release 425
description: Release 425 documentation
---
# Release 425 (24 Aug 2023)

## General

* Improve performance of `GROUP BY`. ([#18106](https://github.com/trinodb/trino/issues/18106))
* Fix incorrect reporting of cumulative memory usage. ([#18714](https://github.com/trinodb/trino/issues/18714))

## BlackHole connector

* Remove support for materialized views. ([#18628](https://github.com/trinodb/trino/issues/18628))

## Delta Lake connector

* Add support for check constraints in `MERGE` statements. ([#15411](https://github.com/trinodb/trino/issues/15411))
* Improve performance when statistics are missing from the transaction log. ([#16743](https://github.com/trinodb/trino/issues/16743))
* Improve memory usage accounting of the Parquet writer. ([#18756](https://github.com/trinodb/trino/issues/18756))
* Improve performance of `DELETE` statements when they delete the whole table or 
  when the filters only apply to partition columns. ({issue}`18332 `)

## Hive connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18320](https://github.com/trinodb/trino/issues/18320))
* Create a new directory if the specified external location for a new table does
  not exist. ([#17920](https://github.com/trinodb/trino/issues/17920))
* Improve memory usage accounting of the Parquet writer. ([#18756](https://github.com/trinodb/trino/issues/18756))
* Improve performance of writing to JSON files. ([#18683](https://github.com/trinodb/trino/issues/18683))

## Iceberg connector

* Improve memory usage accounting of the Parquet writer. ([#18756](https://github.com/trinodb/trino/issues/18756))

## Kudu connector

* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18629](https://github.com/trinodb/trino/issues/18629))

## MongoDB connector

* Add support for the `Decimal128` MongoDB type. ([#18722](https://github.com/trinodb/trino/issues/18722))
* Add support for `CASCADE` option in `DROP SCHEMA` statements. ([#18629](https://github.com/trinodb/trino/issues/18629))
* Fix query failure when reading the value of `-0` as a `decimal` type. ([#18777](https://github.com/trinodb/trino/issues/18777))
