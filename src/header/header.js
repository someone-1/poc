import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Dropdown from './dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import { brand } from '../const'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './header.css';

// import './App.css';
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false }
	}
	issue = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',]
	handleOpen = () => {
		this.setState({ isOpen: true })
	}
	handleClose = () => {
		this.setState({ isOpen: false })
	}
	// handleRoute = ()=>{
	// 	window.location = 'http://localhost:3000/admin'
	// }
	render() {
		return (
			<div>
				
				<Row className="sub-header">
					<div className="center-block	 logo"></div>
					<Button><Link to="/app">anf editor</Link></Button>
					<Button><Link to="/issue-tracker">issue status</Link></Button>
					<Button><Link to="/admin">admin</Link></Button>
					<Button><Link to="report">report</Link></Button>
				</Row>
			</div>
		);
	}
}

// export default Header;
