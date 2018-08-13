import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/layout.css';
import './Styles/animation.css';
import './Styles/normalize.css';
import './Styles/index.css';

ReactDOM.render(
  (<Router>
    <App />
  </Router>)
, document.getElementById('root'));
registerServiceWorker();
