const path = require('path');

module.exports = {
    entry: {
        main: './public/src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'dist/[name].bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true
    }
};