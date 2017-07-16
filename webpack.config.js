const path = require('path'); 
var config = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8282
    },
    module: {
        loaders: [
            {
                test: /.\jsx?$/,
                exclude: /node_module/, 
                loader: 'babel-loader',

                query:{
                    presets: [ 'es2015', 'react' ]
                }
            }
        ]
    }
};

module.exports = config; 