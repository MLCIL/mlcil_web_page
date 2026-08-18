import type {ReactNode} from 'react';
import {type Publication} from '@site/src/data/publications';

import styles from './styles.module.css';

function AuthorLine({authors}: {authors: string[]}): ReactNode {
    return <p className={styles.authors}>{authors.join(', ')}</p>;
}

export function PublicationEntry({publication}: {publication: Publication}): ReactNode {
    const primaryLink = publication.links[0]?.href;
    return (
        <article className={styles.entry}>
            <div className={styles.year} aria-hidden="true">
                {publication.year}
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>
                    {primaryLink ? (
                        <a href={primaryLink} target="_blank" rel="noreferrer">
                            {publication.title}
                        </a>
                    ) : (
                        publication.title
                    )}
                </h3>
                <AuthorLine authors={publication.authors} />
                <p className={styles.venue}>
                    <em>{publication.venue}</em>
                    <span className={styles.yearInline}>{publication.year}</span>
                </p>
                <div className={styles.links}>
                    {publication.links.map((link) => (
                        <a
                            key={link.href}
                            className={styles.linkChip}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function PublicationList({publications}: {publications: Publication[]}): ReactNode {
    if (publications.length === 0) {
        return <p className={styles.empty}>No publications match this filter.</p>;
    }

    const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

    return (
        <div className={styles.list}>
            {years.map((year) => (
                <section key={year} className={styles.yearGroup}>
                    <h2 className={styles.yearHeading}>
                        <span>{year}</span>
                        <span className={styles.yearRule} />
                    </h2>
                    {publications
                        .filter((p) => p.year === year)
                        .map((publication) => (
                            <PublicationEntry key={publication.title} publication={publication} />
                        ))}
                </section>
            ))}
        </div>
    );
}
