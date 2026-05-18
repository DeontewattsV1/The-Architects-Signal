const path = require('path');

module.exports = {
  entry: './src/agents/plumbingAgents.js',
  output: {
    filename: 'plumbingAgents.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'commonjs2' },
  },
  mode: 'production',
  target: 'node',
};
