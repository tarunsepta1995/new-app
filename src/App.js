
/*import logo from './logo.svg';*/
import './App.css';
import EmployeeMaster from './components/EmployeeMaster'
import {connect} from "react-redux"
//import './CSS/company_master.css'

function mapStateToProps(state){
return{
         EmployeeSchema : state.schema
       }
}

export default connect(mapStateToProps)(EmployeeMaster)


