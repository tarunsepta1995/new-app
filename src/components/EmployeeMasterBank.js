import React,{Component} from 'react';
import Form from 'react-jsonschema-form';
import EmployeeMaster from '../Schema/employee_master';

const UiSchema = {
    "EmployeeMasterPersonal" :{
        "classNames" : 'tabDisplay'
    },
    "EmployeeMasterBank" : {

    },
    "EmployeeIdentificationDetails" :{
        "classNames" : 'tabDisplay'
    },
    "EmployeeOfficeDetails":{
        "classNames" : 'tabDisplay'
    }
}

export default class EmployeeMasterBank extends Component{
    render() {
        return(
            <div>
                <Form schema={EmployeeMaster} uiSchema={UiSchema}> </Form>
               </div>
        )
    }
}
