import React, {Component} from 'react';

class NavButtons extends Component {
    render() {
        return (
            <div className="button-container">
                <button className="nav-button" onClick={() => this.props.updateSub(this.props.before, null)}>
                    <h3>Last</h3>
                </button>
                <button className="nav-button" onClick={() => this.props.updateSub(null, this.props.after)}>
                    <h3>Next</h3>
                </button>
            </div>
        );
    }
}

export default NavButtons;