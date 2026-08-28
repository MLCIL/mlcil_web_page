/**
 * JSON-LD structured data for the lab and its principal investigator.
 *
 * Search engines, scholarly indexers and automated affiliation checks read
 * schema.org markup rather than the prose on the page, so the facts that the
 * visible content states in human language (Jakub Adamczyk founded MLCIL and
 * leads it as its principal investigator) are restated here in the vocabulary
 * those tools understand. Nothing here asserts anything the pages do not.
 */
import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';

import {LAB} from '@site/src/data/lab';
import {LAB_LEAD} from '@site/src/data/people';

const SITE_URL = 'https://mlcil.org';

const LAB_ID = `${SITE_URL}/#organization`;
const PI_ID = `${SITE_URL}/people#jakub-adamczyk`;

/** External profiles of the lab lead, as schema.org `sameAs` entries. */
const PI_SAME_AS = (LAB_LEAD.links ?? [])
    .filter((link) => !link.href.startsWith('mailto:'))
    .map((link) => link.href);

const INSTITUTION = {
    '@type': 'CollegeOrUniversity',
    '@id': 'https://ror.org/00bas1c41',
    name: LAB.institution,
    url: 'https://www.agh.edu.pl/en',
    sameAs: ['https://ror.org/00bas1c41', 'https://www.wikidata.org/wiki/Q1132271'],
};

const PRINCIPAL_INVESTIGATOR = {
    '@type': 'Person',
    '@id': PI_ID,
    name: LAB_LEAD.name,
    givenName: 'Jakub',
    familyName: 'Adamczyk',
    url: `${SITE_URL}/people`,
    image: `${SITE_URL}/${LAB_LEAD.photo}`,
    email: `mailto:${LAB.email}`,
    // The lab lead role, in the terms external tools look for. All three name
    // the same position that /people describes as "Lab lead" and "founder".
    jobTitle: ['Principal Investigator', 'Lab Lead', 'Researcher'],
    hasOccupation: {
        '@type': 'Occupation',
        name: 'Principal Investigator',
        occupationLocation: INSTITUTION,
        responsibilities: `Founder and principal investigator (PI) of the ${LAB.name} (${LAB.shortName}), leading the group's research agenda, members and grants.`,
    },
    affiliation: [{'@id': LAB_ID}, INSTITUTION],
    worksFor: {'@id': LAB_ID},
    memberOf: {'@id': LAB_ID},
    identifier: PI_SAME_AS.filter((href) => href.includes('orcid.org')),
    sameAs: PI_SAME_AS,
    knowsAbout: [
        'Chemoinformatics',
        'Molecular fingerprints',
        'Graph machine learning',
        'QSAR/QSPR',
        'Molecular property prediction',
    ],
};

const ORGANIZATION = {
    '@type': ['ResearchOrganization', 'Organization'],
    '@id': LAB_ID,
    name: LAB.name,
    alternateName: LAB.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.svg`,
    email: `mailto:${LAB.email}`,
    description: LAB.description,
    parentOrganization: INSTITUTION,
    location: {
        '@type': 'Place',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Krakow',
            addressCountry: 'PL',
        },
    },
    sameAs: [LAB.github, LAB.linkedin],
    founder: {'@id': PI_ID},
    // `employee` with a Role is how schema.org expresses "who holds which
    // position", which is what affiliation checks resolve against.
    employee: {
        '@type': 'OrganizationRole',
        roleName: 'Principal Investigator',
        namedPosition: 'Principal Investigator',
        employee: {'@id': PI_ID},
    },
    member: {
        '@type': 'OrganizationRole',
        roleName: 'Principal Investigator',
        member: {'@id': PI_ID},
    },
};

const GRAPH = {
    '@context': 'https://schema.org',
    '@graph': [
        ORGANIZATION,
        PRINCIPAL_INVESTIGATOR,
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: LAB.name,
            publisher: {'@id': LAB_ID},
            author: {'@id': PI_ID},
            creator: {'@id': PI_ID},
        },
    ],
};

/**
 * Emits the lab/PI JSON-LD graph plus the equivalent `<meta>` tags. Rendered
 * once per page that describes the lab or its people.
 */
export default function StructuredData(): ReactNode {
    return (
        <Head>
            <meta name="author" content={LAB_LEAD.name} />
            <meta
                name="dc.creator"
                content={`${LAB_LEAD.name} (Principal Investigator, ${LAB.name})`}
            />
            <meta name="citation_author" content={LAB_LEAD.name} />
            <meta name="citation_author_institution" content={`${LAB.name}, ${LAB.institution}`} />
            <meta
                name="description-pi"
                content={`${LAB_LEAD.name} is the founder and principal investigator (PI) of the ${LAB.name} (${LAB.shortName}), ${LAB.faculty}, ${LAB.institution}.`}
            />
            <script type="application/ld+json">{JSON.stringify(GRAPH)}</script>
        </Head>
    );
}
