import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const AddButtonLabel = "+";

        return (
            <div className="add-field">
                <input
                    className="add-input"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyDown={this.props.onKeyDown}
                />
                <button
                    type="submit"
                    onClick={() => this.props.onClick()}
                    className="add-button"
                >
                    {AddButtonLabel}
                </button>
            </div>
        );
    }
}

Input.propTypes = {
    value     : PropTypes.string.isRequired,
    onChange  : PropTypes.func.isRequired,
    onKeyDown : PropTypes.func.isRequired,
    onClick   : PropTypes.func.isRequired,
};

export default Input;
