import React, { Component } from 'react';
import '../styles/WrongAnswer.css';

class WrongAnswer extends Component {
    state = {}
    render() {
        return (
            <div className="wrong-modal">
                <div className="wrong-modal-content">
                    <div className="wrong-modal-header">
                        <p> Try Again! </p>
                    </div>
                    <div className="wrong-modal-footer">
                        <button className="newProblem" onClick={() => {
                            this.props.generateNewProblem()
                            this.props.newQuestionReset()
                        }}>
                        New Problem
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WrongAnswer;