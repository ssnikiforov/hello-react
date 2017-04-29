/*
 USAGE:
 1. With this config file: just type `webpack` from the project-root dir
 2. Without this config file: `webpack ./public/app.js ./public/bundle.js`
 */

module.exports = {
    entry: './public/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'] //this presets are already included via package.json
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
