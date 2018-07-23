import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'moment/locale/fr';
import {BrowserRouter} from 'react-router-dom';


const WithRouter = () => (
    <BrowserRouter>
           <App/>
    </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
