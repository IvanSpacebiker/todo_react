import React from "react";
import getUniqueId from "uniqid";
// Components
import Input from "./components/Input";
import Task from "./components/Task";
// Styles
import "./App.css";

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleKey = this.handleKey.bind(this);

        this.state = {
            tasks      : [],
            inputValue : "",
        };
    }


    handleAddClick()
    {
        if (this.state.inputValue !== "")
        {
            const key = getUniqueId();
            const task = <Task
                key={key}
                id={key}
                value={this.state.inputValue}
                onClick={this.handleDeleteClick}
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

    handleDeleteClick(e)
    {
        const index = this.state.tasks.findIndex((task) => e.target.value === task.props.id);
        const copy = this.state.tasks;
        copy.splice(index, 1);
        this.setState({ tasks: copy });
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
                    onKeyDown={this.handleKey}
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
