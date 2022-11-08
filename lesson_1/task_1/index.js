/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');


const greetingElem = (<div className="greeting">
  <h1 className="greeting__title">Hello, world!</h1>
  <p className="greeting__text">I'm learning React</p>
</div>);

// const greetingElem = React.createElement(
//   'div',
//   {className: 'greeting'},
//   [
//     React.createElement('h1', {className: 'greeting__title'}, 'Hello, world!'),
//     React.createElement('p', {className: 'greeting__text'}, "I'm learning React"),
//   ]
// )

ReactDOM.render(greetingElem, rootElement);