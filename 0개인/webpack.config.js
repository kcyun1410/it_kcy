//webpack에 대한 설정파일
//node에서 path라는 모듈을 이용하면 편리
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions:['.js','.vue'],
    },
    entry: {
        //app은 webpack파일 명이 됨
        app: path.join(__dirname, 'main.js'),
    },
    //module은 webpack의 핵심.
    //어떻게 합칠껀지 어떻게 처리할 것인지 rules로 설정
    module: {
        rules: [{
            //NumberBaseball.vue가 javascript가 아니기 때문에 추가해줌
            // npm i vue-loader -D로 다운로드
            //정규식 /\.vue$/ (.vue로 끝나는 파일)
            test: /\.vue$/,
            //vue-loader를 사용
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        //entry의 app를 가져와서 파일명은 app.js가 됨
        filename: '[name].js',
        //파일주소는 절대경로로 적어줘야함
        //현재경로(현재 webpack.config.js파일이 있는 폴더->3강 폴더)는 __dirname
        //뒤에 폴더 명을 적으면 자동으로 주소에 붙여줌
        path: path.join(__dirname, 'dist'),
    },
};