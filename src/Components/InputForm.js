import React, { Component } from 'react';
//this component takes the input

class Input extends Component {
    render () {
        return (
            <div className = "list">  
            <form onSubmit={(e) => this.props.onSubmit(e)}>
                <input 
                    className="list-text"
                    onChange={(e) => this.props.handleChange(e)}
                    value = {this.props.inputValue} 
                    placeholder = "What needs to be done"/>
            </form>
            <br />
            </div>

        ) 
    }

}
    


export default Input;
