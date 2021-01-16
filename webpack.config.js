const path = require('path');

const webpackConfig = {
    'context': __dirname + '/src',
    'entry': './index.js',
    'output': {
        'path': path.resolve(__dirname, 'dist'),
        'filename': 'jquery.autoc.min.js',
        'library': '',
        'libraryTarget': 'umd'
    },
    'module': {
        'rules': [{
            'test': /\.js$/,
            'exclude': /node_modules/,
            'loader': 'babel-loader'
        }]
    },
    externals: {
        jquery: {
            root: 'jQuery',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    },
    'plugins': [
    ]
};

module.exports = webpackConfig;