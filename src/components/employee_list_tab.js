import React,{Component} from "react";
import axios from 'axios';
import {Table,Button,Input,InputGroup,InputGroupAddon} from "reactstrap";

var search = '';

export default class EMPL_LIST extends Component{
    constructor(props) {
        super(props);
        this.state={jsondata:[]}
        this.componentDidMount = this.componentDidMount.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(ev){

            search = ev.target.value


    }
    onClick(ev){
        axios.delete('http://localhost:3000/posts?q='+search
        )
            .then(response=> {
                this.setState({jsondata:response.data})
                console.log(response);
            })
            .catch(function (error) {
                alert("BAD REQUEST")
            });
        ev.preventDefault();
    }
    componentDidMount() {
        axios.get('http://localhost:3000/posts'
        )
            .then(response=> {
               this.setState({jsondata:response.data})
                console.log(response);
            })
            .catch(function (error) {
                alert("BAD REQUEST")
            });
    }
    render(){
        return(
            <div className="container bg-faded m-lg-3">
                <InputGroup className=' w-50 p-2 float-right'>
                        <Input  name = 'id' placeholder= 'Enter ID here to search' type = 'text' onChange={this.onChange} />
                    <InputGroupAddon addonType="append"><Button className='btn-outline-danger' onClick={this.onClick}><span>search</span></Button></InputGroupAddon>
                </InputGroup>
              <Table className='tab-content' hover>
                  <thead>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                  </thead>
                  <tbody>
                        {this.state.jsondata.map(emplid=>(
                            <tr >
                                <td key = {emplid}>{emplid.id}</td>
                                <td key = {emplid}>{emplid.title}</td>
                                <td key = {emplid}>{emplid.author}</td>
                            </tr>
                        ))}
                  </tbody>
              </Table>
            </div>
        )
    }
}