import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import PageHeader from '@site/src/components/PageHeader';
import PersonCard, { PersonFeature } from '@site/src/components/PersonCard';
import { LAB } from '@site/src/data/lab';
import { LAB_LEAD, PEOPLE_GROUPS } from '@site/src/data/people';

import styles from './people.module.css';

export default function PeoplePage(): ReactNode {
  const groups = PEOPLE_GROUPS.filter((group) => group.members.length > 0);

  return (
    <Layout
      title="People"
      description={`Members of the Machine Learning and Chemoinformatics Lab at ${LAB.institution}.`}>
      <PageHeader
        title="The lab"
        lead={`MLCIL is based at the ${LAB.faculty}, ${LAB.institution}. We work with collaborators in chemistry, biology and computer science.`}
      />

      <main className="mlcil-section">
        <div className="mlcil-container">
          <PersonFeature person={LAB_LEAD} />

          {groups.map((group) => (
            <section key={group.id} className={styles.group}>
              <Heading as="h2" className={styles.groupTitle}>
                {group.title}
              </Heading>
              {group.description && (
                <p className={styles.groupDescription}>{group.description}</p>
              )}
              <div className={styles.grid}>
                {group.members.map((person) => (
                  <PersonCard key={person.name} person={person} />
                ))}
              </div>
            </section>
          ))}

          <section className={styles.join}>
            <Heading as="h2" className={styles.joinTitle}>
              Joining the lab
            </Heading>
            <p>
              We supervise BSc and MSc theses at {LAB.institution}. If you want
              to work on molecular models, on benchmarking and evaluation, on
              applied machine learning in some other field, or on the software
              itself, get in touch. A concrete idea or a pull request is the
              best way to start.
            </p>
            <div className={styles.joinLinks}>
              <a href={LAB.github} target="_blank" rel="noreferrer">
                GitHub organization
              </a>
              <Link to="/publications">Publications</Link>
              {LAB.email && <a href={`mailto:${LAB.email}`}>{LAB.email}</a>}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
