// entry point -> output

const path = require('path');
const ExtractTextplugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
    
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextplugin('styles.css');

    return {

            entry: "./src/app.js",
            output: {
                path: path.join(__dirname, 'public'),
                filename: 'bundle.js'
            },
            module: {
                rules: [{
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_mobules/
                },{
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    }),
                    test: /\.s?css$/
                }]
            },
            plugins: [
                CSSExtract
            ],
            devtool: isProduction ? 'source-map' : 'inline-source-map',
            devServer: {
                contentBase: path.join(__dirname, 'public')
            }

    };
};

