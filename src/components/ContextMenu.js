import React from "react";
import PropTypes from "prop-types";

class ContextMenu extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div
                className="context-menu"
                hidden={!this.props.isVisible}
            >
                <ul>
                    <li
                        onClick={this.props.doneClick}
                    >{this.props.isDone}</li>
                    <li
                        onClick={this.props.deleteClick}
                    >Delete</li>
                </ul>
            </div>
        );
    }
}

ContextMenu.propTypes = {
    isVisible   : PropTypes.bool.isRequired,
    isDone      : PropTypes.string.isRequired,
    doneClick   : PropTypes.func.isRequired,
    deleteClick : PropTypes.func.isRequired,
};

export default ContextMenu;
