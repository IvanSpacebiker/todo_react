import React from "react";
// Styles
import "./styles/App.css";
// Components
import Input from "./components/Input";
import Task from "./components/Task";

class ToDo extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.getHandlerDeleteClick = this.getHandlerDeleteClick.bind(this);
        this.handleKey = this.handleKey.bind(this);


        this.state = {
            tasks      : [],
            inputValue : "",
        };
    }

    handleAddClick()
    {
        const taskId = Date.now();
        if (this.state.inputValue !== "")
        {
            const task = <Task
                key={taskId}
                id={taskId}
                value={this.state.inputValue}
                onClick={this.getHandlerDeleteClick(taskId)}
            />;
            this.state.tasks.push(task);
            this.setState({ inputValue: "" });
        }
    }

    handleKey(e)
    {
        if (e.key === "Enter")
        {
            this.handleAddClick();
        }
    }

    getHandlerDeleteClick(taskId)
    {
        return () =>
        {
            const newState = this.state.tasks.filter((task) => taskId !== task.props.id);
            this.setState({ tasks: newState });
        };
    }

    handleChange(e)
    {
        this.setState({ inputValue: e.target.value });
    }

    render()
    {
        return (
            <div className="todo">
                <p className="title">TO-OD</p>
                <Input
                    onClick={this.handleAddClick}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKey}
                    value={this.state.inputValue}
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

export default ToDo;
