/**
 * Open-source software, datasets and reproduction code released by the lab.
 */

export type SoftwareLink = {
  label: string;
  href: string;
};

export type SoftwareProject = {
  name: string;
  summary: string;
  description?: string;
  language?: string;
  license?: string;
  kind: 'library' | 'dataset' | 'paper code';
  links: SoftwareLink[];
  featured?: boolean;
};

export const SOFTWARE: SoftwareProject[] = [
  {
    name: 'scikit-fingerprints',
    kind: 'library',
    language: 'Python',
    license: 'MIT',
    summary:
      'Scikit-learn compatible library for molecular fingerprints and chemoinformatics.',
    description:
      'Over 30 molecular fingerprints with a scikit-learn transformer API, plus parallel computation, molecular filters, conformer generation and dataset loaders. It is the most complete fingerprint library available in Python.',
    links: [
      { label: 'GitHub', href: 'https://github.com/MLCIL/scikit-fingerprints' },
      { label: 'PyPI', href: 'https://pypi.org/project/scikit-fingerprints/' },
      { label: 'Docs', href: 'https://scikit-fingerprints.readthedocs.io/latest/' },
      {
        label: 'Paper',
        href: 'https://www.sciencedirect.com/science/article/pii/S2352711024003145',
      },
    ],
    featured: true,
  },
  {
    name: 'MolPILE',
    kind: 'dataset',
    summary:
      'Large and diverse set of molecules for pretraining molecular models.',
    description:
      'A deduplicated pretraining set built from public chemical databases, put together so that molecular encoders see a wide range of chemistry rather than whatever happens to be popular.',
    links: [
      { label: 'GitHub', href: 'https://github.com/MLCIL/MolPILE_dataset' },
      {
        label: 'Hugging Face',
        href: 'https://huggingface.co/datasets/scikit-fingerprints/MolPILE',
      },
      { label: 'Paper', href: 'https://arxiv.org/abs/2509.18353' },
    ],
    featured: true,
  },
  {
    name: 'ApisTox',
    kind: 'dataset',
    summary:
      'Benchmark dataset of small molecule toxicity to honey bees (Apis mellifera).',
    description:
      'Pesticide toxicity data from ECOTOX and PPDB, merged and cleaned into one consistent set with chemical identifiers. Published in Scientific Data and mirrored in the UCI ML Repository.',
    links: [
      { label: 'GitHub', href: 'https://github.com/j-adamczyk/ApisTox_dataset' },
      { label: 'UCI', href: 'https://archive.ics.uci.edu/dataset/995/apistox' },
      { label: 'Paper', href: 'https://www.nature.com/articles/s41597-024-04232-w' },
    ],
    featured: true,
  },
  {
    name: 'bbt-test',
    kind: 'library',
    language: 'Python',
    license: 'MIT',
    summary:
      'PyMC port of the Bayesian Bradley-Terry model for comparing several algorithms across several datasets.',
    description:
      'For working out whether one model actually beats another across many datasets, instead of reading too much into a table of averages.',
    links: [{ label: 'GitHub', href: 'https://github.com/MLCIL/bbt-test' }],
  },
  {
    name: 'benchmarking_molecular_models',
    kind: 'paper code',
    summary:
      'Evaluation code for our benchmark of pretrained molecular embedding models.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/MLCIL/benchmarking_molecular_models',
      },
      { label: 'Paper', href: 'https://arxiv.org/abs/2508.06199' },
    ],
  },
  {
    name: 'MOLTOP',
    kind: 'paper code',
    summary:
      'Molecular Topological Profile, a baseline for molecular graph classification with no hyperparameters to tune.',
    links: [
      { label: 'GitHub', href: 'https://github.com/j-adamczyk/MOLTOP' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2407.12136' },
    ],
  },
];

export const FEATURED_SOFTWARE = SOFTWARE.filter((project) => project.featured);
