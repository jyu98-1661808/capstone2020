import React from 'react';
import { Carousel } from 'antd';
import { Link } from "react-router-dom"; 
import Icon from '@ant-design/icons';
import RightArrow from '../assets/icons/angle-right-solid.svg';
import 'antd/dist/antd.css';
import '../styles/Home.css';

function Home(){
    const LeftArrow = () => (
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
    );

    var settings = {
        dots: false,
        slidesToShow: 3,
        swipe: true,
        draggable: true,
        infinite: true,
    }

    return <div className='home'>
        <div className='header'>
            <img src='./images/habihero_logo.png' alt="Habi hero logo" />
            <button>Settings</button>
        </div>
        <div className='carousel'>
            <Icon className='previous-button' component={LeftArrow}/>
            <Carousel {...settings}>
                <div className='animal'>
                    <Link to="/timtiger">
                        <img src='../images/home_tiger.png' alt='tim tiger' />
                        <div className='animal-description'>
                            <h1>Tim Tiger</h1>
                            <h2>Addition</h2>
                        </div>
                    </Link>
                </div>
                <div className='animal'>
                    <img src='../images/lock.png' alt='locked content' />
                    <div className='animal-description'>
                        <h1>Locked</h1>
                        <h2>Temporary</h2>
                    </div>
                </div>
                <div className='animal'>
                    <img src='../images/lock.png' alt='locked content' />
                    <div className='animal-description'>
                        <h1>Locked</h1>
                        <h2>Temporary</h2>
                    </div>
                </div>
                <div className='animal'>
                    <img src='../images/lock.png' alt='locked content' />
                    <div className='animal-description'>
                        <h1>Locked</h1>
                        <h2>Temporary</h2>
                    </div>
                </div>
            </Carousel>
            {/* <Icon className='next-button' component={()=><RightArrow/>}/> */}
        </div>
        <div className='footer'>
            <img src='../images/myhero.png' alt='my hero' />
            <button>My Collection</button>
        </div>
    </div>
}

export default Home