
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/assets/css');
	eleventyConfig.addPassthroughCopy('src/assets/js');

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: ".11ty-vite", // Default name of the temp folder

    // Defaults are shown:
    viteOptions: {
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


  // Return your Object options:
  return {
    htmlTemplateEngine: "pug",
    templateFormats: [
      "html",
      "pug",
      "md",
      "11ty.js",
    ],
    dir: {
      input: "src",
      output: "dist"
    }
  }
};