import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from "react-router-dom"; 
import '../styles/Tiger.css';
import "animate.css/animate.min.css";

function TigerEnvironment() {
    const tigerProgress = 300;
    const tigerMax = 500;

    const [showHint, setShowHint] = useState(false);

    return (
    <div id='tiger' className='tiger-environment'>
         <div className='header'>
            <button id='missions' onClick={() => setShowHint(true)}>
                <img src='../img/game/missions.png' alt='missions' />    
            </button>
            <div className='habicoins-container'>
                <img src='../img/habi-coin-icon.png' alt='habi coin icon' />
                <div className='habicoins-counter'>
                    <p id='habicoin-value'>14,000</p>
                    <p id='habicoin-text'>habi-coins</p>
                </div>
            </div>
        </div>
        <div className='missions-container'>
            <ScrollAnimation animateIn="slideInDown">
                <NavLink id='fire' to='/timtiger-fire'>
                    <img src='../img/game/mission-icon.png' alt='mission icon' />
                </NavLink>
                <NavLink id='river' to='/timtiger-river'>
                    <img src='../img/game/mission-icon.png' alt='mission icon' />
                </NavLink>
                <NavLink id='tractor' to='/timtiger-tractor'>
                    <img src='../img/game/mission-icon.png' alt='mission icon' />
                </NavLink>
                <NavLink id='truck' to='/timtiger-truck'>
                    <img src='../img/game/mission-icon.png' alt='mission icon' />
                </NavLink>
                <NavLink id='factory' to='/timtiger-factor'>
                    <img src='../img/game/mission-icon.png' alt='mission icon' />
                </NavLink>
            </ScrollAnimation>
        </div>
        <div className='characters-container'>
            <img id='alex-tiger' src='../img/character-icons/tiger.png' alt='alex tiger' />
            <img id='hero' src='../img/myhero.png' alt='my habi hero' />
            { showHint && <img id='hero-hint' src='../img/game/missions-detail.png' alt='click a mission icon' /> }
        </div>
        <div className='footer'>
            <NavLink id='back' to='/habihero-game'>
                <img src='../img/game/back-icon.png' alt='back icon' />
                home
            </NavLink>
            <div className='progress-container'>
                <ProgressBar now={tigerProgress} max={tigerMax} label={`${tigerProgress}/${tigerMax}`}/>
                <img src='../img/game/badge-1.png' alt='tiger badge' />
            </div>
        </div>
    </div>
    );
}

export default TigerEnvironment