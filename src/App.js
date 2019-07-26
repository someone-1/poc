import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Dropdown from './utils/dropdown'
import Sidebar from './sidebar/sidebar'
import Plugin from './plugin/plugin'
import './App.css';

import {brand} from './const'
function App() {
  const issue = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec',]

  return (

    <div>
      <Container fluid={true}>
        <Row className="two-dropdowns">
        {/* <Navbar bg="light" expand="lg"> */}
        {/* <div className="center-block logo"></div> */}

            <Dropdown items={brand} name="brand"/>
            <Dropdown items={issue} name="issue"/>
        {/* </Navbar> */}
        </Row>
        <Row >
          <Col lg={3}><Sidebar/></Col>
          <Col><Plugin></Plugin></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
