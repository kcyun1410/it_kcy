const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

 const WordRelay = require('./WordRelay');
//const RenderTest = require('./RenderTest');
// const Hot = hot(RenderTest);
// ReactDom.render(<Hot />, document.querySelector("#root"));

const Hot = hot(WordRelay);

ReactDom.render(<WordRelay />, document.querySelector("#root"));