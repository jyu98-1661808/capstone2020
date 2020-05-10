import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Lessons from './Lessons';
import Account from './Account';
import TeacherSignUp from './TeacherSignUp';
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
                <Route path="/teacher-view/reports">
                </Route>
                <Route path="/teacher-view/classes">
                </Route>
                <Route path="/teacher-view/account">
                    <Header />
                    <div className='main-container'>
                        <Menu />
                        <Account />
                    </div>
                </Route>
                {/* The bottom route should be teacher sign out, but this is for debugging and is temporary. */}
                <Route path="/teacher-signup">
                    <TeacherSignUp />
                </Route>
            </Switch>
      </Router>
    );
}

function Header() {
    return (
    <header className='header'>
        <img src='./img/logo.png' alt='habi hero logo' />
        <NavLink to="/teacher-signup">Sign Out</NavLink>
        <Button type='button' variant='outline-success'>Settings</Button>
    </header>
    );
}
  
function Menu() {
    return (
        <div className='menu-view'>
            <div className='menu-list'>
                <div className='menu-item'>
                    <NavLink exact to="/teacher-view" activeClassName="active">Lessons</NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to="/teacher-view/reports">Reports</NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to="/teacher-view/classes">Manage Classes</NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink to="/teacher-view/account">Account</NavLink>
                </div>
            </div>
            <img src='./img/myhero.png' alt='my hero' />
        </div>
    );
}

export default TeacherView;
  