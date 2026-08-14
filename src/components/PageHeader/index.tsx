import type { ReactNode } from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type PageHeaderProps = {
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
};

/**
 * Banner at the top of every inner page. Lighter than the homepage hero:
 * tinted background, hairline rule, no artwork.
 */
export default function PageHeader({
  title,
  lead,
  children,
}: PageHeaderProps): ReactNode {
  return (
    <header className={styles.header}>
      <div className="mlcil-container">
        <span className="mlcil-accent-bar" aria-hidden="true" />
        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
    </header>
  );
}
