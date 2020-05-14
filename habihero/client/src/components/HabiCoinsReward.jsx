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
                        <h1> +50 </h1>
                        {/* habi coins image */}
                    </div>
                    <div className="modal-footer">
                        <h1> Habi Coins! </h1>
                    </div>
                    {/* close button */}
                </div>
            </div>
        );
    }
}

export default HabiCoinsReward;