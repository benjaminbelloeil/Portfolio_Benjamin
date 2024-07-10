module.exports = {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          resolve: {
            fullySpecified: false,
          },
          exclude: /node_modules\/@react-three\/drei\/node_modules\/@mediapipe\/tasks-vision/,
        },
      ],
    },
  };