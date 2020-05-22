import React, { useState, Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from "react-router-dom"; 
import '../styles/Tiger.css';
import TigerFire from './TigerFire';

class TigerEnvironment extends Component {
    state = { 
        modalVariables: {
            num1: 0,
            num2: 0,
            choiceA: 0,
            choiceB: 0,
            choiceC: 0,
            choiceD: 0,
            correctOption: 0
        },
        showHint: false,
        showFire: false,
        tigerProgress: 50,
        habiCoins: 2500
    }

    setShowHint = () => {
        this.setState({ showHint: true })
    }

    showFire = () => {
        this.setState({ showFire: true });
    };

    generateNewProblem = () => {
        const numberOne = Math.floor((Math.random() * 10) + 1);
        const numberTwo = Math.floor((Math.random() * 10) + 1);
        const answer = numberOne + numberTwo;
        // this.setState({
        //     num1: numberOne,
        //     num2: numberTwo,
        // });

        this.setState(prevState => {
            let modalVariables = Object.assign({}, prevState.modalVariables); // creating copy of state variable modalVaribales
            modalVariables.num1 = numberOne; // update num1
            modalVariables.num2 = numberTwo; // update num2           
            return { modalVariables }; // return new modalVariables
        });

        const cOne = this.generateRandom(1, 20, answer);
        const cTwo = this.generateRandom(1, 20, answer);
        const cThree = this.generateRandom(1, 20, answer);
        const cFour = this.generateRandom(1, 20, answer);
        // this.setState({
        //     choiceA: cOne,
        //     choiceB: cTwo,
        //     choiceC: cThree,
        //     choiceD: cFour
        // });

        this.setState(prevState => {
            let modalVariables = Object.assign({}, prevState.modalVariables);
            modalVariables.choiceA = cOne;
            modalVariables.choiceB = cTwo;
            modalVariables.choiceC = cThree;
            modalVariables.choiceD = cFour;
            return { modalVariables };
        });

        const tempNum = Math.floor((Math.random() * 4) + 1);
        const correctChoice = (tempNum === 1) ? 'choiceA' :
            (tempNum === 2) ? 'choiceB' :
            (tempNum === 3) ? 'choiceC' :
            'choiceD';
        // this.setState({
        //     [correctChoice]: answer,
        //     correctOption: tempNum
        // });
        this.setState(prevState => {
            let modalVariables = Object.assign({}, prevState.modalVariables);
            modalVariables[correctChoice] = answer;
            modalVariables.correctOption = tempNum;         
            return { modalVariables };
        });
    };

    generateRandom(min, max, answer) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === answer) ? this.generateRandom(min, max, answer) : num;
    };

    render () { 

        const tigerProgress = 300;
        const tigerMax = 500;

        return (
            <div id='tiger' className='tiger-environment'>
                <div className='header'>
                    <button id='missions' onClick={this.setShowHint}>
                        <img src='../img/game/missions.png' alt='missions' />    
                    </button>
                    <div className='habicoins-container'>
                        <img src='../img/habi-coin-icon.png' alt='habi coin icon' />
                        <div className='habicoins-counter'>
                            <p id='habicoin-value'>2500</p>
                            <p id='habicoin-text'>habi-coins</p>
                        </div>
                    </div>
                </div>
                <div className='missions-container'>
                    <ScrollAnimation animateIn="slideInDown">
                        <button id='fire'>
                            <img src='../img/game/mission-icon.png' alt='mission icon' onClick={this.showFire}/>
                            {this.state.showFire && <TigerFire />}
                        </button>
                        <NavLink id='river' to='/timtiger-river'>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                        <NavLink id='tractor' to='/timtiger-tractor'>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                        <NavLink id='truck' to='/timtiger-truck'>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                        <NavLink id='factory' to='/timtiger-factory'>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                    </ScrollAnimation>
                </div>
                <div className='characters-container'>
                    <img id='alex-tiger' src='../img/character-icons/tiger.png' alt='alex tiger' />
                    <img id='hero' src='../img/myhero.png' alt='my habi hero' />
                    { this.state.showHint && <img id='hero-hint' src='../img/game/missions-detail.png' alt='click a mission icon' /> }
                </div>
                <div className='footer'>
                    <NavLink id='back' to='/habihero-game'>
                        <img src='../img/game/back-icon.png' alt='back icon' />
                        home
                    </NavLink>
                    <div className='progress-container'>
                        <ProgressBar now={this.state.tigerProgress} max={tigerMax} label={`${this.state.tigerProgress}/${tigerMax}`}/>
                        <img src='../img/game/badge-1.png' alt='tiger badge' />
                    </div>
                </div>
            </div>
        );
    }
}

export default TigerEnvironment