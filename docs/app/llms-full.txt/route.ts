import { source } from '@/lib/source';
import { getLLMText } from '@/lib/llm';

export const GET = async () => {
  const pages = source.getPages();
  const texts = await Promise.all(pages.map((page) => getLLMText(page)));
  const text = texts.join('\n\n');

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
