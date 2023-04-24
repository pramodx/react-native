const presets = ['babel-preset-expo'];
const plugins = [];

plugins.push(
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './',
      },
    },
  ],
  'react-native-reanimated/plugin'
);

module.exports = {
  presets,
  plugins,
};

// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };
