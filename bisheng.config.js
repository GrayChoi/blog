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
  },
  webpackConfig(config) {
    config.babel.plugins.push(['antd'], {
      style: true,
    });
    return config;
  }
};