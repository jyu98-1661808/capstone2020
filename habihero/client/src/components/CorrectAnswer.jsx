import React, { Component } from 'react';
import '../styles/CorrectAnswer.css';

class CorrectAnswer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="correct-modal">
                <div className="correct-modal-content">
                    <div className="correct-modal-header">
                        <p> Hero Power Unlocked! </p>
                    </div>
                    <div className="correct-modal-body">
                        <img className='water-icon' src='./img/game/water_icon.png' alt='unlocked water icon' />
                    </div>
                    <div className="correct-modal-footer">
                        <p> CORRECT! </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CorrectAnswer;