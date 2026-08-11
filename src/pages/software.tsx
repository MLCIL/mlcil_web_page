import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import PageHeader from '@site/src/components/PageHeader';
import { LAB } from '@site/src/data/lab';
import { SOFTWARE, type SoftwareProject } from '@site/src/data/software';

import styles from './software.module.css';

const KIND_ORDER: SoftwareProject['kind'][] = [
  'library',
  'dataset',
  'paper code',
];

const KIND_TITLE: Record<SoftwareProject['kind'], string> = {
  library: 'Libraries',
  dataset: 'Datasets',
  'paper code': 'Paper code',
};

const KIND_DESCRIPTION: Record<SoftwareProject['kind'], string> = {
  library: 'Packaged and documented for people outside the lab to use.',
  dataset: 'Published alongside the paper that describes them.',
  'paper code': 'Code to reproduce the results of a single paper.',
};

function ProjectCard({ project }: { project: SoftwareProject }): ReactNode {
  return (
    <article className="mlcil-card">
      <div className={styles.head}>
        <Heading as="h3" className={styles.name}>
          {project.name}
        </Heading>
        <div className="mlcil-tag-row">
          {project.language && (
            <span className="mlcil-tag">{project.language}</span>
          )}
          {project.license && <span className="mlcil-tag">{project.license}</span>}
        </div>
      </div>
      <p className={styles.summary}>{project.summary}</p>
      {project.description && (
        <p className={styles.description}>{project.description}</p>
      )}
      <div className={styles.links}>
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default function SoftwarePage(): ReactNode {
  return (
    <Layout
      title="Software"
      description="Open source libraries, datasets and reproduction code from the Machine Learning and Chemoinformatics Lab.">
      <PageHeader
        eyebrow="Open source"
        title="Software and datasets"
        lead={
          <>
            The libraries below are maintained for general use, and every paper
            we publish comes with the code behind it. All of it lives in the{' '}
            <a href={LAB.github} target="_blank" rel="noreferrer">
              MLCIL GitHub organisation
            </a>
            .
          </>
        }
      />

      <main className="mlcil-section">
        <div className="mlcil-container">
          {KIND_ORDER.map((kind) => {
            const projects = SOFTWARE.filter((p) => p.kind === kind);
            if (projects.length === 0) {
              return null;
            }
            return (
              <section key={kind} className={styles.group}>
                <Heading as="h2" className={styles.groupTitle}>
                  {KIND_TITLE[kind]}
                </Heading>
                <p className={styles.groupDescription}>
                  {KIND_DESCRIPTION[kind]}
                </p>
                <div className={styles.grid}>
                  {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
