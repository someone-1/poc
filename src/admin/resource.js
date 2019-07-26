import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../utils/dropdown'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './admin.css';
import {brand} from '../const'
const issue = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec',]

export default class Resource extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    handleChange() {
        /* 3. Get Ref Value here (or anywhere in the code!) */
        const value = this.textInput.current.value;
        // console.log(value)
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
                <div className="lenght">
                <InputGroup size='sm'>
                    <InputGroup.Prepend>
                        <InputGroup.Text>dynamic attribute</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    ref={this.textInput} 
                    onChange={() => this.handleChange()}
                     aria-label="With textarea" />
                </InputGroup>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="qa"/>
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="dev"/>
                </Form.Group>
                <DropDown items={brand} name="brand"/>
                <DropDown items={issue} name="issue"/>
                <Button variant="secondary">save</Button>
                <Button variant="secondary">cancel</Button>
                </div>
            </div>
        );
    }
}
