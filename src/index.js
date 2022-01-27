import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './font.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import About from './components/about'
import NavigationBar from './components/NavigationBar/NavigationBar';
import NoMatch from './components/NoMatch/NoMatch';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavigationBar/>
            <Routes>
                <Route index exact path="/" element={ <App/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="*" element={ <NoMatch/> } />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
