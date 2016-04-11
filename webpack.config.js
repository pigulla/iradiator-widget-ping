'use strict';

const path = require('path');
const webpack = require('webpack');

const pkg = require(path.join(__dirname, 'package.json'));

const externals = new Set(pkg.externalWebpackDependencies || []);

module.exports = {
    context: __dirname,
    entry: [
        './index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015,presets[]=stage-0'
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'
                ]
            }
        ]
    },
    resolve: {
        root: [
            path.join(__dirname, 'src')
        ],
        extensions: ['', '.js', '.jsx']
    },
    externals: [
        function (context, request, callback) {
            if (externals.has(request) || /^iradiator-plugin-/.test(request)) {
                return callback(null, `require("${request}")`);
            }
            callback();
        }
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};
