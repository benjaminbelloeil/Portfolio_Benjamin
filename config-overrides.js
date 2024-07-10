module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.mjs$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      resolve: {
        fullySpecified: false,
      },
      exclude: /node_modules\/@react-three\/drei\/node_modules\/@mediapipe\/tasks-vision/,
    });
    return config;
  };