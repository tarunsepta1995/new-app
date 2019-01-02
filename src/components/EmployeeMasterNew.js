import React,{Component} from 'react';
import applyNavs from 'react-jsonschema-form-pagination';
import Form from 'react-jsonschema-form';
import EmployeeMasterSchema from '../Schema/employee_master';
import API from 'axios';

let NewForm = applyNavs(Form);
const UIschema = {
    navConf: {
        order: [ "Personal", "Office", "Bank" ,"Identification"]
    },
    "EmployeeMasterPersonal" : {
        "nav" : "Personal",
        "classNames" : "mt-5 ml-2  border p-3",
        "ui:order" :["id","Title","EmployeeFirstName","EmployeeMiddleName","EmployeeLastName","EmployeeSurrName","EmployeeDOB"
                        ,"EmployeeDOC","EmployeeDOJ","EmployeeNationalLanguage","EmployeeBloodGroup"
        ],
        id :{
            "classNames" : "formfield float-left col-12"
        },
        Title :{
            "classNames" : "formfield float-left col-2"
        },
        EmployeeFirstName: {
            "classNames" :"formfield float-left col-md-3"
        },
        EmployeeMiddleName:{  "classNames" :"formfield float-left col-md-3" },
        EmployeeLastName:{ "classNames" :"formfield float-left col-md-2"},
        EmployeeSurrName :{ "classNames" :"formfield float-left col-md-2"},
        EmployeeDOB :{"classNames" :"formfield float-left col-4"},
        EmployeeDOC:{"classNames" :"formfield float-left col-4"},
        EmployeeDOJ :{"classNames" :"formfield float-left col-4"},
        EmployeeNationalLanguage :{"classNames" :"formfield float-left col-5"},
        EmployeeBloodGroup :{"classNames" :"formfield float-left col-5"}
    },
    "EmployeeOfficeDetails" :{
        "nav" : "Office",
        "classNames" : "mt-5 ml-2  border p-3",
        EmployeeStatus :{
            "classNames" :"formfield float-left col-md-4"
        },
        EmployeeEmailID :{
            "classNames" :"formfield float-left col-md-4"
        },
        EmployeeDepartment :{
            "classNames" :"formfield float-left col-md-4"
        },
        EmployeeDesigantion :{
            "classNames" :"formfield float-left col-md-4"
        },
        EmployeeGrade :{
            "classNames" :"formfield float-left col-md-4"
        },
        EmployeeLocation:{
            "classNames" :"formfield float-left col-md-4"
        },
        EmploymentType :{
            "classNames" :"formfield float-left col-md-4"
        },
        Currency :{
            "classNames" :"formfield float-left col-md-4"
        },
        SupervisiorNumber:{
            "classNames" :"formfield float-left col-md-4"
        }
    }
    ,
    "EmployeeMasterBank" :{
        "nav" : "Bank",
        "classNames" : "border p-3 w-50 bank"
    },
    "EmployeeIdentificationDetails" :{
        "nav" : "Identification",
        "classNames" : "iden border p-3 w-75"
    },
}
export default class EmployeeMasterNew extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {submitStatus :''}
    }
    onSubmit(formData){
        API.post("http://localhost:3001/EmployeeDetails",formData.formData)
            .then(res=>{this.setState({submitStatus : 'submit'})})
            .catch(res=>{this.setState({submitStatus : 'fail'})})
    }
    onReset(){
        this.setState({submitStatus:'cancel'})
        alert(this.state.submitStatus)
    }
    render() {
        if ((this.state.submitStatus === '') || (this.state.submitStatus === 'cancel')) {
            return (
                <div>
                    <NewForm onSubmit={this.onSubmit} schema={EmployeeMasterSchema} uiSchema={UIschema}>
                        <button type='submit' className='btn btn-outline-primary submitButton'>Submit</button>
                        <button type='reset' className='btn btn-outline-danger cancelButton' onClick={this.onReset}>Cancel</button>
                    </NewForm>
                </div>
            )
        }
        else if(this.state.submitStatus === 'submit'){
            return(
                <div>
                    <h1>Success</h1>
                </div>
            )
        }
        else {
            return(
            <div>
                <h1>Fail</h1>
            </div>
            )
        }
    }

}