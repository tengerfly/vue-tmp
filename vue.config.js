module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8811,
    open: true
    // proxy: { // 代理
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // }
  }
};
