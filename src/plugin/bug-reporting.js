import React from 'react';
import './plugin.css';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types';
import DropDown from '../utils/dropdown'
import Row from 'react-bootstrap/Row'

import { qaNames, devNames, workflowState, categories } from '../const'
import './plugin.css'

const issueTrackerPath = '/issue-tracker'
const editorPath = '/app'
let workflowState_update = []
let flag = true;
let subCategories = [];

export default class BugReport extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			disable: true,
			pathname: this.props.location,
			status: "",
			subCategories: []
		}
	}
	// componentDidMount() {
	// 	if (this.props && this.props.populateData  ) {
	// 		const { status } = this.props.populateData;
	// 		// let workflowState_update = []
	// 		let push = false;
	// 		for (let i = 0; i < workflowState.length; i++) {
	// 			if (workflowState[i] === status) {
	// 				push = true;
	// 				workflowState_update.push(workflowState[i]);
	// 				continue;
	// 			}
	// 			if (push) {
	// 				workflowState_update.push(workflowState[i]);
	// 			}
	// 		}
	// 		console.log(workflowState_update, "update", this.props.populateData)
	// 		this.setState({
	// 			status: status
	// 		}, () => {
	// 			console.log(this.state.status, "statew")
	// 		})
	// 	}
	// 	if (this.props.isOpen !== this.state.show) {
	// 		// return false;
	// 		this.setState({
	// 			show: !this.state.show,
	// 		})
	// 	}
	// }

	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.populateData && flag) {
			const { status } = nextProps.populateData;
			// let workflowState_update = []
			let push = false;
			for (let i = 0; i < workflowState.length; i++) {
				if (workflowState[i] === status) {
					push = true;
					workflowState_update.push(workflowState[i]);
					continue;
				}
				if (push) {
					workflowState_update.push(workflowState[i]);
				}
			}
			console.log(workflowState_update, "update", nextProps.populateData)
			this.setState({
				status: status
			}, () => {
				console.log(this.state.status, "statew")
			})
			flag = false;
		}
		if (nextProps.isOpen !== this.state.show) {
			// return false;
			this.setState({
				show: !this.state.show,
			})
		}
	}
	handleIssueDropdown = (a) => {
		if (a !== 'issue') {
			this.setState({
				disable: true
			});
		} else {
			this.setState({
				disable: false
			});
		}
	}
	handleClose = () => {
		workflowState_update = []
		this.props.close()
		this.setState({
			show: false
		})
	}
	handleCategory = (s) => {
		console.log(s)
		this.setState({
			subCategories: categories[s]
		})
		// subCategories = categories[s]
		// console.log(subCategories)
	}
	render() {
		// console.log(this.props.populateData, window.location.pathname)
		return (
			<div>
				<Modal show={this.state.show} onHide={this.handleClose}
					// <Modal show={this.props.isOpen} onHide={this.handleClose}
					dialogClassName="modal-90w">
					<Modal.Body>
						<Row className="modal-dropdown">
							<DropDown items={['issue', 'enhancement']} name="issue"
								handleSelect={this.handleIssueDropdown}></DropDown>
							<DropDown items={Object.keys(categories)} name="categories" disabled={this.state.disable} handleSelect={this.handleCategory} ></DropDown>
							<DropDown items={this.state.subCategories} name="sub-category" disabled={this.state.disable}></DropDown>
							<DropDown items={devNames} name="dev"></DropDown>
							<DropDown items={qaNames} name="qa" selected={this.state.status} ></DropDown>
						</Row>
						{window.location.pathname === issueTrackerPath &&
							<DropDown
								items={workflowState_update}
								name="status"
								selected={this.state.status}
								handleSelect={this.props.onChange}
							></DropDown>
						}
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>details</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl as="textarea" aria-label="With textarea" />
						</InputGroup>
						{window.location.pathname === editorPath &&
							<input type="file" />
						}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary">Save changes</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

BugReport.propTypes = {
	isOpen: PropTypes.bool.isRequired
};