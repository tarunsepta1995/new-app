import React,{Component} from 'react';
import EmployeePersonalDetails from '../components/EmployeeMasterPersonal';
import EmployeeMasterBank from '../components/EmployeeMasterBank';
import EmployeeMasterIdentification from '../components/EmployeeMasterIdentification';
import EmployeeMasterOffice from '../components/EmployeeMasterOffice';
import { Nav, NavItem, NavLink, TabContent,TabPane} from "reactstrap";
import classnames from "classnames";

export default class EmployeeMaster extends Component{
    constructor(props){
        super(props)
        this.toggle =  this.toggle.bind(this)
        this.state = {
            activeTab : '1'
        }
    }
    toggle(tab){
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab})
        }
    }
 render() {
     return(
         <div className='container-fluid'>
             <Nav tabs>
                 <NavItem className= 'nav-item'>
                     <NavLink className={classnames({active : this.state.activeTab === '1'})}  onClick={()=>this.toggle('1')}> Personal </NavLink>
                 </NavItem>
                 <NavItem className= 'nav-item'>
                     <NavLink className={classnames({active : this.state.activeTab === '2'})}  onClick={()=>this.toggle('2')}> Office </NavLink>
                 </NavItem>
                 <NavItem className= 'nav-item'>
                     <NavLink className={classnames({active : this.state.activeTab === '3'})}  onClick={()=>this.toggle('3')}> Bank </NavLink>
                 </NavItem>
                 <NavItem className= 'nav-item'>
                     <NavLink className={classnames({active : this.state.activeTab === '4'})}  onClick={()=>this.toggle('4')}> Identification </NavLink>
                 </NavItem>
             </Nav>
             <TabContent activeTab={this.state.activeTab}>
                 <TabPane className="tab-pane" tabId="1">
                     <EmployeePersonalDetails />
                 </TabPane>
                 <TabPane className="tab-pane" tabId="2">
                     <EmployeeMasterOffice />
                 </TabPane>
                 <TabPane className="tab-pane" tabId="3">
                     <EmployeeMasterBank />
                 </TabPane>
                 <TabPane className="tab-pane" tabId="4">
                     <EmployeeMasterIdentification />
                 </TabPane>
             </TabContent>
         </div>
     );
 }
}