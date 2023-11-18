// @ts-check
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const browserslist = require("browserslist");
const { browserslistToTargets } = require("lightningcss");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
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

	return {
		dir: {
			input: "src",
		},
	};
};
