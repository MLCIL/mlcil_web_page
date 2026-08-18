/**
 * Grants shown on /grants, newest first.
 *
 * Logos live in static/img/grants/ and are the funders' own marks, used for
 * acknowledgement only.
 */

export type Grant = {
    id: string;
    /** Grant title, as submitted. */
    title: string;
    /** Funding body, spelled out. */
    funder: string;
    /** Short form used for the link label, e.g. "NCN". */
    funderShort?: string;
    /** Funding scheme or program the grant was awarded under. */
    program?: string;
    /** Grant agreement or decision number. */
    number?: string;
    /** Funding period, e.g. "2026-2030". */
    period?: string;
    /** Award: a sum of money, or the hardware for an equipment grant. */
    value?: string;
    /** One paragraph on the problem and the approach. */
    description: string;
    /** Short takeaways, listed under the description. */
    highlights?: string[];
    logo: string;
    /** Alt text for the logo. */
    logoAlt: string;
    url?: string;
};

export const GRANTS: Grant[] = [
    {
        id: 'nvidia-peptides',
        title: 'Generation of chemically modified peptides using peptide folding information',
        funder: 'NVIDIA',
        funderShort: 'NVIDIA',
        program: 'Academic Grants Program',
        period: '2026',
        value: 'NVIDIA RTX 6000 Blackwell',
        description:
            'Peptide therapeutics are a fast-growing modality that remains hard to design, because activity depends jointly on sequence, local chemistry, folding, and developability constraints such as toxicity, selectivity, and synthesizability. Existing methods sit at two extremes that each fall short, so this project proposes a unified, folding-aware framework that couples sequence optimization over natural amino acids with residue-level optimization over a curated library of synthesizable modifications. It uses folding predictions, conformer-derived descriptors, and function scoring as active signals in a hierarchical discrete generative search, building on prior results showing that efficient representations can rival heavier architectures.',
        highlights: [
            'Bridges sequence-level and atom-level methods',
            'Uses folding and function scores as active guidance',
            'Generative AI based on hierarchical discrete optimization',
        ],
        logo: 'img/grants/nvidia.svg',
        logoAlt: 'NVIDIA',
        url: 'https://www.nvidia.com/en-us/industries/higher-education-research/academic-grant-program/',
    },
    {
        id: 'ncn-opus-agrochemistry',
        title: 'Establishing a benchmarking platform for AI/ML predictive models for bioactivity and toxicity in agrochemistry',
        funder: 'National Science Centre, Poland',
        funderShort: 'NCN',
        program: 'OPUS',
        period: '2026-2030',
        value: '2.1 million PLN',
        description:
            'Modern crop protection faces resistance, a shortage of new modes of action, and climate-driven shifts in pest pressure, all while demand rises to cut chemical load and off-target toxicity. The AI/ML progress seen in pharmaceutical discovery has not reached agrochemistry, largely because few models are tested on pesticide-relevant chemical space and scattered, conflicting data make it hard to judge whether advanced methods beat classical baselines. This project delivers a task-oriented benchmark for crop-protection chemistry, analogous to MoleculeNet and TDC, with transparent baselines and a public leaderboard.',
        highlights: [
            'Reproducible, challenging, realistic benchmarking',
            'Validated tasks mirroring regulatory questions',
            'Extends molecular benchmarks to environmental toxicology',
        ],
        logo: 'img/grants/ncn.svg',
        logoAlt: 'National Science Centre, Poland',
        url: 'https://www.ncn.gov.pl/en',
    },
];
