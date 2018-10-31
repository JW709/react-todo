import React, { Component } from 'react';

class Tasks extends Component {
    render() {
        return (
            <div className="task">
                <span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
                    {this.props.todo.value}
                </span>
                &emsp;
                <input type="checkbox" checked={this.props.todo.done}
                    onClick={(e) => this.props.handleClick(this.props.index)} />

            </div>

        );
    }
}

export default Tasks;
