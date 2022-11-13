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
                    <li>Done</li>
                    <li>Delete</li>
                </ul>
            </div>
        );
    }
}

ContextMenu.propTypes = { isVisible: PropTypes.bool.isRequired };

export default ContextMenu;
