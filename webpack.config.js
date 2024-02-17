const path = require('path');

module.exports = {
    watch: true,
    mode:'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',

    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
  
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
    
      },
};