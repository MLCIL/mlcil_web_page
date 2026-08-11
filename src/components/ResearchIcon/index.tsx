import type { ReactNode } from 'react';

/**
 * Line-art icons for the research areas. Drawn on a 24x24 grid, stroked with
 * `currentColor` so they inherit the surrounding text colour in both themes.
 */
const PATHS: Record<string, ReactNode> = {
  molecule: (
    <>
      <path d="M12 3.2 19 7.4v8.4L12 20l-7-4.2V7.4l7-4.2Z" />
      <path d="M12 3.2v4.4M19 7.4l-3.8 2.2M19 15.8l-3.8-2.2M12 20v-4.4M5 15.8l3.8-2.2M5 7.4l3.8 2.2" />
      <circle cx="12" cy="11.6" r="2.2" />
    </>
  ),
  graph: (
    <>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="17" cy="17.5" r="2.2" />
      <circle cx="6.5" cy="16" r="2.2" />
      <path d="M8.1 8.4 15.4 16M8.2 7 15.8 6.2M6.2 9.2 6.4 13.8M8.6 15.4l6.2-1.4" />
    </>
  ),
  benchmark: (
    <>
      <path d="M4 20h16" />
      <rect x="5" y="12" width="3.6" height="6" rx="1" />
      <rect x="10.2" y="8" width="3.6" height="10" rx="1" />
      <rect x="15.4" y="4.5" width="3.6" height="13.5" rx="1" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3.2h5M10.6 3.2v5.4L5.6 17a2 2 0 0 0 1.7 3h9.4a2 2 0 0 0 1.7-3l-5-8.4V3.2" />
      <path d="M7.6 14.4h8.8" />
    </>
  ),
  code: (
    <>
      <path d="m8.4 8.6-4.2 3.6 4.2 3.6M15.6 8.6l4.2 3.6-4.2 3.6M13.6 4.6l-3.2 15" />
    </>
  ),
  series: (
    <>
      <path d="M3.5 3.5v17h17" />
      <path d="m6.8 15.6 3.6-4.4 3.2 2.4 4.6-6.2" />
      <circle cx="6.8" cy="15.6" r="1.1" />
      <circle cx="10.4" cy="11.2" r="1.1" />
      <circle cx="13.6" cy="13.6" r="1.1" />
      <circle cx="18.2" cy="7.4" r="1.1" />
    </>
  ),
};

export default function ResearchIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {PATHS[name] ?? PATHS.molecule}
    </svg>
  );
}
