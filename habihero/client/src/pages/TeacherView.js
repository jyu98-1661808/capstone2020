import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Classes from './Classes';
import Lessons from './Lessons';
import Reports from './Reports';
import Account from './Account';
import '../styles/TeacherView.css';

function TeacherView() {
    return(
        <Router>
            <Switch>
                {/* The following routes all need to be changed so that the user id's are appended in the links */}
                <Route exact path="/teacher-view">
                    <Header />
                    <div className='main-container'>
                        <Menu />
                        <Lessons />
                    </div>
                </Route>
                <Route path="/reports">
                    <Header />
                    <div className='main-container'>
                        <Menu />
                        <Reports />
                    </div>
                </Route>
                <Route path="/classes">
                    <Header />
                    <div className='main-container'>
                        <Menu />
                        <Classes />
                    </div>
                </Route>
                <Route path="/account">
                    <Header />
                    <div className='main-container'>
                        <Menu />
                        <Account />
                    </div>
                </Route>
                {/* The bottom route should be teacher sign out, but this is for debugging and is temporary. */}
            </Switch>
      </Router>
    );
}

function Header() {
    return (
    <header className='header' id='teacher'>
        <div className='header-container'>
            <img className='logo' src='./img/logo.png' alt='habi hero logo' />
            <div className='account-description'>
                <img src='./img/teacher/teacher.png' alt='teacher' />
                <p>Mrs.Cedargreen's 1st Grade</p>
            </div>
            <NavLink to="/teacher-signin" className='btn btn-outline-success'>Sign Out</NavLink>
        </div>
    </header>
    );
}
  
function Menu() {
    return (
        <div className='menu-view'>
            <div className='menu-list'>
                <div className='menu-item'>
                    <NavLink exact to="/teacher-view" activeClassName="active">
                        <i className="fas fa-file-alt" />&nbsp;
                        Lessons
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to="/classes">
                        <i className="fas fa-apple-alt" />&nbsp;
                        Manage Classes
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to="/reports">
                        <i className="fas fa-chart-bar" />&nbsp;
                        Reports
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to="/account">
                        <i className="fas fa-user" />&nbsp;
                        Account
                    </NavLink>
                </div>
            </div>
            <img src='./img/myhero.png' alt='my hero' />
        </div>
    );
}

export default TeacherView;
  