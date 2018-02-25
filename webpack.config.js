/**
 * Created by z.c. on 16/8/14.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './index.js')],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'maptalks-awesome-marker.js'
    },
    devServer: {
        inline: true,
        port: 8181
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'

            }
        ]
    },
    plugins: [
	     new webpack.NoErrorsPlugin(),

		 // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         drop_console: true,
        //         warnings: false
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
