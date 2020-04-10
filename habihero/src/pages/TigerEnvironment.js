import React from 'react';
import '../styles/Tiger.css';

function TigerEnvironment() {
    return (<div className='tiger-environment'>
        <div className='header'>
            <img className='mission-button' src='./images/mission_button.png' alt='mission button' />
        </div>
        <div className='environment'>
        </div>
        <div className='footer'>
            <img className='water-icon' src='./images/dim_water_icon.png' alt='locked water icon' />
        </div>
    </div>);
}

export default TigerEnvironment