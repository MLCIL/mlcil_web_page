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
    kind: 'software' | 'dataset';
    links: SoftwareLink[];
    featured?: boolean;
};

export const SOFTWARE: SoftwareProject[] = [
    {
        name: 'scikit-fingerprints',
        kind: 'software',
        summary: 'Scikit-learn compatible library for molecular fingerprints and chemoinformatics.',
        description:
            'Molecular fingerprints with scikit-learn compatible interface, built on RDKit. Also includes molecular filters, distances and similarities, applicability domain checks, and much more. Easy, efficient, and feature-rich tool for ML in chemoinformatics.',
        links: [
            {label: 'GitHub', href: 'https://github.com/MLCIL/scikit-fingerprints'},
            {label: 'PyPI', href: 'https://pypi.org/project/scikit-fingerprints/'},
            {label: 'Docs', href: 'https://scikit-fingerprints.readthedocs.io/latest/'},
            {
                label: 'Paper',
                href: 'https://www.sciencedirect.com/science/article/pii/S2352711024003145',
            },
        ],
        featured: true,
    },
    {
        name: 'bbt-test',
        kind: 'software',
        summary: 'Software suite for Bayesian statistical tests for fair model comparison.',
        description:
            'Easy to use library providing Bayesian statistical tests, providing interpretable probabilities instead of raw p-values. Purpose-built for benchmarking and fair comparison of ML models over many datasets. Based on PyMC, with visualization utilities.',
        links: [{label: 'GitHub', href: 'https://github.com/MLCIL/bbt-test'}],
    },
    {
        name: 'MolPILE',
        kind: 'dataset',
        summary: 'Large-scale, diverse dataset for pretraining molecular models.',
        description:
            'Standardized, high-quality small molecules dataset, built from public chemical databases. Ready for training foundation models for molecular representation learning.',
        links: [
            {label: 'GitHub', href: 'https://github.com/MLCIL/MolPILE_dataset'},
            {
                label: 'Hugging Face',
                href: 'https://huggingface.co/datasets/scikit-fingerprints/MolPILE',
            },
            {label: 'Paper', href: 'https://arxiv.org/abs/2509.18353'},
        ],
        featured: true,
    },
    {
        name: 'ApisTox',
        kind: 'dataset',
        summary: 'Benchmark dataset of small molecule toxicity to honey bees.',
        description:
            'Curated dataset of pesticide toxicity data to honey bees. Predefined train-test splits, ready for benchmarking QSAR/QSPR models.',
        links: [
            {label: 'GitHub', href: 'https://github.com/j-adamczyk/ApisTox_dataset'},
            {label: 'UCI', href: 'https://archive.ics.uci.edu/dataset/995/apistox'},
            {label: 'Paper', href: 'https://www.nature.com/articles/s41597-024-04232-w'},
        ],
        featured: true,
    },
];

export const FEATURED_SOFTWARE = SOFTWARE.filter((project) => project.featured);
