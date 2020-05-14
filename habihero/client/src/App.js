import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import TeacherSignUp from './pages/TeacherSignUp';
import TeacherSignIn from './pages/TeacherSignIn';
import TeacherView from './pages/TeacherView';
import StudentMain from './pages/StudentMain';
import StudentSignIn from './pages/StudentSignIn';
import StudentSignUp from './pages/StudentSignUp';
// Import the default game's main page as a component here.
import Home from './pages/Home';
import TigerEnvironment from './pages/TigerEnvironment';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route exact path="/">
            <StudentMain />  
          </Route>
          <Route path="/teacher-signup">
            <TeacherSignUp />
          </Route>
          <Route path="/teacher-signin">
            <TeacherSignIn />
          </Route>
          <Route path="/teacher-view">
            <TeacherView />
          </Route>
          <Route path="/student-main">
            <StudentMain />  
          </Route>
          <Route path="/student-signup">
            <StudentSignUp /> 
          </Route>
          <Route path="/student-signin">
            <StudentSignIn /> 
          </Route>
          {/* The route below will lead to our default game page. The one with the carousel of animal characters. */}
          <Route path="/habihero-game">
            <Home />
          </Route>
          <Route path="/timtiger">
            <TigerEnvironment />
          </Route>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
