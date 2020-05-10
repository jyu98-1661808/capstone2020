import React from 'react';
import {
    NavLink
} from "react-router-dom";
import '../styles/StudentMain.css';

function StudentMain() {
    return (
        <div className='student-main'>
            <img className='logo' src='../img/outlined-logo.png' alt='habi hero logo' />
            <div className='student-main-view'>
                <div className='main-buttons'>
                    <NavLink className='btn btn-success' to='/student-signin'>Sign In</NavLink>
                    <NavLink className='btn btn-primary' to='/student-signup'>Create Hero</NavLink>
                    {/* The link below will lead to our default game page. The one with the carousel of animal characters. */}
                    <NavLink className='btn btn-danger' to='/habihero-game'>Play as Guest</NavLink>
                    <NavLink className='btn btn-secondary' to='/teacher-signup'>I'm a teacher!</NavLink>
                </div>
            </div>
        </div>
    );
}

export default StudentMain;