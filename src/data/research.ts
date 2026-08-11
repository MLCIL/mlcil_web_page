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
    id: 'molecular-representation',
    icon: 'molecule',
    title: 'Molecular representation learning',
    summary:
      'Before any model can run, a molecule has to be turned into numbers. We compare the ways of doing that, from fingerprints and descriptors to graph networks and pretrained encoders, testing them on the same data under the same conditions. We are also interested in how much a pretrained model really buys you on a new task.',
    keywords: ['Fingerprints', 'Descriptors', 'Pretrained models', 'Transfer learning'],
    topic: 'Chemoinformatics',
  },
  {
    id: 'graph-ml',
    icon: 'graph',
    title: 'Graph machine learning',
    summary:
      'A molecule is a graph, so predicting its properties is a graph learning problem. We work on graph neural networks and on much simpler descriptors computed from graph structure. The simple methods turn out to be competitive more often than people expect, which is worth knowing before reaching for something heavier.',
    keywords: ['GNNs', 'Graph kernels', 'Topological descriptors', 'Graph classification'],
    topic: 'Graph ML',
  },
  {
    id: 'evaluation',
    icon: 'benchmark',
    title: 'Evaluation, benchmarks and datasets',
    summary:
      'Results in molecular ML are hard to compare, and some of them stop looking impressive once the baselines are tuned properly. We build datasets and evaluation setups that make comparisons possible, and then use them to re-check what has already been published.',
    keywords: ['Benchmarking', 'Reproducibility', 'Model selection', 'Statistical comparison'],
    topic: 'Benchmarks & datasets',
  },
  {
    id: 'applications',
    icon: 'flask',
    title: 'Applied chemoinformatics',
    summary:
      'We work with people who have an actual prediction problem: which pesticides are dangerous to bees, what a peptide does, whether a compound is worth testing at all. They bring the chemistry and the questions, we bring the modelling.',
    keywords: ['Ecotoxicology', 'Agrochemistry', 'Property prediction', 'Screening'],
    topic: 'Ecotoxicology',
  },
  {
    id: 'applied-ml',
    icon: 'series',
    title: 'Machine learning outside chemistry',
    summary:
      'Not everything we do involves molecules. The same methods and the same care about evaluation apply elsewhere, so we also work on sensor data, tabular problems and occasionally something lighter, such as predicting how difficult a monster is in a tabletop RPG.',
    keywords: ['Tabular learning', 'Feature engineering', 'Time series', 'Applications'],
    topic: 'Applied ML',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Open source scientific software',
    summary:
      'We put real time into the software, not only the papers. Our libraries are tested, documented and packaged so that chemoinformatics fits into an ordinary scikit-learn pipeline, and every paper comes with the code that produced its results.',
    keywords: ['Python', 'scikit-learn', 'Packaging', 'Reproducibility'],
    topic: 'Open-source software',
    links: [{ label: 'Software and datasets', to: '/software' }],
  },
];
