import React,{Component} from 'react'
import schema from '../Schema/basic_general'
import basic_ui_schema from '../Schema/basic_general_ui_schema'
import Form from "react-jsonschema-form";
import empl_deta from '../Schema/Empl_Deta';
import {Button,Row,Col,Modal,ModalBody,Table} from "reactstrap";
import axios from 'axios'
import '../CSS/company_master.css'
import comp_schema from '../Schema/company_basic_schema'
import comp_uischema from '../Schema/company_basic_uischema'

var jsonData = [];

export default class Employee_deta extends Component{
    constructor(props) {
        super(props);
        this.state= {
            formData : [],
            modal : false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.preview = this.preview.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    handleSubmit(formData){
        axios.post(
                'http://localhost:3000/posts',this.state.formData)
                .then(res => {alert('Organisation Created')})
                .catch(res =>{alert('BAD REQUEST')})
        this.toggle()

    }
    toggle(){
        this.setState({modal:!this.state.modal})
    }
    preview(formData){
        alert('preview called')
        this.setState({formData:formData.formData})
        this.toggle()
    }
    render() {
        return(
                        <div className="container">
                            <Form onSubmit={this.preview} liveValidate= {false} schema={schema} uiSchema={basic_ui_schema}>

                            </Form>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalBody>
                                    <p>{this.state.formData}</p>
                                    <Button className="btn-outline-danger" onClick={this.handleSubmit}>Submit</Button>
                                </ModalBody>
                            </Modal>
                        </div>
        )
    }
}