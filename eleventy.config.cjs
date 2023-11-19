// @ts-check
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const browserslist = require("browserslist");
const { browserslistToTargets } = require("lightningcss");
const pluginWebc = require("@11ty/eleventy-plugin-webc");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc);
	eleventyConfig.addPlugin(EleventyVitePlugin, {
		viteOptions: {
			css: {
				transformer: "lightningcss",
				lightningcss: {
					targets: browserslistToTargets(browserslist(">= 0.25%")),
				},
			},
			build: {
				cssMinify: "lightningcss",
			},
		},
	});

	eleventyConfig.addPassthroughCopy("src/assets");

	return {
		dir: {
			input: "src",
		},
	};
};
