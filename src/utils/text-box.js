import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './dropdown.css';

export default class TextBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false }
        this.textInput = React.createRef();
    }
    handleChange = ()=>{
        const value = this.textInput.current.value;
        if(this.props.onChange){
            this.props.onChange(value)
        }
    }
    render() {
        return (
            <div className="custom-input-class">
                <label>{this.props.name}</label>
                <input 
                ref={this.textInput} 
                onChange={this.handleChange}/>
                {/* <InputGroup size='sm'>
                    <InputGroup.Prepend>
                        <InputGroup.Text>{this.props.name}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    // as="textarea"
                    ref={this.textInput} 
                    onChange={this.handleChange}
                     aria-label="With textarea" />
                </InputGroup> */}
            </div>
        );
    }
}

TextBox.propTypes = {
    items: PropTypes.array.isRequired
};
// export default Dropdown1;
