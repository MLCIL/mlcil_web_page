import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { usePluginData } from '@docusaurus/useGlobalData';

import Hero from '@site/src/components/Hero';
import Section from '@site/src/components/Section';
import { PublicationEntry } from '@site/src/components/PublicationList';
import { LAB } from '@site/src/data/lab';
import { PUBLICATIONS } from '@site/src/data/publications';
import { FEATURED_SOFTWARE } from '@site/src/data/software';

import styles from './index.module.css';

function FeaturedSoftware(): ReactNode {
  return (
    <Section
      sunken
      title="Software & datasets"
      action={
        <Link className="mlcil-arrow-link" to="/software">
          All projects
        </Link>
      }>
      <div className={styles.softwareGrid}>
        {FEATURED_SOFTWARE.map((project) => (
          <div key={project.name} className="mlcil-card">
            <div className={styles.softwareHead}>
              <Heading as="h3" className={styles.softwareName}>
                {project.name}
              </Heading>
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

function LatestPublications(): ReactNode {
  return (
    <Section
      title="Latest publications"
      action={
        <Link className="mlcil-arrow-link" to="/publications">
          All publications
        </Link>
      }>
      <div className={styles.publications}>
        {PUBLICATIONS.slice(0, 5).map((publication) => (
          <PublicationEntry key={publication.title} publication={publication} />
        ))}
      </div>
    </Section>
  );
}

type BlogPost = {
  title: string;
  description: string;
  permalink: string;
  date: string;
  tags: string[];
};

/** Posts come from ./plugins/blog-index, newest first. */
function LatestPosts(): ReactNode {
  const { posts } = usePluginData('mlcil-blog-index') as { posts: BlogPost[] };

  if (posts.length === 0) {
    return null;
  }

  return (
    <Section
      title="Blog"
      action={
        <Link className="mlcil-arrow-link" to="/blog">
          All posts
        </Link>
      }>
      <div className={styles.postGrid}>
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.permalink}
            to={post.permalink}
            className="mlcil-card mlcil-card--interactive">
            <time className={styles.postDate} dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
            <Heading as="h3" className={styles.postTitle}>
              {post.title}
            </Heading>
            <p className={styles.postSummary}>{post.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Home" description={LAB.description}>
      <Hero />
      <main>
        <LatestPublications />
        <FeaturedSoftware />
        <LatestPosts />
      </main>
    </Layout>
  );
}
