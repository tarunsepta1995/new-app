import React,{Component} from 'react';
import Form from 'react-jsonschema-form';
const UiSchema = {
                      "classNames" : "NewClass",
                           "ui:order" :["id","Title","EmployeeFirstName","EmployeeMiddleName","EmployeeLastName","EmployeeSurrName","EmployeeDOB"
                                           ,"EmployeeDOC","EmployeeDOJ","EmployeeNationalLanguage","EmployeeBloodGroup"
                           ]
}
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