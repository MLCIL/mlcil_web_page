/**
 * Research areas shown on the homepage and on /research.
 *
 * Keep the prose general and describe the question rather than individual
 * models or papers. Specifics belong on /publications and /software, which
 * each area links to via `topic` (matching a topic in
 * src/data/publications.ts).
 */

export type ResearchArea = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  keywords: string[];
  /** Topic slug used to deep-link into the filtered publication list. */
  topic?: string;
  /** Extra links, e.g. to the software page. */
  links?: { label: string; to: string }[];
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'chemoinformatics',
    icon: 'molecule',
    title: 'Chemoinformatics',
    summary:
      'Molecular property prediction and applications: molecular fingerprints, physicochemical descriptors, and pretrained molecular foundation models. We apply them to concrete problems and domains like ecotoxicology and peptide function prediction.',
    keywords: [
      'Molecular fingerprints',
      'Pretrained molecular foundation models',
      'Ecotoxicology',
      'Peptide function prediction',
    ],
    topic: 'Chemoinformatics',
  },
  {
    id: 'graph-ml',
    icon: 'graph',
    title: 'Graph machine learning',
    summary:
      'Graph theory and learning on graphs: topological descriptors, graph neural networks, graph classification. We research structural baselines and graph-theoretic aspects.',
    keywords: [
      'Topological graph descriptors',
      'GNNs',
      'Graph classification',
    ],
    topic: 'Graph ML',
  },
  {
    id: 'evaluation',
    icon: 'benchmark',
    title: 'Benchmarking, datasets, and evaluation',
    summary:
      'Constructing benchmarks and datasets for machine learning and chemoinformatics. We focus on fair evaluation, strong baselines, and statistical analysis methods.',
    keywords: [
      'Benchmarking',
      'Reproducibility',
      'Model selection',
      'Statistical comparison',
    ],
    topic: 'Benchmarks & datasets',
  },
  {
    id: 'applied-ml',
    icon: 'series',
    title: 'Applied machine learning',
    summary:
      'Predictive modeling and novel artificial intelligence applications.',
    keywords: [
      'Tabular learning',
      'Feature engineering',
      'Applied ML',
    ],
    topic: 'Applied ML',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Open source scientific software',
    summary:
      'Software for chemoinformatics, machine learning, and data processing. We provide high-quality libraries and reproducible pipelines.',
    keywords: [
      'Open source',
      'Libraries',
      'Reproducibility'
    ],
    topic: 'Open-source software',
    links: [{ label: 'Software and datasets', to: '/software' }],
  },
];
