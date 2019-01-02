import React,{Component} from 'react';
import EmployeeMaster from '../Schema/employee_master';
import Form from 'react-jsonschema-form';

const UiSchema = { }


export default class EmployeePersonalDetails extends Component{
    constructor(){
           super()
           this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(formData){
            console.log(formData.formData)
    }
    render() {
        return(
            <div>
                <Form onSubmit = {this.onSubmit} schema = {this.props.employeeMasterSchema} uiSchema={UiSchema}/>
            </div>
        )
    }
}