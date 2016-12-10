module.exports = {
    entry: "./lesson_7/src/index.js",
    devtool: "source-map",
    output: {
        //path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {   test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};
