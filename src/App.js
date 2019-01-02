import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import CompRouter from './Routes/route'
import EmployeeMasterNew from './components/EmployeeMasterNew'
import {connect} from "react-redux"

function mapStateToProps(state){
return{
         EmployeeSchema : state.schema
       }
}

export default connect(mapStateToProps)(EmployeeMasterNew)
