import React from 'react';
import './App.css';

    class ToDo extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleAddClick = this.handleAddClick.bind(this);
            this.handleDeleteClick = this.handleDeleteClick.bind(this);
            this.handleKey = this.handleKey.bind(this);
            this.state = {
                tasks: [],
                input_value: "",
            }
        }

        handleAddClick(){
            if(this.state.input_value !== ""){
                const task = <Task
                    key={Date.now()}
                    id={Date.now()}
                    value={this.state.input_value}
                    onClick={this.handleDeleteClick}
                />
                this.state.tasks.push(task)
                this.setState({input_value: ""})
            }
        }

        handleKey(e){
            if (e.key === "Enter"){
                // console.log(this.handleAddClick())
                this.handleAddClick()
            }
        }

        handleDeleteClick(e){
            const index = this.state.tasks.findIndex(task => e.target.value == task.props.id)
            const copy = this.state.tasks
            copy.splice(index, 1)
            this.setState({tasks: copy})
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
                        onKeyPress={this.handleKey}
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
                        onKeyPress={this.props.onKeyPress}
                    />
                    <button
                        type="submit"
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
                <li className="list-item">
                    <input type="checkbox"
                           className="task-check"
                           onChange={() => this.setState({isDone: !this.state.isDone})}>
                    </input>
                    <p
                        className={this.state.isDone ? "task-name done" : "task-name"}
                        title={this.state.value}
                    >
                        {this.state.value}

                    </p>
                    <button
                        className="task-delete"
                        onClick={this.props.onClick}
                        value={this.props.id}
                    >✕</button>
                </li>
            );
        }
    }

    // context menu instead of checker and "x" button
    // class ContextMenu extends React.Component{
    //
    // }


export default ToDo;
