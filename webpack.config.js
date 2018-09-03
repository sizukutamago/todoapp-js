module.exports = {
    mode: 'development',

    entry: './index.js',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    }
};