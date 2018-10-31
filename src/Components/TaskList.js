import React, { Component } from 'react';
import Tasks from './Tasks'

class List extends Component {

    render() {
        return (
            <div className="list">
                <ul className="list-group">
                    {this.props.todos.map((todo, index) => {
                        return (
                            <li className="list-group-item">
                                <Tasks
                                    key={index}
                                    index={index}
                                    handleClick={this.props.handleClick}
                                    handleDelete={this.props.handleDelete}
                                    todo={todo}
                                />
                            </li>
                        )
                    })}

                    <button className="pull-right btn btn-default"
                        onClick={this.props.handleDelete}>Clear Complete
                    </button>
                    

                </ul>
            </div>


        );
    }

}

export default List;
