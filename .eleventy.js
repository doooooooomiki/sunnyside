module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.min.js': './js/alpine.js',
  })

  // Return your Object options:
  return {
    htmlTemplateEngine: "pug",
    templateFormats: ["html", "pug", "md"],
    dir: {
      input: "src",
      output: "dist"
    }
  }
};