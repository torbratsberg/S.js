var path = require('path');

let babelOptions = {
    "presets": [
        "@babel/preset-typescript",
        "minify",
    ],
}

module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    mode: 'production',
    watch: true,
    target: ['web', 'es5'],

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'babel-loader',
                options: babelOptions,
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.json",
                },
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 's.js'
    },
};
