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
        const AddItemButtonLabel = "✕";

        return (
            <li
                className="list-item"
                onContextMenu={this.handleContext}
            >
                <input type="checkbox"
                    className="task-check"
                    onChange={() => this.setState({ isDone: !this.state.isDone })}>
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
                >
                    {AddItemButtonLabel}
                </button>

                <ContextMenu isVisible={this.state.contextMenu}/>
            </li>
        );
    }
}

Task.propTypes = {
    id    : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,

    // Handlers
    onClick : PropTypes.func.isRequired,
};

export default Task;
