module.exports = {
  lazyLoad: true,
  root: '/',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-react?lang=jsx'
  ],
  pick: {
    posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    }
  }
};