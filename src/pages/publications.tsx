import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';

import PageHeader from '@site/src/components/PageHeader';
import PublicationList from '@site/src/components/PublicationList';
import {
  PUBLICATIONS,
  TOPICS,
  type PublicationType,
} from '@site/src/data/publications';

import styles from './publications.module.css';

const ALL = 'All';

const count = (type: PublicationType): number =>
  PUBLICATIONS.filter((publication) => publication.type === type).length;

export default function PublicationsPage(): ReactNode {
  const location = useLocation();
  const history = useHistory();
  const [topic, setTopic] = useState<string>(ALL);

  // Only offer filters that actually match something.
  const topics = useMemo(
    () => [
      ALL,
      ...TOPICS.filter((candidate) =>
        PUBLICATIONS.some((p) => p.topics.includes(candidate)),
      ),
    ],
    [],
  );

  // The URL is the source of truth, so /research can deep-link into a filtered
  // list and the filter survives sharing and the back button. Read after mount
  // rather than during render: the server has no query string, and seeding
  // state from it would cause a hydration mismatch.
  useEffect(() => {
    const requested = new URLSearchParams(location.search).get('topic');
    setTopic(requested && topics.includes(requested) ? requested : ALL);
  }, [location.search, topics]);

  const selectTopic = (next: string): void => {
    history.replace(
      next === ALL
        ? location.pathname
        : `${location.pathname}?topic=${encodeURIComponent(next)}`,
    );
  };

  const filtered = useMemo(
    () =>
      topic === ALL
        ? PUBLICATIONS
        : PUBLICATIONS.filter((p) => p.topics.includes(topic)),
    [topic],
  );

  return (
    <Layout
      title="Publications"
      description="Peer-reviewed papers and preprints from the Machine Learning and Chemoinformatics Lab, AGH University of Krakow.">
      <PageHeader
        eyebrow="Publications"
        title="Papers & preprints"
        lead="Journal articles, conference papers and preprints, newest first. Each entry links to the published version, the preprint and the code where these exist.">
        <dl className={styles.metrics}>
          <div>
            <dt>{PUBLICATIONS.length}</dt>
            <dd>Publications</dd>
          </div>
          <div>
            <dt>{count('journal')}</dt>
            <dd>Journal articles</dd>
          </div>
          <div>
            <dt>{count('conference')}</dt>
            <dd>Conference papers</dd>
          </div>
          <div>
            <dt>{count('preprint')}</dt>
            <dd>Preprints</dd>
          </div>
        </dl>
      </PageHeader>

      <main className="mlcil-section">
        <div className="mlcil-container">
          <div className={styles.filters} role="group" aria-label="Filter by topic">
            {topics.map((candidate) => (
              <button
                key={candidate}
                type="button"
                className={clsx(
                  styles.filter,
                  topic === candidate && styles.filterActive,
                )}
                aria-pressed={topic === candidate}
                onClick={() => selectTopic(candidate)}>
                {candidate}
              </button>
            ))}
          </div>
          <PublicationList publications={filtered} />
        </div>
      </main>
    </Layout>
  );
}
