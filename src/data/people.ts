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
    { label: 'GitHub', href: 'https://github.com/j-adamczyk' },
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
    id: 'phd',
    title: 'PhD students',
    members: [
      {
        name: 'Piotr Ludynia',
        role: 'Researcher, Faculty of Computer Science, AGH',
        photo: 'img/people/Piotr_Ludynia.png',
        bio: 'One of the original creators of scikit-fingerprints. Mainly interested in ML algorithm opitmizations, especially in chemoinformatics.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?user=By_zWVoAAAAJ&hl=en',
          },
          { 
            label: 'GitHub', 
            href: 'https://github.com/my-alaska' 
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/piotr-ludynia/',
          },
        ],
      }
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
  {
    id: 'alumni',
    title: 'Alumni',
    description: 'Former members and where they went next.',
    members: [],
  },
];
