import React from 'react';
import { Carousel } from 'antd';
import { NavLink } from "react-router-dom"; 
import ProgressBar from 'react-bootstrap/ProgressBar';
// import RightArrow from '../assets/icons/angle-right-solid.svg';
import 'antd/dist/antd.css';
import '../styles/Home.css';

function Home(){
    var settings = {
        dots: false,
        slidesToShow: 3,
        swipe: true,
        draggable: true,
        infinite: true,
    }

    const tigerProgress = 300;
    const tigerMax = 500;

    return (
    <div className='home' id='game-home'>
        <div className='header'>
            <img className='logo' src='../img/outlined-logo.png' alt="Habi hero logo" />
            <div className='habicoins-container'>
                <img src='../img/habi-coin-icon.png' alt='habi coin icon' />
                <div className='habicoins-counter'>
                    <p id='habicoin-value'>2500</p>
                    <p id='habicoin-text'>habi-coins</p>
                </div>
            </div>
        </div>
        <div className='carousel'>
            <Carousel {...settings}>
                <div className='animal'>
                    <NavLink to="/timtiger">
                        <div className='animal-description'>
                            <h1>Alex Tiger</h1>
                            <div className='character-container'>
                                <img src='../img/character-icons/tiger.png' alt='alex tiger' />
                            </div>
                            <h2>Addition &nbsp; Level 4</h2>
                            <div className='progress-container'>
                                <ProgressBar now={tigerProgress} max={tigerMax} label={`${tigerProgress}/${tigerMax}`}/>
                                <img src='../img/game/badge-1.png' alt='tiger badge' />
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className='animal'>
                    <div className='animal-description'>
                        <h1>Lily Panda</h1>
                        <div className='character-container-locked'>
                            <img id='panda-locked' src='../img/character-icons/panda.png' alt='lily panda' />
                        </div>
                        <h2>Subtraction &nbsp; Level 1</h2>
                        <div className='progress-container-locked'>
                            <ProgressBar now={0} max={500} />
                            <img src='../img/game/lock.png' alt='locked' />
                        </div>
                    </div>
                </div>
                <div className='animal'>
                    <div className='animal-description'>
                        <h1>Tom Bear</h1>
                        <div className='character-container-locked'>
                            <img src='../img/character-icons/polar-bear.png' alt='tom polar bear' />
                        </div>
                        <h2>Measurement and Data</h2>
                        <div className='progress-container-locked'>
                            <ProgressBar now={0} max={500} />
                            <img src='../img/game/lock.png' alt='locked' />
                        </div>
                    </div>
                </div>
                <div className='animal'>
                    <div className='animal-description'>
                        <h1>Moby Orca</h1>
                        <div className='character-container-locked'>
                            <img src='../img/character-icons/orca.png' alt='moby orca' />
                        </div>
                        <h2>Geometry</h2>
                        <div className='progress-container-locked'>
                            <ProgressBar now={0} max={500} />
                            <img src='../img/game/lock.png' alt='locked' />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
        <div className='footer'>
            <button id='settings'>
                <img src='../img/game/setting.png' alt='setting icon' /> 
                Settings
            </button>
            <button id='hero-shop'>
                <img src='../img/game/hero-shop.png' alt='hero shop icon' /> 
            </button>
            <img className='footer-hero' src='../img/myhero.png' alt='my hero' />
            <button id='music'>
                <img src='../img/game/music.png' alt='music icon' /> 
                Music
            </button>
        </div>
    </div>
    );
}

export default Home