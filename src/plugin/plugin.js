import React from 'react';
import './plugin.css';
import Button from 'react-bootstrap/Button'
import BugReport from './bug-reporting'
import Row from 'react-bootstrap/Row';
import './plugin.css'
export default class Plugin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modalState: false,
		}
	}

	handleBugModal = () => {
		this.setState({
			modalState: !this.state.modalState
		})
	}

	render() {
		return (
			<div>
				<div className="plugin">plugin goes here</div>
				<div className="bottom-button">
					<Row>
						<div className="center-block	 logo"></div>

						<Button>convert</Button>
						<Button>save</Button>
						<Button>simulator</Button>
						<Button onClick={this.handleBugModal}> create a bug</Button>
					</Row>
				</div>
				<BugReport isOpen={this.state.modalState} close={this.handleBugModal}></BugReport>
			</div>
		);
	}
}