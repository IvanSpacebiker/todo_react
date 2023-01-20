import React from "react";
import PropTypes from "prop-types";
// Components
import ContextMenu from "./ContextMenu";

class Task extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleContext = this.handleContext.bind(this);
        this.state = {
            isDone      : false,
            value       : this.props.value,
            contextMenu : false,
        };
    }

    handleContext(e)
    {
        e.preventDefault();
        let x = `${ e.clientX }px`;
        let y = `${ e.clientY }px`;

        window.document.addEventListener("click", () => {});
        document.documentElement.style.setProperty("--mouse-x", x);
        document.documentElement.style.setProperty("--mouse-y", y);
        this.setState({ contextMenu: !this.state.contextMenu });
    }

    render()
    {
        return (
            <li
                className="list-item"
                onContextMenu={this.handleContext}
            >
                <p
                    className={this.state.isDone ? "task-name done" : "task-name"}
                    title={this.state.value}
                >
                    {this.state.value}
                </p>

                <ContextMenu
                    isVisible = {this.state.contextMenu}
                    isDone = {this.state.isDone ? "Undone" : "Done"}
                    doneClick = {() => this.setState({
                        isDone      : !this.state.isDone,
                        contextMenu : false,
                    })}
                    deleteClick = {this.props.onClick}
                />
            </li>
        );
    }
}

Task.propTypes = {
    id    : PropTypes.number.isRequired,
    value : PropTypes.string.isRequired,

    // Handlers
    onClick : PropTypes.func.isRequired,
};

export default Task;
