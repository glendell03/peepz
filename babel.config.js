const { resolvePath } = require('babel-plugin-module-resolver')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          resolvePath: (sourcePath, currentFile, opts) => {
            // resolve @app to src
            // for storybook compatibility
            if (sourcePath.startsWith('@/')) {
              return sourcePath.replace('@/', `${process.cwd()}/`)
            }
            return resolvePath(sourcePath, currentFile, opts)
          }
        }
      ]
    ]
  }
}
