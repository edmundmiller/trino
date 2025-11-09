---
title: Release 462
description: Release 462 documentation
---
# Release 462 (16 Oct 2024)

## General

* Allow adding subgroups to groups during query processing when using the
  [](db-resource-group-manager). ([#23727](https://github.com/trinodb/trino/issues/23727))
* Fix query failures for queries routed to a group whose subgroup is deleted
  when using the [](db-resource-group-manager). ([#23727](https://github.com/trinodb/trino/issues/23727))
* Fix wrong resource group configuration being applied if the group is changed
  from a variable to fixed name or vice-versa when using the
  [](db-resource-group-manager). ([#23727](https://github.com/trinodb/trino/issues/23727))
* Fix resource group updates not being observed immediately for groups that use
  variables when using the [](db-resource-group-manager). ([#23727](https://github.com/trinodb/trino/issues/23727))
* Fix incorrect results for certain `CASE` expressions that return boolean
  results. ([#23787](https://github.com/trinodb/trino/issues/23787))

## JDBC driver

* Improve performance and memory usage when decoding data. ([#23754](https://github.com/trinodb/trino/issues/23754))

## CLI

* Improve performance and memory usage when decoding data. ([#23754](https://github.com/trinodb/trino/issues/23754))

## Iceberg connector

* Add support for read operations when using the Unity catalog as Iceberg REST
  catalog. ([#22609](https://github.com/trinodb/trino/issues/22609))
* Improve planning time for insert operations. ([#23757](https://github.com/trinodb/trino/issues/23757))

## Redshift connector

* Improve performance for queries casting columns to smallint, integer, or
  bigint. ([#22951](https://github.com/trinodb/trino/issues/22951))
