const fs = require('node:fs/promises');
const path = require('node:path');
const {parseMarkdownFile, DEFAULT_PARSE_FRONT_MATTER} = require('@docusaurus/utils');

/**
 * The blog plugin keeps its posts to itself, so the homepage cannot read them.
 * This plugin walks the blog directory at build time and exposes the post list
 * as global data, consumed by src/pages/index.tsx via usePluginData().
 */

const PLUGIN_NAME = 'mlcil-blog-index';

// "2026-08-10-hello-mlcil.md" => date 2026-08-10, slug "hello-mlcil".
const FILENAME_DATE = /^(\d{4}-\d{2}-\d{2})-(.*)$/;

/** First paragraph of the post, with the obvious Markdown stripped out. */
function excerpt(content) {
    const [above] = content.split(/<!--\s*truncate\s*-->/);
    const paragraph = above.trim().split(/\n\s*\n/)[0] ?? '';
    return paragraph
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links and images
        .replace(/[*_`]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

async function readPost(blogDir, filename) {
    const basename = filename.replace(/\.mdx?$/, '');
    const match = FILENAME_DATE.exec(basename);
    const fileContent = await fs.readFile(path.join(blogDir, filename), 'utf8');
    const {frontMatter, contentTitle, content} = await parseMarkdownFile({
        filePath: filename,
        fileContent,
        parseFrontMatter: DEFAULT_PARSE_FRONT_MATTER,
    });

    const date = frontMatter.date ? new Date(frontMatter.date) : new Date(match?.[1] ?? basename);
    const slug = frontMatter.slug ?? match?.[2] ?? basename;

    return {
        title: frontMatter.title ?? contentTitle ?? slug,
        description: frontMatter.description ?? excerpt(content),
        permalink: `/blog/${slug.replace(/^\//, '')}`,
        date: date.toISOString(),
        tags: frontMatter.tags ?? [],
    };
}

module.exports = function blogIndexPlugin(context) {
    const blogDir = path.join(context.siteDir, 'blog');
    return {
        name: PLUGIN_NAME,

        async loadContent() {
            const entries = await fs.readdir(blogDir);
            const posts = await Promise.all(
                entries
                    .filter((entry) => /\.mdx?$/.test(entry))
                    .map((entry) => readPost(blogDir, entry)),
            );
            // Newest first, so consumers can just take the head of the list.
            return posts.sort((a, b) => b.date.localeCompare(a.date));
        },

        async contentLoaded({content, actions}) {
            actions.setGlobalData({posts: content});
        },

        getPathsToWatch() {
            return [path.join(blogDir, '**/*.{md,mdx}')];
        },
    };
};
