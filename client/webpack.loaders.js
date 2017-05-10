module.exports = [
  {
    test: /\.jsx?$/,
    loader: "babel-loader",
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1']
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file-loader"
  },
  {
    test: /\.(woff|woff2)$/,
    loader: "url-loader?prefix=font/&limit=5000"
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=10000&mimetype=application/octet-stream"
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader?limit=10000&mimetype=image/svg+xml"
  },
  {
    test: /\.gif/,
    loader: "url-loader?limit=10000&mimetype=image/gif"
  },
  {
    test: /\.jpg/,
    loader: "url-loader?limit=10000&mimetype=image/jpg"
  },
  {
    test: /\.png/,
    loader: "url-loader?limit=10000&mimetype=image/png"
  }
];
