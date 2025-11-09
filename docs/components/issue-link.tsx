export function IssueLink({ issue }: { issue: string }) {
  return (
    <a
      href={`https://github.com/trinodb/trino/issues/${issue}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-fd-primary hover:underline"
    >
      #{issue}
    </a>
  );
}
