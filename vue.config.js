module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.module
        .rule('images')
          .test(/\.(png|jpe?g)(\?.*)?$/)
          .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
              name: 'img/[name].[hash:8].[ext]',
              mozjpeg: {
                progressive: true,
                quality: 85
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                enabled: false
              }
            })
    }
  }
}
