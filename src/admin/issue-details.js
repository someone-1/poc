import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../utils/dropdown'
import TextBox from '../utils/text-box'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './admin.css';
import { brand } from '../const'
import Modal from '../utils/modal'
import DatePicker from 'react-date-picker';

const issue = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',]

export default class IssueDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        }
    }
    handleChange() {
        /* 3. Get Ref Value here (or anywhere in the code!) */
        const value = this.textInput.current.value;
        // console.log(value)
    }
    openModal = ()=>{
        this.setState({
            showModal: true
        })
    }
    render() {
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

                    <Button onClick={this.openModal} className="modal-button">prep issue</Button>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Issue</th>
                            <th>Git Repo</th>
                            <th>Publish Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {tableContent} */}
                    </tbody>
                </Table>
                <Modal
                    show={this.state.showModal}
                    title="prep issue"
                >
                    <IssueModal />
                </Modal>
            </div>
        );
    }
}

function IssueModal() {
    
    const handleChange = ()=>{

    }
    const onChange = ()=>{

    }
    return (
        <div>
            <DropDown items={brand} name="Brand"></DropDown>
            <DropDown items={brand} name="issue"></DropDown>

            <TextBox onChange={handleChange} name="git repo url" />
            {/* <DatePicker
          onChange={onChange}
        //   value={this.state.date}
        /> */}
        <label>publish date</label>
        <input type="date"/>
        </div>
    )
}
