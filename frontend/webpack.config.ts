module.exports = {
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};
