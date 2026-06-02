import externalLinks from '@site/src/data/externalLinks';

export default function ExternalLink({id, children}) {
  const link = externalLinks[id];

  if (!link) {
    return <span>{children ?? id}</span>;
  }

  if (!link.href) {
    return <span>{children ?? link.label}</span>;
  }

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      {children ?? link.label}
    </a>
  );
}