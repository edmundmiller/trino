import { loader } from 'fumadocs-core/source';
import { docs, meta } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: { files: docs, pageTree: meta },
});
