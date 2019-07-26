import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown'

import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import './dropdown.css';

export default class DropDown extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			selected: '---',
		}
	}

	componentDidMount() {
		if(this.props && this.props.selected){
			this.setState({
				selected:this.props.selected
			});
		}
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps.selected, "propsss")
	// 	if(nextProps && nextProps.selected){
	// 		this.setState({
	// 			selected:nextProps.selected
	// 		},()=>{
	// 			console.log(this.state.selected, "pro--psss")

	// 		})
	// 	}
	// }
	handleOpen = () => {
		if (this.props.disabled !== true) {
			this.setState({ isOpen: true })
		}
	}
	handleClose = () => {
		if (this.props.disabled !== true) {
			this.setState({ isOpen: false })
		}

	}
	handleSelect = (a) => {
		this.setState({
			selected: a
		});
		if (this.props.handleSelect) {
			this.props.handleSelect(a);
		}
	}
	render() {
		// console.log("props",this.props);

		const DropdownItems = this.props.items.map((item, i) => {
			return <Dropdown.Item eventKey={item} key={item + i}>{item}</Dropdown.Item>
		})

		return (
			<div className="custom-dropdown-class">
				<span>{this.props.name}</span>
				<DropdownButton
					onMouseEnter={this.handleOpen}
					onMouseLeave={this.handleClose}
					show={this.state.isOpen}
					onSelect={this.handleSelect}
					title={this.state.selected}
					drop='down'
					disabled={this.props.disable || false}
				>
					{/* <DropdownToggle>{this.props.name}</DropdownToggle> */}
					{/* <DropdownMenu> */}
					{DropdownItems}
					{/* </DropdownMenu> */}
				</DropdownButton>
			</div>
		);
	}
}

DropDown.propTypes = {
	items: PropTypes.array.isRequired
};
// export default Dropdown1;
