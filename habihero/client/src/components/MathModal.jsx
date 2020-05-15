import React, { Component } from 'react';
import '../styles/MathModal.css';
import Addition from './Addition';

class MathModal extends Component {
    state = {
        // show: true,
        num1: 0,
        num2: 0,
        choiceA: 0,
        choiceB: 0,
        choiceC: 0,
        choiceD: 0,
        correctOption: 0,
    };

    generateNewProblem = () => {
        const numberOne = Math.floor((Math.random() * 10) + 1);
        const numberTwo = Math.floor((Math.random() * 10) + 1);
        const answer = numberOne + numberTwo;
        this.setState({
            num1: numberOne,
            num2: numberTwo,
        });

        const cOne = this.generateRandom(1, 20, answer);
        const cTwo = this.generateRandom(1, 20, answer);
        const cThree = this.generateRandom(1, 20, answer);
        const cFour = this.generateRandom(1, 20, answer);
        this.setState({
            choiceA: cOne,
            choiceB: cTwo,
            choiceC: cThree,
            choiceD: cFour
        });

        const tempNum = Math.floor((Math.random() * 4) + 1);
        const correctChoice = (tempNum === 1) ? 'choiceA' :
                                (tempNum === 2) ? 'choiceB' :
                                (tempNum === 3) ? 'choiceC' :
                                'choiceD';
        this.setState({
            [correctChoice]: answer,
            correctOption: tempNum
        });
    };

    generateRandom(min, max, answer) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === answer) ? this.generateRandom(min, max, answer) : num;
    };

    // showModal = () => {
    //     this.setState({ show: true });
    // };

    // hideModal = () => {
    //     this.setState({ show: false });
    // }; 

    render() { 
        this.generateNewProblem();
        return ( 
            <main> 
                {/* <button className="newProblemBtn"
                    onClick={() => {
                        this.showModal();
                        this.generateNewProblem();
                    }}> 
                    New Problem
                </button> */}
                {/* {this.state.show && */}
                <Addition 
                    handleClose={this.props.hideModal}
                    num1={this.state.num1}
                    num2={this.state.num2}
                    choiceA={this.state.choiceA}
                    choiceB={this.state.choiceB}
                    choiceC={this.state.choiceC}
                    choiceD={this.state.choiceD}
                    correctOption={this.state.correctOption}
                    generateNewProblem={this.generateNewProblem}
                />
                {/* }                */}
            </main> 
        );
    }
}
 
export default MathModal;