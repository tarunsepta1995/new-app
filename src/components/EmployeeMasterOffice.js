import React,{Component} from 'react';
import Form from 'react-jsonschema-form';
import EmployeeMaster from '../Schema/employee_master';
import parser from 'json-schema-parser';

const UiSchema = {}
export default class EmployeeMasterOffice extends Component{
    render() {
        return(
            <div>
                <Form schema={this.props.employeeMasterSchema} uiSchema={UiSchema} />
            </div>
        )
    }
}
