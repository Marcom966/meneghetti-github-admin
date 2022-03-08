import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Image} from './components/Image';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Githubreturn } from './components/Githubreturn';
import { Githubadmin } from './components/githubreturn2';

function App() {
  return (
    <div className="App-body">
      <div className="Navbar">
        <div className="content">
          <Image/>
          <Githubreturn/>
          <br></br>
        </div>
      </div>
          <div className='app-login'>
        <div className="utenteLogin">
                <div id="button" >
                  <input type="text"/>
                </div>
                <div id="button">
                  <input type="text"/>
                    <button>Login</button>
                    <button onClick={Githubadmin}>backend:</button>
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
