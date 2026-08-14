import type { ReactNode } from 'react';
import Layout from '@theme/Layout';

import PageHeader from '@site/src/components/PageHeader';
import { LAB } from '@site/src/data/lab';

import styles from './contact.module.css';

const CHANNELS = [
  { label: 'Email', value: LAB.email, href: `mailto:${LAB.email}` },
  { label: 'GitHub', value: 'github.com/MLCIL', href: LAB.github },
  {
    label: 'LinkedIn',
    value: LAB.shortName,
    href: LAB.linkedin,
  },
];

export default function ContactPage(): ReactNode {
  return (
    <Layout
      title="Contact"
      description={`How to reach the Machine Learning and Chemoinformatics Lab at ${LAB.institution}.`}>
      <PageHeader title="Contact" />

      <main className="mlcil-section">
        <div className="mlcil-container">
          <dl className={styles.channels}>
            {CHANNELS.map((channel) => (
              <div key={channel.label} className={styles.channel}>
                <dt className={styles.label}>{channel.label}</dt>
                <dd className={styles.value}>
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith('mailto:') ? undefined : '_blank'
                    }
                    rel="noreferrer">
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className={styles.channel}>
              <dt className={styles.label}>Address</dt>
              <dd className={styles.value}>
                {LAB.faculty}, {LAB.institution}, {LAB.location}
              </dd>
            </div>
          </dl>
        </div>
      </main>
    </Layout>
  );
}
