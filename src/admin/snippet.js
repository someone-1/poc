import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import JSONPretty from 'react-json-pretty';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './admin.css';
import { brand } from '../const'
import Modal from '../utils/modal'
import ModalSnippet from './snippet-modal'
import {snippetsTable} from '../utils/snippets'
export default class Snippet extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();

        this.state = {
            variableAttribute: "",
            showModal: false,
        }
    }
    handleChange(val) {
        /* 3. Get Ref Value here (or anywhere in the code!) */
        // const value = this.textInput.current.value;
        console.log(val, "asdf")
    }
    handleChange1(val) {
        /* 3. Get Ref Value here (or anywhere in the code!) */
        // const value = this.textInput.current.value;
        console.log(val, "r123")
    }
    getattributeName = (val) => {
        console.log(val, "val")
    }
    openModal = () => {
        this.setState({
            showModal: true
        })
    }
    createTextBox = () => {

    }
    render() {
        const tableContent = snippetsTable.map((d,i )=>{
            return (
                <tr key={i + d.role}>
                  <td>{d.role}</td>
                  <td>{d.layout || '-'}</td>
                  <td>{d.brand}</td>
                  <td>{d.dyn}</td>
                  <td> <JSONPretty data={d.snippet}></JSONPretty></td>
                </tr>
            )
        });
        return (
            <div>
                <div>
                    <Row className="sub-header">
                        <div className="center-block logo"></div>
                        <Button><Link to="/admin-snippet">snippet</Link></Button>
                        <Button><Link to="/admin-kitchen-sink">kitchen sink styles</Link></Button>
                        <Button><Link to="/admin-issue-details">issue details</Link></Button>
                        <Button><Link to="/admin-add-resource">Add Staffs</Link></Button>
                    </Row>
                </div>
<Row>
    <div className="center-block logo"></div>

                <Button onClick={this.openModal} className="modal-button">add snippet</Button>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Layout</th>
                            <th>Brand</th>
                            <th>Dynamic attributes</th>
                            <th>Snippet</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </Table>
                {/* <TextBox onChange={this.handleChange} name="Details" /> */}

                <Modal
                    show={this.state.showModal}
                    title="add snippet"
                >
                    <ModalSnippet />
                </Modal>
            </div>
        );
    }
}
