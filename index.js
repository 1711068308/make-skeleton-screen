// import React from 'react'
// import ReactDOM from 'react-dom'

// const render = () => {
//     ReactDOM.render(
//         <h1>Hello React</h1>,
//         document.getElementById('root')
//     )
// }

// render()

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './src/components/Main';
import Routes from './src/components/myrouter';

// Render the main component into the dom
ReactDOM.render(<Routes />, document.getElementById('root'));