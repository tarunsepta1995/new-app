import React,{Component} from 'react';
import Form from 'react-jsonschema-form';
import EmployeeMaster from '../Schema/employee_master';

const UiSchema = {}

export default class EmployeeMasterBank extends Component{
    render() {
        return(
            <div>
                <Form schema= {this.props.employeeMasterSchema} uiSchema={UiSchema} />
               </div>
        )
    }
}
