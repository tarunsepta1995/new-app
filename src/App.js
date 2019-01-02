import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import CompRouter from './Routes/route'
import EmployeeMasterNew from './components/EmployeeMasterNew'
//#e77457
class App extends Component {
  render() {
    return (
        <div>
            <ul className="d-inline-flex">
                <li onClick={this.handleClick} className="m-3">
                    <a>Organisation Creation</a>
                </li>
                <li onClick={this.handleClick}  className="m-3">
                    <a>Employee Master</a>
                </li>
            </ul>
            <EmployeeMasterNew />
        </div>
    );
  }
}

export default App;
