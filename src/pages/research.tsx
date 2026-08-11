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
      description="Research areas of the Machine Learning and Chemoinformatics Lab: molecular representation learning, graph ML, evaluation and benchmarking, applied chemoinformatics, applied machine learning and open source scientific software.">
      <PageHeader
        eyebrow="Research"
        title="What we work on"
        lead="We work on the whole chain: how to turn the data into something a model can use, which model to pick, how to tell whether it actually works, and what other people need in order to repeat any of it. Most of that involves molecules, though not all of it."
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
                  <div className="mlcil-tag-row">
                    {area.keywords.map((keyword) => (
                      <span key={keyword} className="mlcil-tag">
                        {keyword}
                      </span>
                    ))}
                  </div>
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
