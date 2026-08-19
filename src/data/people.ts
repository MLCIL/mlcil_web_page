/**
 * Lab members.
 *
 * Add a person by dropping an entry into the right array. `photo` is optional:
 * without it the site renders a monogram in the lab colors. Photos
 * go in `static/img/people/` and are referenced as `img/people/<file>` (square
 * images, at least 400x400, look best).
 */

export type PersonLink = {
    label: 'Google Scholar' | 'GitHub' | 'LinkedIn' | 'Website' | 'ORCID' | 'Email';
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
    bio:
        'Leader and founder of MLCIL. ' +
        'My scientific interests include chemoinformatics, QSAR/QSPR, graph machine learning, ' +
        'and applications of ML in chemoinformatics and other fields. ' +
        'Working as a Senior Chemoinformatician at MatGen.',
    links: [
        {
            label: 'Google Scholar',
            href: 'https://scholar.google.com/citations?user=7R6gRjMAAAAJ&hl=en',
        },
        {
            label: 'ORCID',
            href: 'https://orcid.org/0000-0003-4336-4288',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jakub-adamczyk-816566182/',
        },
        {
            label: 'GitHub',
            href: 'https://github.com/j-adamczyk',
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
                photo: 'img/people/Wojciech_Czech.png',
                bio:
                    'Researcher working on graph machine learning, structural pattern recognition, ' +
                    'and complex networks.  My work spans graph topological descriptors, ' +
                    'molecular graph classification, and exploration of large networks. ' +
                    'Working as the CTO of Placewise.',
                links: [
                    {
                        label: 'Google Scholar',
                        href: 'https://scholar.google.com/citations?user=g3thwW4AAAAJ&hl=pl&oi=ao',
                    },
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0000-0002-1903-8098',
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
        id: 'phd_students',
        title: 'PhD students',
        members: [
            {
                name: 'Mateusz Praski',
                role: 'PhD student',
                bio:
                    'Researching molecular representation learning and foundation models for ' +
                    'chemistry. My work focuses on benchmarking models and Bayesian statistical ' +
                    'analysis for fair evaluation. Working as a Senior ML Specialist at Selvita.',
                links: [
                    {
                        label: 'Google Scholar',
                        href: 'https://scholar.google.com/citations?user=g2evp5gAAAAJ&hl=pl&oi=ao',
                    },
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0009-0006-3956-5377',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/mateusz-praski/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/Thematiq',
                    },
                ],
            },
            {
                name: 'Piotr Ludynia',
                role: 'PhD student',
                photo: 'img/people/Piotr_Ludynia.png',
                bio:
                    'Researching optimizations of ML algorithms, particularly in chemoinformatics. ' +
                    'I am one of the primary developers of scikit-fingerprints. Working as a ' +
                    'Machine Learning Engineer at Enelpol.',
                links: [
                    {
                        label: 'Google Scholar',
                        href: 'https://scholar.google.com/citations?user=By_zWVoAAAAJ&hl=en',
                    },
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0009-0004-0749-9569',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/piotr-ludynia/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/my-alaska',
                    },
                ],
            },
            {
                name: 'Adam Staniszewski',
                role: 'PhD student',
                photo: 'img/people/Adam_Staniszewski.jpg',
                bio:
                    'Researching molecular representations and non-typical QSAR/QSPR targets ' +
                    'like massively multilabel classification and biologic macromolecules. ' +
                    'Working as a ML Engineer and Chemoinformatician at MatGen.',
                links: [
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0009-0009-1326-173X',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/adam-staniszewski-4b0154288/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/StaniszewskiA',
                    },
                ],
            },
            {
                name: 'Jolanta Śliwa',
                role: 'PhD student',
                bio:
                    'I am researching machine learning applications in tabletop pen & paper RPG ' +
                    'game design, particularly predictive models for ordinal regression. ' +
                    'Working as a Software Engineer at IBM.',
                links: [
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0009-0004-1889-5655',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/jolanta-%C5%9Bliwa-658465240/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/tunczyk101',
                    },
                ],
            },
        ],
    },
    {
        id: 'students',
        title: 'Students',
        members: [
            {
                name: 'Franciszek Job',
                role: 'MSc student',
                photo: 'img/people/Franciszek_Job.jpg',
                bio:
                    'My work focuses on high-performance data pipelines and large-scale ' +
                    'data processing for chemoinformatics. Working as a Software Engineer at ' +
                    'Software Mansion, and as a freelance full-stack developer at Venti Labs.',
                links: [
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0009-0007-4833-8982',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/fjob/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/franciszekjob',
                    },
                ],
            },
            {
                name: 'Kacper Szot',
                role: 'MSc student',
                bio:
                    'I work on structure-based and ligand-based virtual screening, particularly ' +
                    'fair evaluation of algorithms for those problems. Working as a Software ' +
                    'Engineer at Software Mansion.',
                links: [
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/kacper-szot/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/kacperszo',
                    },
                ],
            },
            {
                name: 'Maciej Nowakowski',
                role: 'MSc student',
                bio:
                    'I work on fair evaluation ligand-based virtual screening and curating ' +
                    'benchmarks for those problems.',
                links: [
                    {
                        label: 'GitHub',
                        href: 'https://github.com/MaciekBartoszNowakowski',
                    },
                ],
            },
            {
                name: 'Przemysław Popowski',
                role: 'MSc student',
                bio:
                    'My research focuses on robust global recommendation systems based on ' +
                    'Bayesian statistics. Working as a Junior Software Engineer at AVSystem.',
                links: [
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/popowski-przemyslaw/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/przemuuu',
                    },
                ],
            },
            {
                name: 'Michał Szymocha',
                role: 'BSc student',
                bio:
                    'My work focuses on maximum diversity picking and developing efficient ' +
                    'scientific software. Working as a Research Intern at the Jagiellonian Center ' +
                    'for Artificial Intelligence (JCAI).',
                links: [
                    {
                        label: 'Google Scholar',
                        href: 'https://scholar.google.com/citations?user=U6GXA4IAAAAJ&hl=pl&oi=ao',
                    },
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0009-0009-6480-727X',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/micha%C5%82-szymocha/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/MichalTheProgrammer',
                    },
                ],
            },
            {
                name: 'Maciej Kmąk',
                role: 'BSc student',
                bio:
                    'My work focuses on maximum diversity picking and developing efficient ' +
                    'scientific software. Working as a Software Engineer at Software Mansion.',
                links: [
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/maciej-km%C4%85k/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/Ki3mONo',
                    },
                ],
            },
            {
                name: 'Maciej Wiśniewski',
                role: 'BSc student',
                bio:
                    'My work focuses on maximum diversity picking and developing efficient ' +
                    'scientific software. Working as a Full Stack Software Engineer at Sabre.',
                links: [
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/maciej-wi%C5%9Bniewski-674414358/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/macwsn',
                    },
                ],
            },
            {
                name: 'Hubert Miklas',
                role: 'BSc student',
                photo: 'img/people/Hubert_Miklas.png',
                bio:
                    'My work focuses on maximum diversity picking and developing efficient ' +
                    'scientific software. Working as a Software Development Engineer at Remitly.',
                links: [
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/hubert-miklas-773968278/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/Hbrtjm',
                    },
                ],
            },
        ],
    },
    {
        id: 'collaborators',
        title: 'Collaborators',
        description: 'People we work with regularly at other institutions.',
        members: [
            {
                name: 'Paweł Siedlecki',
                role:
                    'Assistant Professor, PhD, Institute of Biochemistry and Biophysics ' +
                    'of the Polish Academy of Sciences (IBB PAS)',
                bio:
                    'Leader of CHEMM group at IBB PAS. My work focuses on protein-ligand ' +
                    'affinity prediction and in silico molecular screening. I also work on ' +
                    'applying QSAR/QSPR in ecotoxicology and agrochemistry.',
                links: [
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0000-0002-7482-1341',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://scholar.google.com/citations?user=4MGHwSYAAAAJ&hl=pl&oi=ao',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/henryk69',
                    },
                    {
                        label: 'Website',
                        href: 'https://ibb.edu.pl/en/laboratory/pawel-siedlecki-phd-dsc/',
                    },
                ],
            },
            {
                name: 'Jakub Poziemski',
                role:
                    'PhD student, Institute of Biochemistry and Biophysics ' +
                    'of the Polish Academy of Sciences (IBB PAS)',
                bio:
                    'My work focuses on protein-ligand affinity prediction and incorporating ' +
                    'molecular dynamics information into those problems. I also work on applying ' +
                    'QSAR/QSPR in ecotoxicology and agrochemistry. Working as a ',
                links: [
                    {
                        label: 'ORCID',
                        href: 'https://orcid.org/0000-0002-1033-8529',
                    },
                    {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/jakub-poziemski-885868164/',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/JPoziemski',
                    },
                ],
            },
        ],
    },
    {
        id: 'alumni',
        title: 'Alumni',
        description: 'Former members and where they went next.',
        members: [],
    },
];
