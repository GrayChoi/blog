module.exports = {
  lazyLoad: true,
  root: '/blog/',
  plugins: ['bisheng-plugin-description'],
  pick: {
    posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    }
  }
};