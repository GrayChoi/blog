module.exports = {
  home: '/',
  sitename: 'PURE RENDER | BLOG',
  // tagline: 'The one theme for bisheng',
  // navigation: [{
  //   title: 'BiSheng',
  //   link: 'https://github.com/benjycui/bisheng',
  // }],
  // footer: 'Copyright and so on...',
  // hideBisheng: true,
  github: 'https://github.com/GrayChoi/blog',
  routes: [{
    path: '/',
    component: './template/Archive',
  }, {
    path: '/posts/:post',
    component: './template/Post',
  }, {
    path: '/tags',
    component: './template/TagCloud',
  }],
};
