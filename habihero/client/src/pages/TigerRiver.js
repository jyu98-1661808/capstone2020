import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { NavLink, withRouter } from "react-router-dom"; 
import '../styles/TigerRiver.css';
import Addition from '../components/Addition';
import HabiCoinsReward from '../components/HabiCoinsReward';
import CorrectAnswer from '../components/CorrectAnswer';
import WrongAnswer from '../components/WrongAnswer';

class TigerRiver extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            waterUnlocked: false,
            displayReward: false,
            habicoins: 2500,
            tigerProgress: 200,
            water: false,
            answeredCorrectly: false,
            showResult: false,
        };
    }

    componentDidMount = () => {
        var habicoins = this.props.location.state.habicoins;
        var tigerProgress = this.props.location.state.tigerProgress;
        this.setState({
            habicoins: habicoins,
            tigerProgress: tigerProgress
        })
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
        document.getElementById("hero").classList.add('hide');
    };

    hideModal = () => {
        this.setState({ show: false });
        this.generateNewProblem();
        document.getElementById("hero").classList.remove('hide');
    }; 

    ansCorrect = () => { 
        this.setState({
            answeredCorrectly: true,
            showResult: true,
            show: false,
        })
    }

    ansIncorrect = () => {
        this.setState({
            answeredCorrectly: false,
            showResult: true,
            show: false,
        })
    }

    closeResultCorrect = () => {
        this.setState({ 
            showResult: false,
            waterUnlocked: true,
        });
        document.getElementById("hero").classList.remove('hide');
    }

    newQuestionReset = () => {
        this.setState({
            showResult: false,
            show: true,
        })
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
                // displayReward: true,
                habicoins: prevState.habicoins + 50,
                tigerProgress: prevState.tigerProgress + 50,
                water: true,
            }
        });
        this.showHabiReward();
    };

    showHabiReward = () => {
        setTimeout(() => {
            this.setState({ displayReward: true  });
        }, 500);
    }

    removeWater = () => {
        this.setState({
            water: false,
        })
    }

    render() {
        const tigerMax = 1000;

        return (
            <div className='tiger-river-environment' id='tiger-river'>
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
                    <div className='trash-container'> 
                        {this.state.danger1 && <img id='trash-3' src='../img/game/trash-3.png' alt='trash' />}
                        {this.state.danger2 && <img id='trash-2' src='../img/game/trash-2.png' alt='trash' />}
                        {this.state.danger3 && <img id='trash-1' src='../img/game/trash-1.png' alt='trash' />}
                    </div> 
                </div>
                <div className='characters-container'>
                    <img id='alex-tiger' src='../img/character-icons/tiger.png' alt='alex tiger' />
                    <img id='hero' className='show' src='../img/myhero.png' alt='my habi hero' />
                </div>
                {this.state.show &&
                <div className='problem-container'> 
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
                        ansCorrect={this.ansCorrect}
                        ansIncorrect={this.ansIncorrect}
                    />
                    {/* <div className='hero-hint-details'>
                        <p>
                            + means add! And, add means count all of them up!
                            Can you count all of the fires up?
                        </p>
                    </div> */}
                    <img id='hero-hint' src='../img/myhero.png' alt='my hero' />
                </div>
                }
                {this.state.showResult &&
                    <div id="problemResults"> 
                        {this.state.answeredCorrectly ? 
                            <CorrectAnswer closeResultCorrect={this.closeResultCorrect}/> : 
                            <WrongAnswer generateNewProblem={this.generateNewProblem} newQuestionReset={this.newQuestionReset} />
                        }
                    </div>
                }
                {this.state.displayReward && 
                    <HabiCoinsReward 
                        generateNewProblem={this.generateNewProblem} 
                        closeCoinsModal={this.closeHabiCoinsModal} 
                        showModal={this.showModal}
                    />
                }
                <div className='footer'>
                    <NavLink id='back' to={{ pathname: '/timtiger',
                                            state: {
                                                habicoins: this.state.habicoins,
                                                tigerProgress: this.state.tigerProgress,
                                            }
                                            }}>
                        <img src='../img/game/back-icon.png' alt='back icon' /> 
                        back
                    </NavLink>
                    <div className='progress-container'>
                        <ProgressBar now={this.state.tigerProgress} max={tigerMax} label={`${this.state.tigerProgress}/${tigerMax}`} />
                        <img src='../img/game/badge-1.png' alt='tiger badge' />
                    </div>
                    {this.state.waterUnlocked ? 
                        <img id='water-icon' src='./img/game/unlocked-recycle.png' alt='unlocked recycle icon' onClick={this.removeDanger} /> : 
                        <img id='water-icon' src='./img/game/locked-recycle.png' alt='locked recycle icon' />
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(TigerRiver);