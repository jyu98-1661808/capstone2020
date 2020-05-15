import React, { Component } from 'react';

class HabiCoinsReward extends Component {
    state = {}
    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <p> Great Job! </p>
                    </div>
                    <div className="modal-body">
                        <h1> +50 Habi Coins! </h1>
                        {/* habi coins image */}
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => {
                            this.props.closeCoinsModal()
                            this.props.generateNewProblem()
                            this.props.showModal()
                        }}>
                        New Problem
                        </button>
                    </div>
                    {/* close button */}
                </div>
            </div>
        );
    }
}

export default HabiCoinsReward;