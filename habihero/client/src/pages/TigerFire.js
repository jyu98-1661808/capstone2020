import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { NavLink } from "react-router-dom"; 
import '../styles/TigerFire.css';
import Addition from '../components/Addition';
import HabiCoinsReward from '../components/HabiCoinsReward';

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
        dangerCounter: 1,
        danger1: true,
        danger2: true,
        danger3: true,
        danger4: true,
        danger5: true,
        danger6:true,
        waterUnlocked: false,
        displayReward: false,
        habicoins: 2500,
        tigerProgress: 200,
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

    closeModalCorrect = () => {
        this.setState({ 
            show: false,
            waterUnlocked: true,
        });
    }

    closeHabiCoinsModal = () => { 
        this.setState({
            displayReward: false,
        });
    };

    removeDanger = () => {
        let temp = 'danger' 
        // it will break when the counter is past 6 
        let danger = temp.concat(this.state.dangerCounter.toString())
        this.setState(prevState => { 
            return {
                [danger]: false,
                waterUnlocked: false,
                dangerCounter: prevState.dangerCounter + 1,
                displayReward: true,
                habicoins: prevState.habicoins + 50,
                tigerProgress: prevState.tigerProgress + 50,
            }
        });
    };

    render() {
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
                            <p id='habicoin-value'>{this.state.habicoins}</p>
                            <p id='habicoin-text'>habi-coins</p>
                        </div>
                    </div>
                </div>
                <div className='dangers-container'>
                    <div className='fires-container'> 
                        {this.state.danger1 && <img id='fire-1' src='../img/game/fire.png' alt='fire' />}
                        {this.state.danger2 && <img id='fire-2' src='../img/game/fire.png' alt='fire' />}
                        {this.state.danger4 && <img id='fire-3' src='../img/game/fire.png' alt='fire' />}
                        {this.state.danger6 && <img id='fire-4' src='../img/game/fire.png' alt='fire' />}
                    </div>
                    <div className='smoke-container'> 
                        {this.state.danger3 && <img id='smoke-1' src='../img/game/smoke.png' alt='smoke' />}
                        {this.state.danger5 && <img id='smoke-2' src='../img/game/smoke.png' alt='smoke' />}
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
                        closeModalCorrect={this.closeModalCorrect}
                    />
                }
                {this.state.displayReward && 
                    <HabiCoinsReward 
                        generateNewProblem={this.generateNewProblem} 
                        closeCoinsModal={this.closeHabiCoinsModal} 
                        showModal={this.showModal}
                    />
                }
                <div className='footer'>
                    <NavLink id='back' to='/timtiger'>
                        <img src='../img/game/back-icon.png' alt='back icon' /> 
                        back
                    </NavLink>
                    <div className='progress-container'>
                        <ProgressBar now={this.state.tigerProgress} max={tigerMax} label={`${this.state.tigerProgress}/${tigerMax}`} />
                        <img src='../img/game/badge-1.png' alt='tiger badge' />
                    </div>
                    {this.state.waterUnlocked ? 
                        <img id='water-icon' src='./img/game/unlocked-water.png' alt='unlocked water icon' onClick={this.removeDanger} /> : 
                        <img id='water-icon' src='./img/game/locked-water.png' alt='locked water icon' />
                    }
                </div>
            </div>
        );
    }
}

export default TigerFire;