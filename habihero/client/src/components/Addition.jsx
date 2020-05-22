import React, { Component } from 'react';
import '../styles/Addition.css';

class Addition extends Component {

    handleOptionClick(num) {
        if (num === this.props.correctOption) {
            this.props.ansCorrect()
        } else {
            this.props.ansIncorrect()
        }

    };
    
    render() {
        var fire_group_1 = [];
        var fire_group_2 = [];

        for (let i = 0; i < this.props.num1; i++) {
            fire_group_1.push(<img src="../img/game/fire-guide-1.png" alt="fire guides for the first number" className="fire-guide-1" key={i} /> );
        }

        for (let i = 0; i < this.props.num2; i++) {
            fire_group_2.push(<img src="../img/game/fire-guide-2.png" alt="fire guides for the second number" className="fire-guide-2" key={i} /> );
        }

        return (
            <div id='addition' className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={ this.props.handleClose } className="close"><i className="fas fa-times"></i></button>
                        <h3 id="wordQuestion"> What is {this.props.num1} + {this.props.num2} ? </h3>
                    </div>
                    <div id="numQuestion" className="modal-body"> 
                        <div className='fire-visual-container'>
                            <div className='fire-group-1'>
                                { fire_group_1 }
                            </div>
                            <div className='fire-group-2'>
                                { fire_group_2 }
                            </div>
                        </div>
                        <div id="numQuestionNumbers"> 
                            <h1>{this.props.num1}</h1>
                            <h1>+</h1>
                            <h1>{this.props.num2}</h1>
                            <h1>=</h1>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className='options-container'> 
                            <button className="btn btn-success option" onClick={() => this.handleOptionClick(1)}> {this.props.choiceA} </button>
                            <button className="btn btn-success option" onClick={() => this.handleOptionClick(2)}> {this.props.choiceB} </button>
                            <button className="btn btn-success option" onClick={() => this.handleOptionClick(3)}> {this.props.choiceC} </button>
                            <button className="btn btn-success option" onClick={() => this.handleOptionClick(4)}> {this.props.choiceD} </button>
                            <button className="hint-btn" onClick={() => this.setState({showHint: true})} />
                        </div>
                        { this.state.showHint && <p className="hint-details">+ means add! To add, count all of them up Count the fires up!</p> }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Addition;
