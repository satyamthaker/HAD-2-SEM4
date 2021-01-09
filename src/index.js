import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './Table';

class App_two extends Component {
  render(){
    return (
      <div className="had">
        <h1>This is sample program,hello</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
