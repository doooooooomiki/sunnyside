
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: ".11ty-vite", // Default name of the temp folder

    // Defaults are shown:
    viteOptions: {
      base: './',
      clearScreen: false,
      server: {
        mode: "development",
        middlewareMode: true,
      },
      build: {
        mode: "production",
      }
    }
  });

  eleventyConfig.addPassthroughCopy('src/assets/css');
	eleventyConfig.addPassthroughCopy('src/assets/img');
	eleventyConfig.addPassthroughCopy('src/assets/js');
	eleventyConfig.addPassthroughCopy('src/assets/json');


  // Return your Object options:
  return {
    htmlTemplateEngine: "pug",
    templateFormats: [
      "html",
      "pug",
      "md",
      "11ty.js",
      "liquid",
    ],
    dir: {
      input: "src",
      output: "_site"
    }
  }
};