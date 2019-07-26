import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Table from 'react-bootstrap/Table'
import BugReport from '../plugin/bug-reporting'

import { articles } from '../const'

const data = [
  {
    'brand': 'EatingWell',
    'issue': 'some issue',
    'status': 'dev',
    'dev': 'unassigned',
    'qa': 'unassigned'
  }, {
    'brand': 'fortune',
    'issue': 'another issue',
    'status': 'qa',
    'dev': 'unassigned',
    'qa': 'unassigned'
  },{
    'brand': 'fortune',
    'issue': 'another issue',
    'status': 'done',
    'dev': 'unassigned',
    'qa': 'unassigned'
  }
]
export default class bugTracker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      clickedIndex: null,
      data: data,
    }
  }
  handleModalUpdate = (e) => {
    console.log(e);
    const data = this.state.data;
    data[this.state.clickedIndex].status = e;
    this.setState({
      data
    })
	}
  handleClick = (i) => {
    // console.log(i, "asd")
    this.setState({
      modalState: !this.state.modalState,
      clickedIndex: i
    })
  }
  render() {
    const tableContent = data.map((d, i) => {
      return (
        <tr onClick={() => this.handleClick(i)} key={i + d.issue}>
          <td>{i}</td>
          <td>{d.brand}</td>
          <td>{d.issue}</td>
          <td>{d.status}</td>
          <td>{d.dev}</td>
          <td>{d.qa}</td>
        </tr>)
    })
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>brand</th>
              <th>issue</th>
              <th>status</th>
              <th>dev</th>
              <th>qa</th>
            </tr>
          </thead>
          <tbody>
            {tableContent}
          </tbody>
        </Table>
        <BugReport isOpen={this.state.modalState}
          close={this.handleClick}
          populateData={data[this.state.clickedIndex]}
          onChange={this.handleModalUpdate}
          ></BugReport>
      </div>
    );
  }
}