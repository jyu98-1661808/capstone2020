import React, { useState } from 'react';
import { NavLink } from "react-router-dom"; 
import '../styles/HabiShop.css';

function HabiShop() {
    return (
        <div id='habi-shop' className='habi-shop-view'>
            <div className='header'>
                <img id='logo' src='../img/outlined-logo.png' alt='habi hero logo' />
                <div className='habicoins-container'>
                    <img src='../img/habi-coin-icon.png' alt='habi coin icon' />
                    <div className='habicoins-counter'>
                        <p id='habicoin-value'>14,000</p>
                        <p id='habicoin-text'>habi-coins</p>
                    </div>
                </div>
            </div>
            <div className='habi-shop-container'>
                
            </div>
            <div className='habi-shop-hero'>
                
            </div>
            <div className='footer'>
                <NavLink id='back' to='/habihero-game'>
                    <img src='../img/game/back-icon.png' alt='back icon' />
                    home
                </NavLink>
            </div>
        </div>
    );
}

export default HabiShop;