import EmployeeMasterRoute from './Routes/EmployeeMasterRoute';
import {connect} from "react-redux";

function mapStateToProps(state){
return{
         EmployeeSchema : state.schema
       }
}

export default connect(mapStateToProps)(EmployeeMasterRoute)


