import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import PageHeader from '@site/src/components/PageHeader';
import ResearchIcon from '@site/src/components/ResearchIcon';
import { RESEARCH_AREAS } from '@site/src/data/research';

import styles from './research.module.css';

export default function ResearchPage(): ReactNode {
  return (
    <Layout
      title="Research"
      description="Research areas of the Machine Learning and Chemoinformatics Lab: chemoinformatics, graph machine learning, evaluation and benchmarking, applied machine learning and open source scientific software.">
      <PageHeader
        title="Research areas"
      />

      <main className="mlcil-section">
        <div className="mlcil-container">
          <div className={styles.areas}>
            {RESEARCH_AREAS.map((area) => (
              <article key={area.id} id={area.id} className={styles.area}>
                <div className={styles.areaAside}>
                  <span className={styles.areaIcon}>
                    <ResearchIcon name={area.icon} />
                  </span>
                </div>
                <div className={styles.areaBody}>
                  <Heading as="h2" className={styles.areaTitle}>
                    {area.title}
                  </Heading>
                  <p className={styles.areaSummary}>{area.summary}</p>
                  <div className={styles.areaLinks}>
                    {area.topic && (
                      <Link
                        className="mlcil-arrow-link"
                        to={`/publications?topic=${encodeURIComponent(area.topic)}`}>
                        Related publications
                      </Link>
                    )}
                    {area.links?.map((link) => (
                      <Link
                        key={link.to}
                        className="mlcil-arrow-link"
                        to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
