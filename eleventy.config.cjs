// @ts-check
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPlugin(EleventyVitePlugin, {
		viteOptions: {},
	});

	return {
		dir: {
			input: "src",
		},
	};
};
