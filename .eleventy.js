module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);

  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  return {
    dir: {
      input: "content",
      output: "public",
    },
  };
};