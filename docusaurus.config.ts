import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Machine Learning and Chemoinformatics Lab',
  tagline:
    'Molecular machine learning, honest benchmarks and open-source tools for chemoinformatics',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mlcil.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'MLCIL',
  projectName: 'mlcil.org',

  onBrokenLinks: 'throw',
  // Anchors are only collected from Markdown headings, so in-page links into
  // our JSX pages (e.g. /research#graph-ml) are reported as broken.
  onBrokenAnchors: 'ignore',
  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          blogTitle: 'MLCIL blog',
          blogDescription:
            'Notes, tutorials and write-ups from the Machine Learning and Chemoinformatics Lab',
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'MLCIL blog',
            xslt: true,
          },
          editUrl: 'https://github.com/MLCIL/mlcil.org/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'chemoinformatics, machine learning, molecular fingerprints, graph neural networks, molecular property prediction, AGH University of Krakow',
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MLCIL',
      hideOnScroll: false,
      logo: {
        alt: 'MLCIL logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/research', label: 'Research', position: 'left' },
        { to: '/publications', label: 'Publications', position: 'left' },
        { to: '/software', label: 'Software', position: 'left' },
        { to: '/people', label: 'People', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/MLCIL',
          position: 'right',
          className: 'navbar-github-link',
          'aria-label': 'MLCIL on GitHub',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Lab',
          items: [
            { label: 'Research', to: '/research' },
            { label: 'Publications', to: '/publications' },
            { label: 'People', to: '/people' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Open source',
          items: [
            { label: 'Software & datasets', to: '/software' },
            {
              label: 'scikit-fingerprints',
              href: 'https://github.com/MLCIL/scikit-fingerprints',
            },
            { label: 'GitHub organisation', href: 'https://github.com/MLCIL' },
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            {
              label: 'AGH University of Krakow',
              href: 'https://www.agh.edu.pl/en',
            },
            {
              label: 'Faculty of Computer Science',
              href: 'https://informatyka.agh.edu.pl/en/',
            },
            // `pathname://` keeps this out of the router: the feed is a build
            // artifact, not a route, so the link checker cannot see it.
            { label: 'Blog RSS feed', to: 'pathname:///blog/rss.xml' },
          ],
        },
      ],
      copyright: `Machine Learning and Chemoinformatics Lab · Faculty of Computer Science, AGH University of Krakow · © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
