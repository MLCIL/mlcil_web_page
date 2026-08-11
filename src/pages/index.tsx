import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import Hero from '@site/src/components/Hero';
import Section from '@site/src/components/Section';
import ResearchIcon from '@site/src/components/ResearchIcon';
import { PublicationEntry } from '@site/src/components/PublicationList';
import { LAB } from '@site/src/data/lab';
import { RESEARCH_AREAS } from '@site/src/data/research';
import { SELECTED_PUBLICATIONS } from '@site/src/data/publications';
import { FEATURED_SOFTWARE } from '@site/src/data/software';

import styles from './index.module.css';

function ResearchAreas(): ReactNode {
  return (
    <Section
      id="research"
      eyebrow="What we work on"
      title="Research areas"
      lead="We sit between machine learning and chemistry: building molecular models, checking whether they really work, and shipping the tooling that lets other people check too."
      action={
        <Link className="mlcil-arrow-link" to="/research">
          All research areas
        </Link>
      }>
      <div className={styles.areaGrid}>
        {RESEARCH_AREAS.slice(0, 3).map((area) => (
          <Link
            key={area.id}
            to={`/research#${area.id}`}
            className="mlcil-card mlcil-card--interactive">
            <span className={styles.areaIcon}>
              <ResearchIcon name={area.icon} />
            </span>
            <Heading as="h3" className={styles.areaTitle}>
              {area.title}
            </Heading>
            <p className={styles.areaSummary}>{area.summary}</p>
            <span className={styles.areaKeywords}>
              {area.keywords.slice(0, 3).join(' · ')}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function FeaturedSoftware(): ReactNode {
  return (
    <Section
      sunken
      eyebrow="Open source"
      title="Software & datasets"
      lead="Research software is a first-class output here. Everything we publish comes with code, and the libraries are maintained for people outside the lab."
      action={
        <Link className="mlcil-arrow-link" to="/software">
          All projects
        </Link>
      }>
      <div className={styles.softwareGrid}>
        {FEATURED_SOFTWARE.map((project) => (
          <div key={project.name} className="mlcil-card">
            <div className={styles.softwareHead}>
              <code className={styles.softwareName}>{project.name}</code>
              <span className="mlcil-tag mlcil-tag--accent">{project.kind}</span>
            </div>
            <p className={styles.softwareSummary}>{project.summary}</p>
            <div className={styles.softwareLinks}>
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SelectedPublications(): ReactNode {
  return (
    <Section
      eyebrow="Recent work"
      title="Selected publications"
      action={
        <Link className="mlcil-arrow-link" to="/publications">
          Full list
        </Link>
      }>
      <div className={styles.publications}>
        {SELECTED_PUBLICATIONS.slice(0, 5).map((publication) => (
          <PublicationEntry key={publication.title} publication={publication} />
        ))}
      </div>
    </Section>
  );
}

function JoinBanner(): ReactNode {
  return (
    <section className={styles.joinBanner}>
      <div className="mlcil-container">
        <div className={styles.joinInner}>
          <div>
            <Heading as="h2" className={styles.joinTitle}>
              Work with us
            </Heading>
            <p className={styles.joinText}>
              We supervise BSc and MSc theses at {LAB.institution} and are happy
              to talk to students, researchers and industry groups interested in
              molecular machine learning. Contributions to our open-source
              projects are welcome from anywhere.
            </p>
          </div>
          <div className={styles.joinActions}>
            <Link className={styles.joinPrimary} to="/people">
              Meet the lab
            </Link>
            <a
              className={styles.joinGhost}
              href={LAB.github}
              target="_blank"
              rel="noreferrer">
              GitHub organisation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Home" description={LAB.description}>
      <Hero />
      <main>
        <ResearchAreas />
        <FeaturedSoftware />
        <SelectedPublications />
        <JoinBanner />
      </main>
    </Layout>
  );
}
