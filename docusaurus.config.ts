import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Machine Learning and Chemoinformatics Lab',
    tagline:
        'Research group focused on chemoinformatics, applied artificial intelligence, and open science',
    favicon: 'img/logo.svg',

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
                    blogDescription: 'Notes, write-ups and release announcements from the lab',
                    feedOptions: {
                        type: ['rss', 'atom'],
                        title: 'MLCIL blog',
                        xslt: true,
                    },
                    editUrl: 'https://github.com/MLCIL/mlcil.org/tree/master/',
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

    // Exposes the blog post list as global data, for the homepage teaser.
    plugins: ['./plugins/blog-index'],

    themeConfig: {
        // Social preview card (og:image / twitter:image). Must stay a raster
        // image, because link previews do not render SVG.
        image: 'img/social-card.png',
        metadata: [
            {
                name: 'keywords',
                content:
                    'machine learning, chemoinformatics, molecular fingerprints, graph neural networks, molecular property prediction, benchmarking, applied machine learning, AGH University of Krakow, MLCIL, Jakub Adamczyk, principal investigator, research group',
            },
            // Group leadership, spelled out for crawlers and automated
            // affiliation checks that read metadata rather than page prose.
            {name: 'author', content: 'Jakub Adamczyk'},
            {
                name: 'dc.contributor',
                content: 'Jakub Adamczyk (Principal Investigator, MLCIL)',
            },
            {
                name: 'organization-lead',
                content:
                    'Jakub Adamczyk, founder and Principal Investigator (PI) of the Machine Learning and Chemoinformatics Lab (MLCIL), Faculty of Computer Science, AGH University of Krakow',
            },
        ],
        colorMode: {
            // Light by default for everyone, regardless of the OS/browser preference.
            // The navbar toggle still switches to dark and the choice is remembered.
            defaultMode: 'light',
            respectPrefersColorScheme: false,
        },
        navbar: {
            // No `title`: the logo already carries the MLCIL wordmark, so a text
            // title next to it would just repeat the name.
            hideOnScroll: false,
            logo: {
                alt: 'MLCIL, Machine Learning and Chemoinformatics Lab',
                src: 'img/logo.svg',
                // Same artwork with a white wordmark, for the dark theme.
                srcDark: 'img/logo-dark.svg',
                // The wordmark sits inside the hexagon, so the mark needs most of the
                // 60px navbar height before it becomes legible.
                height: 44,
            },
            items: [
                // activeBaseRegex pins the active state to the homepage itself;
                // without it react-router treats "/" as a prefix of every route.
                {
                    to: '/',
                    label: 'Home',
                    position: 'left',
                    activeBaseRegex: '^/$',
                },
                {to: '/research', label: 'Research', position: 'left'},
                {to: '/publications', label: 'Publications', position: 'left'},
                {to: '/software', label: 'Software', position: 'left'},
                {to: '/people', label: 'People', position: 'left'},
                {to: '/grants', label: 'Grants', position: 'left'},
                {to: '/blog', label: 'Blog', position: 'left'},
                {to: '/contact', label: 'Contact', position: 'left'},
                {
                    href: 'https://www.informatyka.agh.edu.pl/en/',
                    position: 'right',
                    className: 'navbar-agh-link',
                    'aria-label':
                        'Faculty of Computer Science, AGH University of Krakow, the host institution of MLCIL',
                },
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
