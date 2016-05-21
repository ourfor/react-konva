var webpack = require('webpack');

module.exports = {
    entry: [
        './test/test.js'
    ],
    output: {
        path: __dirname,
        filename: './test/test.bundle.js',
        libraryTarget: "var",
        library: "ReactKonva"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
