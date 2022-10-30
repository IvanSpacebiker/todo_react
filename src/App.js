import React from 'react';
import './App.css';

    class ToDo extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleAddClick = this.handleAddClick.bind(this);
            this.handleDeleteClick = this.handleDeleteClick.bind(this);
            this.state = {
                tasks: [],
                input_value: "",
            }
        }

        handleAddClick(){
            const task = <Task
                key={Date.now()}
                value={this.state.input_value}
                onClick={this.handleDeleteClick}
            />
            this.state.tasks.push(task)
            this.setState({input_value: ""})
        }

        handleDeleteClick(e){

        }

        handleChange(e){
            this.setState({input_value: e.target.value})
        }

        render() {
            return (
                <div className="todo">
                    <p className="title">TO-OD</p>
                    <Input
                        onClick={this.handleAddClick}
                        onChange={this.handleChange}
                        value={this.state.input_value}
                    />
                    <div className="list-field">
                        <ul>
                            {this.state.tasks}
                        </ul>
                    </div>
                </div>
            );
        }
    }

    class Input extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div className="add-field">
                    <input
                        className="add-input"
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                    <button
                        onClick={() => this.props.onClick()}
                        className="add-button"
                    >+</button>
                </div>
            );
        }
    }

    class Task extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isDone: false,
                value: this.props.value,
            }
        }

        render() {
            return (
                <li>
                    <input type="checkbox"
                           className="task-check"
                           onChange={() => this.setState({isDone: !this.state.isDone})}>
                    </input>
                    <p className={this.state.isDone ? "task-button done" : "task-button"}>{this.state.value}</p>
                    <button
                        onClick={this.props.onClick}
                    >✕</button>
                </li>
            );
        }
    }


export default ToDo;
