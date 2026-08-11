import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { LAB } from '@site/src/data/lab';
import { PUBLICATIONS } from '@site/src/data/publications';
import { SOFTWARE } from '@site/src/data/software';

import styles from './styles.module.css';

/**
 * Decorative honeycomb lattice, tiled as an SVG pattern.
 * Purely ornamental, hence aria-hidden.
 */

// Flat-top hexagon, side 20 => tile of 60 x 34.64 with centres at the four
// tile corners plus the middle. Content outside a pattern tile is clipped
// rather than wrapped, so every partially visible hexagon is drawn explicitly.
const HEX_SIDE = 20;
const HEX_H = 17.32; // HEX_SIDE * sin(60°)

function hexagon(cx: number, cy: number): string {
  return [
    `M${cx - HEX_SIDE} ${cy}`,
    `L${cx - HEX_SIDE / 2} ${cy - HEX_H}`,
    `L${cx + HEX_SIDE / 2} ${cy - HEX_H}`,
    `L${cx + HEX_SIDE} ${cy}`,
    `L${cx + HEX_SIDE / 2} ${cy + HEX_H}`,
    `L${cx - HEX_SIDE / 2} ${cy + HEX_H}`,
    'Z',
  ].join(' ');
}

const LATTICE_PATH = [
  [0, 0],
  [60, 0],
  [0, 34.64],
  [60, 34.64],
  [30, 17.32],
]
  .map(([cx, cy]) => hexagon(cx, cy))
  .join(' ');

function Lattice(): ReactNode {
  return (
    <svg className={styles.lattice} aria-hidden="true">
      <defs>
        <pattern
          id="mlcil-hex"
          width="60"
          height="34.64"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.4)">
          <path
            d={LATTICE_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mlcil-hex)" />
    </svg>
  );
}

// Lab-level counts, derived from the data files so they never go stale.
const METRICS = [
  { value: `${PUBLICATIONS.length}`, label: 'Publications' },
  { value: `${SOFTWARE.length}`, label: 'Open-source releases' },
  {
    value: `${SOFTWARE.filter((project) => project.kind === 'dataset').length}`,
    label: 'Public datasets',
  },
  { value: '30+', label: 'Fingerprints in scikit-fingerprints' },
];

export default function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <Lattice />
      <div className={clsx('mlcil-container', styles.inner)}>
        <p className={styles.affiliation}>
          {LAB.faculty} · {LAB.institution}
        </p>
        <Heading as="h1" className={styles.title}>
          Machine Learning and
          <br />
          Chemoinformatics Lab
        </Heading>
        <p className={styles.tagline}>{LAB.tagline}</p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/research">
            Our research
          </Link>
          <Link className={styles.ghostButton} to="/publications">
            Publications
          </Link>
          <Link className={styles.ghostButton} to="/software">
            Software
          </Link>
        </div>
        <dl className={styles.metrics}>
          {METRICS.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <dt className={styles.metricValue}>{metric.value}</dt>
              <dd className={styles.metricLabel}>{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
