import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';


ReactDOM.render(
  <>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {'MayWeather'}
      </Navbar.Brand>
    </Navbar>

    <App />
  </>, document.getElementById('root')
);

module.hot.accept();
