import React from 'react';
import { Link } from 'react-router-dom';
import { studente } from './Githubadmin';
import { Githubadmin } from './githubreturn2';
import App from '../App';
import Alert from './altert';
import { seeContext } from './Context';

export function Githubreturn(){
    //function for a single user.


    let studentiReturn = studente();
    //get user from the user class.

    let studentiArray = Githubadmin();
    //get array of Users (not working)

    console.log(studentiArray);
    //display array of users (not working)

    return(
         <div className='dettaglioStudente'>
            nome: {studentiReturn.nome}<br></br>
            cognome: {studentiReturn.cognome}<br></br>
            classe: {studentiReturn.classe}<br></br>
            login: {studentiReturn.login}<br></br>
            {seeContext()}
            {console.log(seeContext())}
            {/*display user and current context in page*/}

            <button type='button'>
                <Link to={'/'} onClick={App}>Back</Link>
            </button>
            {/*return back to login page button*/}


            <div id="button3">
                <input type='text' id="text"/>
                    <button type="button" onClick={()=>Alert('message')}>scrivi:</button>
            </div>
            {/*display what's written in the input button*/}
        </div>
        
    );
}
    


