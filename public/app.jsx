let React = require('react');
let ReactDOM = require('react-dom');
let Greeter = require('Greeter');


let name = 'Dear friend';
// let message;

ReactDOM.render(
    <Greeter name={name}/>,
    document.getElementById('app')
);
