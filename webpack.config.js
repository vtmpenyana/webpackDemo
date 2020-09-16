const path = require('path');

module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'), //where to store the output?
        publicPath: '/', //how the output is accessible?
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist' //where is the content?
    },

    module: {
        rules:[
         {
            use: ['babel-loader'],
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
            
        },
        {
            use: ['eslint-loader'],
            test: /\.(js|jsx)$/,
            exclude: /node_modules/        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}