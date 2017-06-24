// webpack.config.js

/*node.js 설치 후
webpack 설치하고, 사용한다.

emac 라이브러리 등을 사용한다. */


var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    "login": path.join(__dirname, '/front/login/login.js')
  },
  output: {
    path: path.join(__dirname, '/webapp/resources/js'),
    filename: "[name].js"  // entry에 나와 있는 이름들로 구성된 파일이 출력된다.
  }
}
