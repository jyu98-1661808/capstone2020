import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/Tiger.css';

function TigerEnvironment() {
    const tigerProgress = 300;
    const tigerMax = 500;

    return (
    <div id='tiger' className='tiger-environment'>
         <div className='header'>
            <button id='missions'>
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

        </div>
        <div className='characters-container'>
            <img id='alex-tiger' src='../img/character-icons/tiger.png' alt='alex tiger' />
            <img id='hero' src='../img/myhero.png' alt='my habi hero' />
         </div>
        <div className='footer'>
            <div className='progress-container'>
                <ProgressBar now={tigerProgress} max={tigerMax} label={`${tigerProgress}/${tigerMax}`}/>
                <img src='../img/game/badge-1.png' alt='tiger badge' />
            </div>
        </div>
    </div>
    );
}

export default TigerEnvironment