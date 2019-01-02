import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import React,{Component} from 'react';
import EmployeePersonalDetails from '../components/EmployeeMasterPersonal';
import EmployeeMasterBank from '../components/EmployeeMasterBank';
import EmployeeMasterIdentification from '../components/EmployeeMasterIdentification';
import EmployeeMasterOffice from '../components/EmployeeMasterOffice';

export default class EmployeeMasterRoute extends Component{


    render(){
        return(

                            <Router>
                                <div>

                                <div className='tab-pane'>
                                    <Link to = {'/EmployeePersonalDetails'} className = 'border p-2 m-2'>Personal</Link>
                                    <Link to = {'/EmployeeMasterBank'} className = 'border p-2 m-2'>Bank</Link>
                                    <Link to = {'/EmployeeMasterIdentification'} className = 'border p-2 m-2'>Identification</Link>
                                    <Link to = {'/EmployeeMasterOffice'} className = 'border p-2 m-2'>Office</Link>
                                </div>
                                <div className='container m-5'>
                                    <Route path = '/EmployeePersonalDetails' component = {EmployeePersonalDetails}/>
                                    <Route path = '/EmployeeMasterBank' component = {EmployeeMasterBank} />
                                    <Route path = '/EmployeeMasterIdentification' component = {EmployeeMasterIdentification} />
                                    <Route path = '/EmployeeMasterOffice' component = {EmployeeMasterOffice} />
                                </div>
                                    </div>
                            </Router>

        )
    }
}
