import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import PageHeader from '@site/src/components/PageHeader';
import {SOFTWARE, type SoftwareProject} from '@site/src/data/software';

import styles from './software.module.css';

const KIND_ORDER: SoftwareProject['kind'][] = ['software', 'dataset'];

const KIND_TITLE: Record<SoftwareProject['kind'], string> = {
    software: 'Libraries',
    dataset: 'Datasets',
};

function ProjectCard({project}: {project: SoftwareProject}): ReactNode {
    return (
        <article className="mlcil-card">
            <Heading as="h3" className={styles.name}>
                {project.name}
            </Heading>
            <p className={styles.summary}>{project.summary}</p>
            {project.description && <p className={styles.description}>{project.description}</p>}
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
            description="Open source libraries, datasets and reproduction code from the Machine Learning and Chemoinformatics Lab."
        >
            <PageHeader title="Software & datasets" />

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
