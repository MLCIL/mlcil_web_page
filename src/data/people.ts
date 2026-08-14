/**
 * Lab members.
 *
 * Add a person by dropping an entry into the right array. `photo` is optional:
 * without it the site renders a monogram in the lab colors. Photos
 * go in `static/img/people/` and are referenced as `img/people/<file>` (square
 * images, at least 400x400, look best).
 */

export type PersonLink = {
    label: 'Scholar' | 'GitHub' | 'LinkedIn' | 'Website' | 'ORCID' | 'Email';
    href: string;
};

export type Person = {
    name: string;
    role: string;
    /** Short bio, 1-3 sentences. */
    bio?: string;
    photo?: string;
    links?: PersonLink[];
};

export type PeopleGroup = {
    id: string;
    title: string;
    description?: string;
    members: Person[];
};

export const LAB_LEAD: Person = {
    name: 'Jakub Adamczyk',
    role: 'Lab lead · Researcher, Faculty of Computer Science, AGH',
    photo: 'img/people/Jakub_Adamczyk.jpg',
    bio: 'Leader and founder of MLCIL. His scientific interests include chemoinformatics, QSAR/QSPR, graph machine learning, and applications of ML in chemoinformatics and other fields.',
    links: [
        {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?user=7R6gRjMAAAAJ&hl=en',
        },
        {label: 'GitHub', href: 'https://github.com/j-adamczyk'},
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jakub-adamczyk-816566182/',
        },
    ],
};

/**
 * Everyone else, grouped. Empty groups are skipped when rendering, so it is
 * safe to leave a section in place until you have someone to put in it.
 */
export const PEOPLE_GROUPS: PeopleGroup[] = [
    {
        id: 'researcher',
        title: 'Researchers',
        members: [
            {
                name: 'Wojciech Czech',
                role: 'Researcher, PhD',
                bio: 'Researcher working on graph machine learning, structural pattern recognition, and complex networks. His work spans graph topological descriptors, molecular graph classification, and exploration of large networks.',
                links: [
                    {
                        label: 'Scholar',
                        href: 'https://scholar.google.com/citations?user=g3thwW4AAAAJ&hl=pl&oi=ao',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/wojciech-czech-48baaa4/',
                    },
                ],
            },
        ],
    },
    {
        id: 'phd',
        title: 'PhD students',
        members: [
            {
                name: 'Mateusz Praski',
                role: 'PhD student',
                bio: 'Working on molecular representation learning and foundation models for chemistry. His work focuses on benchmarking models and Bayesian statistical analysis for fair evaluation.',
                links: [
                    {
                        label: 'Scholar',
                        href: 'https://scholar.google.com/citations?user=g2evp5gAAAAJ&hl=pl&oi=ao',
                    },
                    {label: 'GitHub', href: 'https://github.com/Thematiq'},
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/mateusz-praski/',
                    },
                ],
            },
        ],
    },
    {
        id: 'students',
        title: 'MSc & BSc students',
        description:
            'Students writing theses or working on research projects with us.',
        members: [],
    },
    {
        id: 'collaborators',
        title: 'Collaborators',
        description:
            'People we work with regularly at other institutions.',
        members: [],
    },
];
