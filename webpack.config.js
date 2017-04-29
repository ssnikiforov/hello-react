/*
    USAGE:
    1. With this config file: just type `webpack` from the project-root dir
    2. Without this config file: `webpack ./public/app.js ./public/bundle.js`
*/

module.exports = {
    entry: './public/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
