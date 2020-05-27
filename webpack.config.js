const path = require("path")

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'public')

module.exports = {
    entry: path.resolve(APP_DIR, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {   
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}
