import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink, withRouter } from "react-router-dom"; 
import '../styles/Tiger.css';

class TigerEnvironment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tigerProgress: 0,
            tigerMax: 1000,
            habicoins: 0,
            showHint: false,
        }
    }

    componentDidMount = () => {
        var habicoins = this.props.location.state.habicoins
        var tigerProgress = this.props.location.state.tigerProgress
        this.setState({
            habicoins: habicoins,
            tigerProgress: tigerProgress
        })
    }

    setShowHint = () => {
        this.setState({ showHint: true });
    }
    
    render() {
        return (
            <div id='tiger' className='tiger-environment'>
                <div className='header'>
                    <button id='missions' onClick={ this.setShowHint }>
                        <img src='../img/game/missions.png' alt='missions' />    
                    </button>
                    <div className='habicoins-container'>
                        <img src='../img/habi-coin-icon.png' alt='habi coin icon' />
                        <div className='habicoins-counter'>
                            <p id='habicoin-value'>{ this.state.habicoins }</p>
                            <p id='habicoin-text'>habi-coins</p>
                        </div>
                    </div>
                </div>
                <div className='missions-container'>
                    <ScrollAnimation animateIn="slideInDown">
                        <NavLink id='fire' to={{ pathname: '/timtiger-fire',
                                            state: {
                                                habicoins: this.state.habicoins,
                                                tigerProgress: this.state.tigerProgress,
                                            }
                                            }}>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                        <NavLink id='river' to={{ pathname: '/timtiger-river',
                                                    state: {
                                                        habicoins: this.state.habicoins,
                                                        tigerProgress: this.state.tigerProgress
                                                    }
                                                }}>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                        <NavLink id='tractor' to={{ pathname: '/timtiger-tractor',
                                                    state: {
                                                        habicoins: this.state.habicoins,
                                                        tigerProgress: this.state.tigerProgress
                                                    }
                                                }}>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                        <NavLink id='truck' to={{ pathname: '/timtiger-truck',
                                             state: {
                                                habicoins: this.state.habicoins,
                                                tigerProgress: this.state.tigerProgress
                                             }
                                            }}>
                            <img src='../img/game/mission-icon.png' alt='mission icon' />
                        </NavLink>
                        <NavLink id='factory' to={{ pathname: '/timtiger-factory',
                                             state: {
                                                habicoins: this.state.habicoins,
                                                tigerProgress: this.state.tigerProgress
                                             }
                                            }}>
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
                    <NavLink id='back' to={{ pathname: '/habihero-game',
                                             state: {
                                                habicoins: this.state.habicoins,
                                                tigerProgress: this.state.tigerProgress
                                             }
                                        }}>
                        <img src='../img/game/back-icon.png' alt='back icon' />
                        home
                    </NavLink>
                    <div className='progress-container'>
                        <ProgressBar now={this.state.tigerProgress} max={this.state.tigerMax} label={`${this.state.tigerProgress}/${this.state.tigerMax}`}/>
                        <img src='../img/game/badge-1.png' alt='tiger badge' />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TigerEnvironment);