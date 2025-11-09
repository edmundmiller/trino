---
title: Release 442
description: Release 442 documentation
---
# Release 442 (14 Mar 2024)

## Delta Lake connector

* Fix query failure when a partition value contains forward slash characters. ([#21030](https://github.com/trinodb/trino/issues/21030))

## Hive connector

* Restore support for `SymlinkTextInputFormat` for text formats. ([#21092](https://github.com/trinodb/trino/issues/21092))

## Iceberg connector

* Fix large queries failing with a `NullPointerException`. ([#21074](https://github.com/trinodb/trino/issues/21074))

## OpenSearch connector

* Add support for configuring AWS deployment type with the
  `opensearch.aws.deployment-type` configuration property. ([#21059](https://github.com/trinodb/trino/issues/21059))
