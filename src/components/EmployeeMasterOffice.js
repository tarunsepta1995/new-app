import React,{Component} from 'react';
import Form from 'react-jsonschema-form'
import EmployeeMaster from '../Schema/employee_master'

const UiSchema = {
    "EmployeeMasterPersonal" :{
        "classNames" : 'tabDisplay'
    },
    "EmployeeMasterBank" : {
        "classNames" : 'tabDisplay'
    },
    "EmployeeIdentificationDetails" :{
        "classNames" : 'tabDisplay'
    },
    "EmployeeOfficeDetails":{

    }
}
export default class EmployeeMasterOffice extends Component{
    render() {
        return(
            <div>
                <Form schema={EmployeeMaster} uiSchema={UiSchema} />
            </div>
        )
    }
}
