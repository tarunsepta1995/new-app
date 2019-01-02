import EmployeeMasterSchema  from '../Schema/employee_master'

export default function EmployeeMasterReducer(state,Action){
    if(state === undefined){
    return{
            schema : EmployeeMasterSchema
        }
    }
}