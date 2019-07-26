import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../utils/dropdown'
import { Link, Switch, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Snippet from './snippet'
import KitchenSink from './kitchen-sink';
import Resource from './resource'
import Button from 'react-bootstrap/Button'
import './admin.css';
import { brand } from '../const'
const issue = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',]

export default class IssueDetail extends React.Component {

	constructor(props) {
		super(props);
		this.textInput = React.createRef();
	}

	render() {
		return (
		<div>
			<Row className="sub-header">
				<div className="center-block logo"></div>
				<Button><Link to="/admin-snippet">snippet</Link></Button>
				<Button><Link to="/admin-kitchen-sink">kitchen sink styles</Link></Button>
				<Button><Link to="/admin-issue-details">issue details</Link></Button>
				<Button><Link to="/admin-add-resource">resource</Link></Button>
			</Row>
		</div>
		);
	}
}
