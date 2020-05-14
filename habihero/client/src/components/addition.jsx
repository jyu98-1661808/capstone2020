import React, { Component } from 'react';
import '../styles/Addition.css';
import CorrectAnswer from './CorrectAnswer'
import WrongAnswer from './WrongAnswer'

class Addition extends Component {
    state = {
        answeredCorrectly: false,
        showResult: false
    };

    handleOptionClick(num) {
        if (num === this.props.correctOption) {
            this.setState({
                answeredCorrectly: true
            })
        }
        this.setState({
            showResult: true
        })
    };

    newQuestionReset = () => {
        this.setState({
            answeredCorrectly: false,
            showResult: false
        })
    }
    
    render() {

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={ this.props.handleClose } className="close"> Close </button>
                        <h3 id="wordQuestion"> What is {this.props.num1} + {this.props.num2} ? </h3>
                    </div>
                    <div id="numQuestion" className="modal-body"> 
                        <div id="numQuestionNumbers"> {this.props.num1} + {this.props.num2} = </div>
                    </div>
                    <div className="modal-footer">
                        <div className="options-container">
                            <p className="option" onClick={() => this.handleOptionClick(1)}> {this.props.choiceA} </p>
                            <p className="option" onClick={() => this.handleOptionClick(2)}> {this.props.choiceB} </p>
                        </div>
                        <div className="options-container">
                            <p className="option" onClick={() => this.handleOptionClick(3)}> {this.props.choiceC} </p>
                            <p className="option" onClick={() => this.handleOptionClick(4)}> {this.props.choiceD} </p>
                        </div>
                    </div>
                    {this.state.showResult &&
                        <div>
                            <div id="problemResults"> 
                                {this.state.answeredCorrectly ? <CorrectAnswer/> : <WrongAnswer generateNewProblem={this.props.generateNewProblem} newQuestionReset={this.newQuestionReset} />}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
 
export default Addition;