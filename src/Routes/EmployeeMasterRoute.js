import {BrowserRouter as Router,Route,NavLink,Switch} from "react-router-dom";
import React,{Component} from 'react';
import EmployeePersonalDetails from '../components/EmployeeMasterPersonal';
import EmployeeMasterBank from '../components/EmployeeMasterBank';
import EmployeeMasterIdentification from '../components/EmployeeMasterIdentification';
import EmployeeMasterOffice from '../components/EmployeeMasterOffice';
import parser from 'json-schema-parser';
import '../CSS/EmployeeMaster.css'
const NotFound = () =>(
    <div>
        <h1>Page Not Found</h1>
    </div>
)
export default class EmployeeMasterRoute extends Component{
    render(){
        return(
              <Router>
                    <div>
                            <div class = 'parent'>
                            <NavLink to = {'/EmployeeMaster'}>Employee Master</NavLink>
                            <NavLink to = {'/Organisation'}>Company Master</NavLink>
                            </div>
                            <Switch>
                                    <div>
                                        <Route path = '/Organisation' component = {OrganisationMaster}/>
                                         <Route path = '/Organisation/Basic' component = {Basic} />
                                        <Route path = '/EmployeeMaster' component= {EmployeeMasterLinks}/>
                                        <Route path = '/EmployeeMaster/EmployeePersonalDetails' render = {()=><EmployeePersonalDetails employeeMasterSchema = {parser.parse(this.props.EmployeeSchema).properties.EmployeeMasterPersonal} />}/>
                                        <Route path = '/EmployeeMaster/EmployeeMasterBank' render = {()=><EmployeeMasterBank employeeMasterSchema = {parser.parse(this.props.EmployeeSchema).properties.EmployeeMasterBank} />} />
                                        <Route path = '/EmployeeMaster/EmployeeMasterIdentification' render = {()=> <EmployeeMasterIdentification employeeMasterSchema = {parser.parse(this.props.EmployeeSchema).properties.EmployeeIdentificationDetails} />} />
                                        <Route path = '/EmployeeMaster/EmployeeMasterOffice' render = {()=><EmployeeMasterOffice employeeMasterSchema = {parser.parse(this.props.EmployeeSchema).properties.EmployeeOfficeDetails} />} />
                                    </div>
                            </Switch>
                    </div>
              </Router>
        )
    }
}
class EmployeeMasterLinks extends Component{
        render(){
                   return(
                          <div className = 'NavLink' >
                                                          <NavLink to = {'/EmployeeMaster/EmployeePersonalDetails'}>Personal</NavLink>
                                                          <NavLink to = {'/EmployeeMaster/EmployeeMasterOffice'}>Office</NavLink>
                                                          <NavLink to = {'/EmployeeMaster/EmployeeMasterBank'}>Bank</NavLink>
                                                          <NavLink to = {'/EmployeeMaster/EmployeeMasterIdentification'}>Identification</NavLink>
                           </div>
                   )
        }
}

class OrganisationMaster extends Component{
        render(){
                  return(
                        <div className = 'NavLink'>
                                <NavLink to = {'/Organisation/Basic'}>Basic</NavLink>
                        </div>

                  )
        }
}

class Basic extends Component{
        render(){
                   return(
                            <div>
                                    <p>Organisation basic information</p>
                            </div>
                   )
        }

}