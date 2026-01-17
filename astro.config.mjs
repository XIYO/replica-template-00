// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';
import { readFileSync } from 'node:fs';

const siteConfig = JSON.parse(readFileSync('./site.config.json', 'utf-8'));
const siteUrl = `https://${siteConfig.subdomain}.xiyo.dev`;

export default defineConfig({
	site: siteUrl,
	output: 'static',
	adapter: cloudflare(),
	integrations: [
		starlight({
			title: siteConfig.title,
			customCss: ['./src/styles/custom.css'],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: `https://github.com/${siteConfig.githubRepo}`,
				},
			],
			sidebar: [
				{ label: 'Guides', autogenerate: { directory: 'guides' } },
				{ label: 'Reference', autogenerate: { directory: 'reference' } },
			],
		}),
	],
});
