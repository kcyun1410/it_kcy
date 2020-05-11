//webpack에 대한 설정파일

module.exports = {
    entry: {
        //app은 webpack파일 명이 됨
        app: './main.js'
    },
    module: {

    },
    plugins: [],
    output: {
        //entry의 app를 가져와서 파일명은 app.js가 됨
        filename: '[name].js',
        //파일주소
        path: './dist',
    },
};