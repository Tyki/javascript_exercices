module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: './js',
        libraryTarget: 'var',
        library: 'workshop'
    }
    // },
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader?presets[]=es2015'
    //         }
    //     ]
    // }
}
