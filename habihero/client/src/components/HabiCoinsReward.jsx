import React, { Component } from 'react';
import '../styles/HabiCoinsReward.css';

class HabiCoinsReward extends Component {
    state = {}
    render() {
        return (
            <div id="habiReward" className="modal">
                <div className="habi-coins-modal-content">
                    <div className="habi-coins-modal-header">
                        <button onClick={this.props.closeCoinsModal} className="close"><i class="fas fa-times"></i></button>
                        <p> GREAT JOB! </p>
                    </div>
                    <div className="habi-coins-modal-body">
                        <h1 className='coinAmt'> +50 </h1>
                        <img className='habicoin-icon' src='../img/habi-coin-icon.png' alt='habi coin icon' />
                    </div>
                    <p className="coins"> Habi Coins </p>
                    <div className="habi-coins-modal-footer">
                        <button className="newProblem" onClick={() => {
                            this.props.closeCoinsModal()
                            this.props.generateNewProblem()
                            this.props.showModal()
                        }}>
                        New Problem
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HabiCoinsReward;