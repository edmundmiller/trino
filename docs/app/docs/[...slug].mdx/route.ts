import { source } from '@/lib/source';
import { getLLMText } from '@/lib/llm';
import { notFound } from 'next/navigation';
import type { NextRequest } from 'next/server';

export const GET = async (
  _request: NextRequest,
  context: { params: Promise<Record<string, string | string[]>> }
) => {
  const params = await context.params;
  const slug = params?.slug;

  // Handle the slug parameter
  const slugArray = slug
    ? (Array.isArray(slug) ? slug : [slug])
    : undefined;

  const page = source.getPage(slugArray);

  if (!page) {
    notFound();
  }

  const text = await getLLMText(page);

  return new Response(text, {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
};

export async function generateStaticParams() {
  return source.generateParams();
}
