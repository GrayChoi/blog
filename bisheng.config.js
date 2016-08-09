module.exports = {
  lazyLoad: true,
  root: '/',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-react?lang=jsx'
  ],
  htmlTemplate: './site/theme/static/template.html',
  pick: {
    posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    }
  },
  webpackConfig(config) {
    config.babel.plugins.push([
      require.resolve('babel-plugin-antd'),
      {
        style: true
      }
    ]);
    return config;
  }
};