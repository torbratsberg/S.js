var path = require('path');

module.exports = {
    entry: './src/app.ts',
    devtool: 'source-map',
    mode: 'development',
    watch: true,

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.json"
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
