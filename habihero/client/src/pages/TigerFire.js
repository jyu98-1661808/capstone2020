import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/TigerFire.css';
import Addition from '../components/Addition';

class TigerFire extends Component {
    state = {
        show: false,
        num1: 0,
        num2: 0,
        choiceA: 0,
        choiceB: 0,
        choiceC: 0,
        choiceD: 0,
        correctOption: 0,
    };

    componentDidMount = () => {
        this.generateNewProblem();
    }

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

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
        this.generateNewProblem();
    }; 

    render() {
        const tigerProgress = 300;
        const tigerMax = 500;

        return (
            <div className='tiger-fire-environment' id='tiger-fire'>
                 <div className='header'>
                    <button id='missions'>
                        <img src='../img/game/missions.png' alt='missions' onClick={this.showModal} />
                    </button>
                    <div className='habicoins-container'>
                        <img src='../img/habi-coin-icon.png' alt='habi coin icon' />
                        <div className='habicoins-counter'>
                            <p id='habicoin-value'>14,000</p>
                            <p id='habicoin-text'>habi-coins</p>
                        </div>
                    </div>
                </div>
                <div className='dangers-container'>
                    <div className='fires-container'> 
                        <img id='fire-1' src='../img/game/fire.png' alt='fire' />
                        <img id='fire-2' src='../img/game/fire.png' alt='fire' />
                        <img id='fire-3' src='../img/game/fire.png' alt='fire' />
                        <img id='fire-4' src='../img/game/fire.png' alt='fire' />
                    </div>
                    <div className='smoke-container'> 
                        <img id='smoke-1' src='../img/game/smoke.png' alt='smoke' />
                        <img id='smoke-2' src='../img/game/smoke.png' alt='smoke' />
                    </div>
                </div>
                <div className='characters-container'>
                    <img id='alex-tiger' src='../img/character-icons/tiger.png' alt='alex tiger' />
                    <img id='hero' src='../img/myhero.png' alt='my habi hero' />
                </div>
                {this.state.show &&
                    <Addition 
                        handleClose={this.hideModal}
                        num1={this.state.num1}
                        num2={this.state.num2}
                        choiceA={this.state.choiceA}
                        choiceB={this.state.choiceB}
                        choiceC={this.state.choiceC}
                        choiceD={this.state.choiceD}
                        correctOption={this.state.correctOption}
                        generateNewProblem={this.generateNewProblem}
                    />
                }
                <div className='footer'>
                    <div className='progress-container'>
                        <ProgressBar now={tigerProgress} max={tigerMax} label={`${tigerProgress}/${tigerMax}`} />
                        <img src='../img/game/badge-1.png' alt='tiger badge' />
                    </div>
                    <img id='water-icon' src='./img/game/locked-water.png' alt='locked water icon' />
                </div>
            </div>
        );
    }
}

export default TigerFire;