import React, { Component } from 'react';
import '../App.css';
import Header from './Header.js'
import Input from './InputForm.js';
import List from './TaskList.js';
import RandomQuote from './RandomQuote'


class App extends Component {
    state = {
        inputValue: "",
        todos: [],
    }

    handleClick = (index) => {
        const todos = this.state.todos;
        todos[index].done = !todos[index].done;
        //Trying to use functional component below but couldn't get the toggle to work
        
        //const startTodos = todos.slice(0,[index - 1])
        //let updatedTodo = !todos[index];
        //let endTodos = todos.slice(index + 1);
        //let finalTodos = [...startTodos, updatedTodo, ...endTodos];
        this.setState({ todos });
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    handleDelete = () => {
        const todos = this.state.todos;
        let newState = todos.filter((todo) => {
            return todo.done !== true
        })
        this.setState({ todos: newState })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            value: this.state.inputValue,
            done: false
        };
        const currentTodos = this.state.todos;
        let updatedTodos = [...currentTodos, newItem]
        this.setState({ todos: updatedTodos, inputValue: "" })
    }

    render() {
        console.log(this.state.todos)
        return (
            <div className="App">
                <div className="wrapper">
                    <Header />

                    <Input
                        inputValue={this.state.inputValue}
                        handleChange={this.handleChange}
                        onSubmit={this.onSubmit}
                    />
                    <List
                        handleClick={this.handleClick}
                        handleDelete={this.handleDelete}
                        todos={this.state.todos}

                    />
                </div>
            </div>

        );
    }
}

export default App;
