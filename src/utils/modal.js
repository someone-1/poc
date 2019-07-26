import Modal from 'react-bootstrap/Modal'
import React from 'react';

import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

export default class Modal1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    handleClose = () => {
        if (this.props.close) {
            this.props.close()
        }
        this.setState({
            show: false
        })
    }
    componentDidMount() {
        // console.log
        this.setState({
            show: this.props.show,
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show === true) {
            this.setState({
                show: nextProps.show,
            })
        } else if (nextProps.show == false) {
            this.setState({
                show: nextProps.show,
            })
        }
    }
    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}

                    // <Modal show={this.props.isOpen} onHide={this.handleClose}
                    dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}