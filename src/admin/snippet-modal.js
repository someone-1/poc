import React from 'react';
import DropDown from '../utils/dropdown'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'

import TextBox from '../utils/text-box'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './admin.css';
import { brand } from '../const'

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
		return (
			<div>
				<div className="lenght">
				<TextBox onChange={this.getattributeName} name="Snippet" />
				{/* <TextBox onChange={this.getattributeName} name="brand" /> */}
				<DropDown items={brand} name="Brand" />
				<TextBox onChange={this.handleChange1} name="Role" />
					<TextBox onChange={this.handleChange} name="Layout" />
					<TextBox onChange={this.getattributeName} name="Dynamic Attribute" />

					{/* <Button
						variant="secondary"
						onClick={this.createTextBox}
					>add dynamic attribute</Button> */}

					{/* <Form.Group controlId="formBasicChecbox">
						<Form.Check type="checkbox" label="brand specific" />
					</Form.Group> */}

					
					{/* <Button variant="secondary">save</Button>
					<Button variant="secondary">cancel</Button> */}
				</div>

			</div>
		);
	}
}
