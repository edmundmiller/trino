---
title: Release 477
description: Release 477 documentation
---
# Release 477 (24 Sep 2025)

## General

* Add [/connector/lakehouse](/docs//connector/lakehouse). ([#25347](https://github.com/trinodb/trino/issues/25347))
* Add support for [`ALTER MATERIALIZED VIEW ... SET AUTHORIZATION`](/docs/sql/alter-materialized-view). ([#25910](https://github.com/trinodb/trino/issues/25910))
* Add support for default column values when creating tables or adding new
  columns. ([#25679](https://github.com/trinodb/trino/issues/25679))
* Add support for [`ALTER VIEW ... REFRESH`](/docs/sql/alter-view). ([#25906](https://github.com/trinodb/trino/issues/25906))
* Add support for managing and querying table branches. ([#25751](https://github.com/trinodb/trino/issues/25751), [#26300](https://github.com/trinodb/trino/issues/26300), [#26136](https://github.com/trinodb/trino/issues/26136))
* Add the {func}`cosine_distance` function for sparse vectors. ([#24027](https://github.com/trinodb/trino/issues/24027))
* {{breaking}} Improve precision and scale inference for arithmetic operations with
  decimal values. The previous behavior can be restored by setting the
  `deprecated.legacy-arithmetic-decimal-operators` config property to `true`. ([#26422](https://github.com/trinodb/trino/issues/26422))
* {{breaking}} Remove the HTTP server event listener plugin from the server binary distribution
   and the Docker container. ([#25967](https://github.com/trinodb/trino/issues/25967))
* {{breaking}} Enforce requirement for catalogs to be deployed in all nodes. ([#26063](https://github.com/trinodb/trino/issues/26063))
* Add `query.max-write-physical-size` configuration property and
  `query_max_write_physical_size` session property to allow configuring limits
  on the amount of data written by a query. ([#25955](https://github.com/trinodb/trino/issues/25955))
* Add `system.metadata.tables_authorization`,
  `system.metadata.schemas_authorization`,
  `system.metadata.functions_authorization` tables that expose the information
  about the authorization for given entities. ([#25907](https://github.com/trinodb/trino/issues/25907))
* Add physical data scan tracking to resource groups. ([#25003](https://github.com/trinodb/trino/issues/25003))
* Add `internal_network_input_bytes` column to `system.runtime.tasks` table. ([#26524](https://github.com/trinodb/trino/issues/26524))
* Add support for `Geometry` type in {func}`to_geojson_geometry`. ([#26451](https://github.com/trinodb/trino/issues/26451))
* Remove `raw_input_bytes` and `raw_input_rows` columns from `system.runtime.tasks` table. ([#26524](https://github.com/trinodb/trino/issues/26524))
* Do not include catalogs that failed to load in `system.metadata.catalogs`. ([#26493](https://github.com/trinodb/trino/issues/26493))
* Simplify node discovery configuration for Kubernetes-like environments that 
  provide DNS names for all workers when the `discovery.type` config property is set 
  to `dns`. ([#26119](https://github.com/trinodb/trino/issues/26119))
* Improve memory usage for certain queries involving {func}`row_number`, {func}`rank`,
  {func}`dense_rank`, and `ORDER BY ... LIMIT`. ([#25946](https://github.com/trinodb/trino/issues/25946))
* Improve memory usage for queries involving `GROUP BY`. ([#25879](https://github.com/trinodb/trino/issues/25879))
* Reduce memory required for queries containing aggregations with a `DISTINCT`
  or `ORDER BY` clause. ([#26276](https://github.com/trinodb/trino/issues/26276))
* Improve performance of simple queries in clusters with small number of 
  nodes. ([#26525](https://github.com/trinodb/trino/issues/26525))
* Improve cluster stability when querying slow data sources and queries terminate early 
  or are cancelled. ([#26602](https://github.com/trinodb/trino/issues/26602))
* Improve join and aggregation reliability when spilling. ([#25892](https://github.com/trinodb/trino/issues/25892), [#25976](https://github.com/trinodb/trino/issues/25976))
* Ensure spill files are cleaned up for queries involving `GROUP BY`. ([#26141](https://github.com/trinodb/trino/issues/26141))
* Reduce out-of-memory errors for queries involving joins. ([#26142](https://github.com/trinodb/trino/issues/26142))
* Fix incorrect results for queries involving `GROUP BY` when spilling is enabled. ([#25892](https://github.com/trinodb/trino/issues/25892))
* Fix failure when aggregation exists in other expressions in `GROUP BY AUTO`. ([#25987](https://github.com/trinodb/trino/issues/25987))
* Fix incorrect results for queries involving joins using {func}`ST_Contains`, {func}`ST_Intersects`, 
  and {func}`ST_Distance` functions. ([#26021](https://github.com/trinodb/trino/issues/26021))
* Fix out-of-memory failures when the client spooling protocol is enabled. ([#25999](https://github.com/trinodb/trino/issues/25999))
* Fix worker crashes due to JVM out-of-memory errors when running `GROUP BY` queries
  with aggregations containing an `ORDER BY` clause. ([#26276](https://github.com/trinodb/trino/issues/26276))
* Fix incorrectly ignored grant when access is granted through groups via
  `SET SESSION AUTHORIZATION`. ([#26344](https://github.com/trinodb/trino/issues/26344))
* Fix incorrect results for `geometry_to_bing_tiles`, where the tiles wouldn't cover the full 
  geometry area. ([#26459](https://github.com/trinodb/trino/issues/26459))
* Fix over-reporting the amount of memory used when aggregating over `ROW` 
  values when nested inside of an `ARRAY` type ([#26405](https://github.com/trinodb/trino/issues/26405))
* Improve accounting of physical input metrics in output of `EXPLAIN ANALYZE`. ([#26637](https://github.com/trinodb/trino/issues/26637))

## Web UI

* Add query details page to the [](/admin/preview-web-interface). ([#25554](https://github.com/trinodb/trino/issues/25554))
* Add query JSON page to the [](/admin/preview-web-interface). ([#26319](https://github.com/trinodb/trino/issues/26319))
* Add query live plan flow page to the [](/admin/preview-web-interface). ([#26392](https://github.com/trinodb/trino/issues/26392))
* Add query references page to the [](/admin/preview-web-interface). ([#26327](https://github.com/trinodb/trino/issues/26327))
* Add query stages view to the [](/admin/preview-web-interface). ([#26440](https://github.com/trinodb/trino/issues/26440))
* Add query live plan flow page to the [](/admin/preview-web-interface). ([#26610](https://github.com/trinodb/trino/issues/26610))
* Enhance UI responsiveness for Trino clusters without external network
  access. ([#26031](https://github.com/trinodb/trino/issues/26031))

## CLI

* Add support for keyboard navigation with {kbd}`Alt+↑` or {kbd}`Alt+↓` in query
  history. ([#26138](https://github.com/trinodb/trino/issues/26138))

## Delta Lake connector

* Add support for using GCS without credentials. ([#25810](https://github.com/trinodb/trino/issues/25810))
* Rename `s3.socket-read-timeout` config property to `s3.socket-timeout`. ([#26263](https://github.com/trinodb/trino/issues/26263))
* Add metrics for data read from filesystem cache in 
  `EXPLAIN ANALYZE VERBOSE` output. ([#26342](https://github.com/trinodb/trino/issues/26342))
* Improve resource utilization when using Alluxio. ([#26121](https://github.com/trinodb/trino/issues/26121))
* Improve resource utilization by releasing native filesystem resources as soon as possible. ([#26085](https://github.com/trinodb/trino/issues/26085))
* Improve throughput for write-heavy queries on Azure when the `azure.multipart-write-enabled`
  config option is set to `true`. ([#26225](https://github.com/trinodb/trino/issues/26225))
* Reduce query failures due to S3 throttling. ([#26407](https://github.com/trinodb/trino/issues/26407))
* Avoid worker crashes due to out-of-memory errors when decoding unusually
  large Parquet footers. ([#25973](https://github.com/trinodb/trino/issues/25973))
* Fix incorrect results when reading from Parquet files produced by old versions
  of PyArrow. ([#26058](https://github.com/trinodb/trino/issues/26058))
* Fix writing malformed checkpoint files when [deletion vector](https://docs.delta.io/latest/delta-deletion-vectors.html) 
  is enabled. ([#26145](https://github.com/trinodb/trino/issues/26145))
* Fix failure when reading tables that contain null values in `variant` columns. ([#26016](https://github.com/trinodb/trino/issues/26016), [#26184](https://github.com/trinodb/trino/issues/26184))
* Fix incorrect results when reading `decimal` numbers from Parquet files and the declared precision 
  differs from the precision described in the Parquet metadata. ([#26203](https://github.com/trinodb/trino/issues/26203))
* Fix incorrect results when a table uses [deletion vector](https://docs.delta.io/latest/delta-deletion-vectors.html) 
  and its partition path contains special characters. ([#26299](https://github.com/trinodb/trino/issues/26299))

## Exasol connector

* Add support for Exasol `hashtype` type. ([#26512](https://github.com/trinodb/trino/issues/26512))
* Improve performance for queries involving `LIMIT`. ([#26592](https://github.com/trinodb/trino/issues/26592))

## Hive connector

* Add support for using GCS without credentials. ([#25810](https://github.com/trinodb/trino/issues/25810))
* Add support for reading tables using the [Esri JSON](https://doc.arcgis.com/en/velocity/ingest/esrijson.htm)
  format. ([#25241](https://github.com/trinodb/trino/issues/25241))
* Add support for `extended_boolean_literal` in text-file formats. ([#21156](https://github.com/trinodb/trino/issues/21156))
* Add metrics for data read from filesystem cache in `EXPLAIN ANALYZE VERBOSE` output. ([#26342](https://github.com/trinodb/trino/issues/26342))
* Add support for Twitter Elephantbird protobuf deserialization. ([#26305](https://github.com/trinodb/trino/issues/26305))
* Rename `s3.socket-read-timeout` config property to `s3.socket-timeout`. ([#26263](https://github.com/trinodb/trino/issues/26263))
* Improve throughput for write-heavy queries on Azure when the `azure.multipart-write-enabled`
  config option is set to `true`. ([#26225](https://github.com/trinodb/trino/issues/26225))
* Reduce query failures due to S3 throttling. ([#26407](https://github.com/trinodb/trino/issues/26407))
* Avoid worker crashes due to out-of-memory errors when decoding unusually
  large Parquet footers. ([#25973](https://github.com/trinodb/trino/issues/25973))
* Improve resource utilization when using Alluxio. ([#26121](https://github.com/trinodb/trino/issues/26121))
* Fix incorrect results when reading from Parquet files produced by old versions
  of PyArrow. ([#26058](https://github.com/trinodb/trino/issues/26058))
* Fix reading `partition_projection_format` column property for date partition
  projection. ([#25642](https://github.com/trinodb/trino/issues/25642))
* Fix incorrect results when reading `decimal` numbers from Parquet files and the declared precision
  differs from the precision described in the Parquet metadata. ([#26203](https://github.com/trinodb/trino/issues/26203))
* Fix physical input read time metric for tables containing text files. ([#26612](https://github.com/trinodb/trino/issues/26612))
* Add support for reading Hive OpenCSV tables with quoting and escaping disabled. ([#26619](https://github.com/trinodb/trino/issues/26619))

## HTTP Event Listener

* Add support for configuring the HTTP method to use via the `http-event-listener.connect-http-method` 
  config property. ([#26181](https://github.com/trinodb/trino/issues/26181))

## Hudi connector

* Add support for configuring batch size for reads on Parquet files using the
  `parquet.max-read-block-row-count` configuration property or the
    `parquet_max_read_block_row_count` session property. ([#25981](https://github.com/trinodb/trino/issues/25981))
* Add support for using GCS without credentials. ([#25810](https://github.com/trinodb/trino/issues/25810))
* Rename `s3.socket-read-timeout` config property to `s3.socket-timeout`. ([#26263](https://github.com/trinodb/trino/issues/26263))
* Improve resource utilization when using Alluxio. ([#26121](https://github.com/trinodb/trino/issues/26121))
* Improve throughput for write-heavy queries on Azure when the `azure.multipart-write-enabled`
  config option is set to `true`. ([#26225](https://github.com/trinodb/trino/issues/26225))
* Reduce query failures due to S3 throttling. ([#26407](https://github.com/trinodb/trino/issues/26407))
* Avoid worker crashes due to out-of-memory errors when decoding unusually
  large Parquet footers. ([#25973](https://github.com/trinodb/trino/issues/25973))
* Fix incorrect results when reading from Parquet files produced by old versions
  of PyArrow. ([#26058](https://github.com/trinodb/trino/issues/26058))
* Fix incorrect results when reading `decimal` numbers from Parquet files and the declared precision
  differs from the precision described in the Parquet metadata. ([#26203](https://github.com/trinodb/trino/issues/26203))

## Iceberg connector

* Add support for `SIGV4` as an independent authentication scheme. It can be 
  enabled by setting the `iceberg.rest-catalog.security` config property to `SIGV4`. 
  The `iceberg.rest-catalog.sigv4-enabled` config property is no longer 
  supported. ([#26218](https://github.com/trinodb/trino/issues/26218))
* Add support for using GCS without credentials. ([#25810](https://github.com/trinodb/trino/issues/25810))
* Allow configuring the compression codec to use for reading a table via the `compression_codec` table 
  property. The `compression_codec` session is no longer supported. ([#25755](https://github.com/trinodb/trino/issues/25755))
* Add metrics for data read from filesystem cache in `EXPLAIN ANALYZE VERBOSE` 
  output. ([#26342](https://github.com/trinodb/trino/issues/26342))
* Rename `s3.socket-read-timeout` config property to `s3.socket-timeout`. ([#26263](https://github.com/trinodb/trino/issues/26263))
* Improve performance of `expire_snapshots` procedure. ([#26230](https://github.com/trinodb/trino/issues/26230))
* Improve performance of `remove_orphan_files` procedure. ([#26326](https://github.com/trinodb/trino/issues/26326), [#26438](https://github.com/trinodb/trino/issues/26438))
* Improve performance of queries on `$files` metadata table. ([#25677](https://github.com/trinodb/trino/issues/25677))
* Improve performance of writes to Iceberg tables when task retries are 
  enabled. ([#26620](https://github.com/trinodb/trino/issues/26620))
* Reduce memory usage of `remove_orphan_files` procedure. ([#25847](https://github.com/trinodb/trino/issues/25847))
* Improve throughput for write-heavy queries on Azure when the `azure.multipart-write-enabled`
  config option is set to `true`. ([#26225](https://github.com/trinodb/trino/issues/26225))
* Reduce query failures due to S3 throttling. ([#26407](https://github.com/trinodb/trino/issues/26407), [#26432](https://github.com/trinodb/trino/issues/26432))
* Avoid worker crashes due to out-of-memory errors when decoding unusually
  large Parquet footers. ([#25973](https://github.com/trinodb/trino/issues/25973))
* Improve resource utilization when using Alluxio. ([#26121](https://github.com/trinodb/trino/issues/26121))
* Reduce amount of metadata generated in writes to Iceberg tables. ([#15439](https://github.com/trinodb/trino/issues/15439))
* Fix performance regression and potential query failures for `REFRESH MATERIALIZED VIEW`. ([#26051](https://github.com/trinodb/trino/issues/26051))
* Fix incorrect results when reading from Parquet files produced by old versions
  of PyArrow. ([#26058](https://github.com/trinodb/trino/issues/26058))
* Fix failure for `optimize_manifests` procedure when top-level partition columns contain null values. ([#26185](https://github.com/trinodb/trino/issues/26185))
* Fix incorrect results when reading `decimal` numbers from Parquet files and the declared precision
  differs from the precision described in the Parquet metadata. ([#26203](https://github.com/trinodb/trino/issues/26203))
* Fix coordinator out-of-memory failures when running `OPTIMIZE_MANIFESTS` on partitioned 
  tables. ([#26323](https://github.com/trinodb/trino/issues/26323))

## Kafka Event Listener

* Add support for configuring the max request size with the
  `kafka-event-listener.max-request-size` config property. ([#26129](https://github.com/trinodb/trino/issues/26129))
* Add support for configuring the batch size with the
  `kafka-event-listener.batch-size` config property. ([#26129](https://github.com/trinodb/trino/issues/26129))

## Memory connector

* Add support for default column values. ([#25679](https://github.com/trinodb/trino/issues/25679))
* Add support for `ALTER VIEW ... REFRESH`. ([#25906](https://github.com/trinodb/trino/issues/25906))

## MongoDB connector

* Fix failure when reading array type with different element types. ([#26585](https://github.com/trinodb/trino/issues/26585))

## MySQL Event Listener

* Ignore startup failure if `mysql-event-listener.terminate-on-initialization-failure` 
  is disabled. ([#26252](https://github.com/trinodb/trino/issues/26252))

## OpenLineage Event Listener

* Add user identifying fields to the OpenLineage `trino_query_context` facet. ([#26074](https://github.com/trinodb/trino/issues/26074))
* Add `query_id` field to `trino_metadata` facet. ([#26074](https://github.com/trinodb/trino/issues/26074))
* Allow customizing the job facet name with the `openlineage-event-listener.job.name-format` 
  config property. ([#25535](https://github.com/trinodb/trino/issues/25535))

## PostgreSQL connector

* Add support for `geometry` types when `PostGIS` is installed in schemas other 
  than `public`. ([#25972](https://github.com/trinodb/trino/issues/25972))

## SPI

* Remove `ConnectorSession` from `Type.getObjectValue`. ([#25945](https://github.com/trinodb/trino/issues/25945))
* Remove unused `NodeManager.getEnvironment` method. ([#26096](https://github.com/trinodb/trino/issues/26096))
* Remove `@Experimental` annotation. ([#26200](https://github.com/trinodb/trino/issues/26200))
* Remove deprecated `ConnectorPageSource.getNextPage` method. ([#26222](https://github.com/trinodb/trino/issues/26222))
* Remove support for `EventListener#splitCompleted`. ([#26436](https://github.com/trinodb/trino/issues/26436))
  and `ConnectorMetadata.refreshMaterializedView`. ([#26455](https://github.com/trinodb/trino/issues/26455))
* Remove unused `CatalogHandle` class. ([#26520](https://github.com/trinodb/trino/issues/26520))
* Change the signature of `ConnectorMetadata.beginRefreshMaterializedView` and
  `ConnectorMetadata.finishRefreshMaterializedView`. Table handles for other
  catalogs are no longer passed to these methods. ([#26454](https://github.com/trinodb/trino/issues/26454))
* Deprecate `NodeManager.getCurrentNode` in favor of `ConnectorContext.getCurrentNode`. ([#26096](https://github.com/trinodb/trino/issues/26096))
* Deprecate `ConnectorMetadata.delegateMaterializedViewRefreshToConnector`. ([#26455](https://github.com/trinodb/trino/issues/26455))
* Remove `totalBytes` and `totalRows` from `io.trino.spi.eventlistener.QueryStatistics`. ([#26524](https://github.com/trinodb/trino/issues/26524))
