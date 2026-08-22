import { readFileSync } from 'fs';
import path from 'path';

// Server Component: reads a pre-verified static HTML fragment at build time
// and inlines it as-is. Used for markup that's dense with inline SVG icons,
// where hand-converting to JSX (kebab-case SVG attrs -> camelCase, etc.)
// across thousands of lines would be pure transcription risk for zero
// benefit — the fragment is already tested/working HTML.
// display:contents keeps the wrapper out of layout entirely, so it never
// affects CSS that targets the fragment's own top-level element.
export default function PartialHtml({ file }) {
  const html = readFileSync(path.join(process.cwd(), 'src/partials', file), 'utf8');
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />;
}
