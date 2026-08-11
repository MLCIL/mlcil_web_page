# mlcil.org

Website of the **Machine Learning and Chemoinformatics Lab (MLCIL)**, Faculty of
Computer Science, AGH University of Krakow. Built with
[Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages on every push
to `main`.

## Development

Requires Node.js 20+.

```bash
npm install
npm start        # dev server with hot reload at http://localhost:3000
npm run build    # production build into ./build
npm run serve    # serve the production build locally
npm run typecheck
```

## Editing content

Almost everything on the site is data, not markup. The files below are the only
ones you normally need to touch.

| What | File |
| --- | --- |
| Lab name, tagline, contact links | `src/data/lab.ts` |
| People (lead, PhD students, students, collaborators, alumni) | `src/data/people.ts` |
| Publications | `src/data/publications.ts` |
| Software, datasets, paper code | `src/data/software.ts` |
| Research areas | `src/data/research.ts` |
| Navbar and footer | `docusaurus.config.ts` |
| Colours, typography, shared UI primitives | `src/css/custom.css` |
| Blog posts | `blog/*.md` |

### Adding a person

Add an entry to the relevant group in `src/data/people.ts`:

```ts
{
  name: 'Ada Lovelace',
  role: 'PhD student',
  bio: 'Works on graph kernels for molecular property prediction.',
  interests: ['Graph ML', 'Benchmarking'],
  photo: 'img/people/ada-lovelace.jpg',   // optional
  links: [{ label: 'GitHub', href: 'https://github.com/...' }],
}
```

Photos go in `static/img/people/` — square, at least 400x400. Without a photo
the site renders a hexagonal monogram in the lab colours. Groups with no members
are skipped, so empty sections can stay in place.

### Adding a publication

Prepend an entry to `PUBLICATIONS` in `src/data/publications.ts`. Set
`selected: true` to feature it on the homepage, and make sure every lab member's
name is listed in `LAB_AUTHORS` so it is emphasised in the author line. The first
link is used as the paper's primary link (the clickable title), so put the DOI
there once the paper is published.

The counters on the homepage and the publications page are derived from these
data files, so they stay correct on their own — there is nothing to update by
hand.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages
on every push to `main`. The custom domain is set through `static/CNAME`.
