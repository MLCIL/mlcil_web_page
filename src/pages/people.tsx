import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import PageHeader from '@site/src/components/PageHeader';
import PersonCard, {PersonFeature} from '@site/src/components/PersonCard';
import {LAB} from '@site/src/data/lab';
import {LAB_LEAD, PEOPLE_GROUPS} from '@site/src/data/people';

import styles from './people.module.css';

export default function PeoplePage(): ReactNode {
    const groups = PEOPLE_GROUPS.filter((group) => group.members.length > 0);

    return (
        <Layout
            title="People"
            description={`Members of the Machine Learning and Chemoinformatics Lab at ${LAB.institution}.`}>
            <PageHeader title="Our team"/>

            <main className="mlcil-section">
                <div className="mlcil-container">
                    <PersonFeature person={LAB_LEAD}/>

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
                                    <PersonCard key={person.name} person={person}/>
                                ))}
                            </div>
                        </section>
                    ))}

                    <section className={styles.join}>
                        <Heading as="h2" className={styles.joinTitle}>
                            Joining the lab
                        </Heading>
                        <p>
                            We are open to collaborations with researchers, students and companies
                            working on similar research areas. Contributions to our open source
                            projects are welcome from anyone. See the <Link to="/contact">contact page</Link>{' '}
                            for how to reach us.
                        </p>
                    </section>
                </div>
            </main>
        </Layout>
    );
}
