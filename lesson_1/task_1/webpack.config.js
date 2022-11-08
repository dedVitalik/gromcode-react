const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    
    const config = {
        entry: './index.js',
        output: {
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    use: ['babel-loader'],
                },
                {
                    test: /.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
            }),
        ],
        devServer: {
            port: 9000,
            hot: true,
        }
    }
    return config;
}
