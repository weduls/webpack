// webpack.config.js

/*node.js 설치 후
webpack 설치하고, 사용한다.

emac 라이브러리 등을 사용한다. */


var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'front'),
  entry: {  // entry 경로
    "login": path.join(__dirname, './front/login/login.js')
  },
  output: { // output 경로
    path: path.resolve(__dirname, 'webapp/resources/js'),
    filename: "[name].js"  // entry에 나와 있는 이름들로 구성된 파일이 출력된다.
  },
  module: {
    rules: [
      { // 엔트리 파일을 컴파일 할때 다양한 로더를 추가하여 컴파일 할 수 있다.
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|jquery|jstree|multi-select|common)/
      },
      {
        test: /\.js$/,  // es5 문법에서도 적용되도록 수정
        loader: 'babel-loader',
        exclude: /(node_modules|jquery)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,  // css 파일을 import 할때 오류가 발생하는데 그것을 오류가 안나게 해주는 기능
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/, // scss 파일을 로드할 수 있게 해주는 기능
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  resolve: { // 자주사용하는 lib 등의 경로를 미리 alias 지정 해놓으면 import Common from 'common'; 등으로 경로 없이 바로 사용 가능
    alias: {
      'common': path.resolve(__dirname, 'front/jslib/commonUtil.js'),
      'jquery': 'jquery/src/jquery.js',
      'jquery-ui': path.resolve(__dirname, 'front/jslib/jquery-ui.min.js')
    }
  },
  // 압축 및 난독화 ( 난독화와 코드 압축을 위한 플러그인 )
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ]
  // Source Map 플러그인 ( 소스 맵 확인을 위한 플러그인 )
  devtool: '#inline-source-map'
}
