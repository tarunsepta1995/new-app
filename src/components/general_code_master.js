import React,{Component} from "react";
import basicInformation from '../Schema/basic_general'
import Form from 'react-jsonschema-form'
import UiSchema from '../Schema/basic_general_ui_schema'
import gen_ui_schema from '../Schema/Empl_Deta'
import '../CSS/company_master.css'
export default class GeneralCodes extends Component {
    render(){
        return(
            <div>
                <Form schema={basicInformation} uiSchema={gen_ui_schema}></Form>
            </div>
        )
    }

}