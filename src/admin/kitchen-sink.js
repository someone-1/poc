import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../utils/dropdown'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import TextBox from '../utils/text-box'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './admin.css';
import { brand } from '../const'
import Table from 'react-bootstrap/Table'
import Modal from '../utils/modal'

const issue = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',]

export default class KitchenSink extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            showModal: false,
        }
    }
    handleChange() {
        /* 3. Get Ref Value here (or anywhere in the code!) */
        const value = this.textInput.current.value;
        // console.log(value)
    }
    openModal = () => {
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

                    <Button onClick={this.openModal} className="modal-button">add kitchen sink</Button>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Kitchen Sink</th>
                            <th>brand</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {tableContent} */}
                    </tbody>
                </Table>
                <Modal
                    show={this.state.showModal}
                    title="add kitchen sink"
                >
                    <KitchenModal />
                </Modal>
            </div>
        );
    }
}
class KitchenModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>

                {/* <TextBox onChange={this.handleChange1} name="Brand" /> */}
				<DropDown items={brand} name="Brand" />
                
                <TextBox onChange={this.handleChange1}
                 name="Kitchen Sink" 
                 className="kitchen-sink-input"/>
                <input type="file"/>
            </div>
        )
    }

}