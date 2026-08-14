/**
 * Publication list, newest first.
 *
 * To add a paper: prepend an entry and list authors as "F. Lastname".
 */

export type PublicationType = 'journal' | 'conference' | 'preprint';

export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  topics: string[];
  links: PublicationLink[];
};

export const TOPICS = [
  'Chemoinformatics',
  'Graph ML',
  'Benchmarks & datasets',
  'Applied ML',
  'Open-source software',
  'Ecotoxicology',
] as const;

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'Scikit-fingerprints: Python library for scikit-learn compatible molecular fingerprints and chemoinformatics',
    authors: ['J. Adamczyk', 'A. Staniszewski'],
    venue: 'arXiv preprint',
    year: 2026,
    type: 'preprint',
    topics: ['Open-source software', 'Chemoinformatics'],
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2608.02027' },
      { label: 'Code', href: 'https://github.com/MLCIL/scikit-fingerprints' },
    ],
  },
  {
    title: 'Molecular fingerprints are strong models for peptide function prediction',
    authors: ['J. Adamczyk', 'P. Ludynia', 'W. Czech'],
    venue: 'Bioinformatics',
    year: 2026,
    type: 'journal',
    topics: ['Chemoinformatics', 'Benchmarks & datasets'],
    links: [
      {
        label: 'Paper',
        href: 'https://academic.oup.com/bioinformatics/article/42/5/btag179/8653978',
      },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2501.17901' },
      {
        label: 'Code',
        href: 'https://github.com/MLCIL/peptides_molecular_fingerprints_classification',
      },
    ],
  },
  {
    title:
      'Evaluating machine learning models for predicting pesticide toxicity to honey bees',
    authors: ['J. Adamczyk', 'J. Poziemski', 'P. Siedlecki'],
    venue: 'Ecotoxicology and Environmental Safety, vol. 312',
    year: 2026,
    type: 'journal',
    topics: ['Ecotoxicology', 'Chemoinformatics'],
    links: [
      {
        label: 'Paper',
        href: 'https://www.sciencedirect.com/science/article/pii/S0147651326001983',
      },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2503.24305' },
    ],
  },
  {
    title:
      'Application of machine learning to monster level prediction in tabletop RPG game design',
    authors: ['J. Śliwa', 'J. Adamczyk'],
    venue: 'arXiv preprint',
    year: 2026,
    type: 'preprint',
    topics: ['Applied ML'],
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2607.09196' }],
  },
  {
    title:
      'Towards Rational Pesticide Design with Graph Machine Learning Models for Ecotoxicology',
    authors: ['J. Adamczyk'],
    venue:
      'Proceedings of the 34th ACM International Conference on Information and Knowledge Management (CIKM)',
    year: 2025,
    type: 'conference',
    topics: ['Ecotoxicology', 'Graph ML'],
    links: [
      { label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3746252.3761660' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2509.18703' },
    ],
  },
  {
    title: 'MolPILE - large-scale, diverse dataset for molecular representation learning',
    authors: [
      'J. Adamczyk',
      'J. Poziemski',
      'F. Job',
      'M. Król',
      'M. Makowski',
    ],
    venue: 'arXiv preprint',
    year: 2025,
    type: 'preprint',
    topics: ['Benchmarks & datasets', 'Chemoinformatics'],
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2509.18353' },
      { label: 'Code', href: 'https://github.com/MLCIL/MolPILE_dataset' },
      {
        label: 'Dataset',
        href: 'https://huggingface.co/datasets/scikit-fingerprints/MolPILE',
      },
    ],
  },
  {
    title:
      'Benchmarking pretrained molecular embedding models for molecular representation learning',
    authors: ['M. Praski', 'J. Adamczyk', 'W. Czech'],
    venue: 'arXiv preprint',
    year: 2025,
    type: 'preprint',
    topics: ['Benchmarks & datasets', 'Chemoinformatics'],
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2508.06199' },
      {
        label: 'Code',
        href: 'https://github.com/MLCIL/benchmarking_molecular_models',
      },
    ],
  },
  {
    title:
      'ApisTox: a new benchmark dataset for the classification of small molecules toxicity on honey bees',
    authors: ['J. Adamczyk', 'J. Poziemski', 'P. Siedlecki'],
    venue: 'Scientific Data, vol. 12, article 5',
    year: 2025,
    type: 'journal',
    topics: ['Benchmarks & datasets', 'Ecotoxicology'],
    links: [
      { label: 'Paper', href: 'https://www.nature.com/articles/s41597-024-04232-w' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2404.16196' },
      { label: 'Code', href: 'https://github.com/j-adamczyk/ApisTox_dataset' },
      { label: 'UCI', href: 'https://archive.ics.uci.edu/dataset/995/apistox' },
    ],
  },
  {
    title:
      'Scikit-fingerprints: easy and efficient computation of molecular fingerprints in Python',
    authors: ['J. Adamczyk', 'P. Ludynia'],
    venue: 'SoftwareX, vol. 28, 101944',
    year: 2024,
    type: 'journal',
    topics: ['Open-source software', 'Chemoinformatics'],
    links: [
      {
        label: 'Paper',
        href: 'https://www.sciencedirect.com/science/article/pii/S2352711024003145',
      },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2407.13291' },
      { label: 'Code', href: 'https://github.com/MLCIL/scikit-fingerprints' },
    ],
  },
  {
    title:
      'Molecular Topological Profile (MOLTOP) - simple and strong baseline for molecular graph classification',
    authors: ['J. Adamczyk', 'W. Czech'],
    venue: '27th European Conference on Artificial Intelligence (ECAI)',
    year: 2024,
    type: 'conference',
    topics: ['Graph ML', 'Chemoinformatics'],
    links: [
      { label: 'Paper', href: 'https://ebooks.iospress.nl/doi/10.3233/FAIA240663' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2407.12136' },
      { label: 'Code', href: 'https://github.com/j-adamczyk/MOLTOP' },
    ],
  },
  {
    title:
      'Strengthening structural baselines for graph classification using Local Topological Profile',
    authors: ['J. Adamczyk', 'W. Czech'],
    venue: 'International Conference on Computational Science (ICCS)',
    year: 2023,
    type: 'conference',
    topics: ['Graph ML'],
    links: [
      {
        label: 'Paper',
        href: 'https://link.springer.com/chapter/10.1007/978-3-031-36027-5_47',
      },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2305.00724' },
      { label: 'Code', href: 'https://github.com/j-adamczyk/LTP' },
    ],
  },
  {
    title:
      'Application of Graph Neural Networks and graph descriptors for graph classification',
    authors: ['J. Adamczyk'],
    venue: 'arXiv preprint',
    year: 2022,
    type: 'preprint',
    topics: ['Graph ML'],
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2211.03666' }],
  },
  {
    title:
      'Comparison of manual and automated feature engineering for daily activity classification in mental disorder diagnosis',
    authors: ['J. Adamczyk', 'F. Malawski'],
    venue: 'Computing and Informatics, vol. 40(4), 850',
    year: 2021,
    type: 'journal',
    topics: ['Applied ML'],
    links: [{ label: 'Paper', href: 'https://doi.org/10.31577/cai_2021_4_850' }],
  },
];
