import { loader } from 'fumadocs-core/source';
import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx/runtime/next';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});
