import React,{Component} from 'react';
import EmployeeMaster from '../Schema/employee_master'
import Form from 'react-jsonschema-form'
import API from 'axios'

const UiSchema = {
    "EmployeeMasterPersonal" :{

    },
    "EmployeeMasterBank" : {
        "classNames" : 'tabDisplay'
    },
    "EmployeeIdentificationDetails" :{
        "classNames" : 'tabDisplay'
    },
    "EmployeeOfficeDetails":{
        "classNames" : 'tabDisplay'
    }
}

export default class EmployeePersonalDetails extends Component{
    render() {
        return(
            <div>
                <Form schema={EmployeeMaster} uiSchema={UiSchema}/>
            </div>
        )
    }
}