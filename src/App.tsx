import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Image } from './components/Image';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Githubreturn } from './components/Githubreturn';
import { Githubadmin } from './components/githubreturn2';
import Context from './components/Context';
import { utente } from './components/page2';
import { Link } from 'react-router-dom';
import Changecontext from './components/Context';
import Alert from './components/altert';

function App() {
  return (
    <div className="App-body">
      <div className="Navbar">
        <div className="content">
          <Image />
          <br></br>
        </div>
      </div>
      <div className='app-login'>
        <div className="utenteLogin">
          <div id="button" >
            <input type="text" />
          </div>
          <div id="button">
            <input type="text" />
            <button type='button'>
              <Link to={'./Githubreturn'} onClick={Githubreturn}>Login</Link>
            </button>
          </div>
          <br></br>

        </div>
      </div>
      {/*<Routes>
          <Route path="/Login">
          
          </Route>
        </Routes>
        */}

    </div>
  );
}

export default App;
