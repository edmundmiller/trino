import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Trino Documentation</h1>
      <p className="mb-8 text-lg text-gray-600">
        Powered by Fumadocs
      </p>
      <Link
        href="/docs"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        View Documentation
      </Link>
    </main>
  );
}
