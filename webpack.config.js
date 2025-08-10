const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development';

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'), // Production build output
            filename: 'app.js'
        },
        mode: isDev ? 'development' : 'production',
        devServer: isDev ? {
            static: [
                { directory: path.join(__dirname, './') }, // serve index.html root
                {
                    directory: path.join(__dirname, 'src/resources/lang'),
                    publicPath: '/resources/lang', // map /resources/lang to src/resources/lang
                }
            ],
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            watchFiles: ['src/**/*', 'resources/lang/**/*']
        } : undefined,
        plugins: [
            // Only copy files in production
            ...(!isDev
                ? [new CopyWebpackPlugin({
                    patterns: [
                        { from: 'src/resources/lang', to: 'resources/lang' }
                    ]
                })]
                : []
            )
        ]
    };
};
