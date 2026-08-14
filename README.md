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
| Colors, typography, shared UI primitives | `src/css/custom.css` |
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

Photos go in `static/img/people/`, square and at least 400x400. Without a photo
the site renders a monogram in the lab colors. Groups with no members
are skipped, so empty sections can stay in place.

### Adding a publication

Prepend an entry to `PUBLICATIONS` in `src/data/publications.ts`. The list is
newest first, and the homepage shows the five most recent entries on its own. The
first link is used as the paper's primary link (the clickable title), so put the
published version there once the paper is out.

The counters on the publications page are derived from these
data files, so they stay correct on their own. There is nothing to update by
hand.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages
on every push to `main`. The custom domain is set through `static/CNAME`.
