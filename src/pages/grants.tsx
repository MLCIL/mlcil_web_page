import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import PageHeader from '@site/src/components/PageHeader';
import {GRANTS, type Grant} from '@site/src/data/grants';

import styles from './grants.module.css';

function GrantItem({grant}: {grant: Grant}): ReactNode {
    const logoUrl = useBaseUrl(grant.logo);
    // Everything except the title and the description is optional in the data.
    const meta = [grant.funder, grant.program, grant.number, grant.period, grant.value].filter(
        Boolean,
    );

    return (
        <article className={styles.grant}>
            {/* Funder marks keep their own colors, so they sit on a light plate in
          both themes rather than inheriting the surface. */}
            <div className={styles.logoPlate}>
                <img className={styles.logo} src={logoUrl} alt={grant.logoAlt} />
            </div>
            <div className={styles.body}>
                <Heading as="h2" className={styles.title}>
                    {grant.url ? (
                        <a href={grant.url} target="_blank" rel="noreferrer">
                            {grant.title}
                        </a>
                    ) : (
                        grant.title
                    )}
                </Heading>
                <p className={styles.meta}>{meta.join(' · ')}</p>
                <p className={styles.description}>{grant.description}</p>
                {grant.highlights && (
                    <ul className={styles.highlights}>
                        {grant.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}

export default function GrantsPage(): ReactNode {
    return (
        <Layout
            title="Grants"
            description="Grants and funding supporting the work of the Machine Learning and Chemoinformatics Lab, AGH University of Krakow."
        >
            <PageHeader title="Grants" />

            <main className="mlcil-section">
                <div className="mlcil-container">
                    <div className={styles.grants}>
                        {GRANTS.map((grant) => (
                            <GrantItem key={grant.id} grant={grant} />
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}
