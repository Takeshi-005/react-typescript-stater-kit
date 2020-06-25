const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          // Provide the path to your tsconfig.json so that your stories can
          // display types from outside each individual story.
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
        },
      },
    ],
    include: [path.resolve(__dirname, '../src')],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push( path.resolve('src'));
  return config;
}
