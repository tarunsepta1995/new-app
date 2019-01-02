import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import React,{Component} from 'react'
import GeneralCodes from '../components/general_code_master'
import CalendarInfo from '../components/calendar_info'
import Empl from  '../components/employee_details'
import EmployeePersonalDetails from '../components/EmployeeMasterPersonal';

export default class CompRouter extends Component{
    render() {
        return(
            <Router>
                    <div className = 'container'>
                        <Link to = {'/Basic'} className = 'm-3 border rounded-pill p-1 pl-4 pr-4'>Basic</Link>
                        <Link to = {'/GeneralCodes'} className = 'm-3 border rounded-pill p-1 pl-4 pr-4' >Genral code</Link>
                        <Link to = {'/CalendarInfo'} className = 'm-3 border rounded-pill p-1 pl-4 pr-4'>Calender Info</Link>
                        <Route className = 'container' path = '/Basic' component = {Empl}/>
                        <Route path = '/CalendarInfo' component = {CalendarInfo}/>
                        <Route path = '/GeneralCodes' component = {GeneralCodes}/>
                    </div>
            </Router>
                    )
    }
}