import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './src/Component/App';
import store from './app/createStore';

const mountNode = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, mountNode);
