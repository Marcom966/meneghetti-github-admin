import React from 'react';
import { Link } from 'react-router-dom';
import { studente } from './Githubadmin';
import { Githubadmin } from './githubreturn2';
import App from '../App';
import Alert from './altert';
import Changecontext from './Context';

export function Githubreturn(){
    let studentiReturn = studente();
    let studentiArray = Githubadmin();
    console.log(studentiArray);

    return(
         <div className='dettaglioStudente'>
            nome: {studentiReturn.nome}<br></br>
            cognome: {studentiReturn.cognome}<br></br>
            classe: {studentiReturn.classe}<br></br>
            login: {studentiReturn.login}<br></br>
            {Changecontext('true')}
            <button type='button'>
                <Link to={'/'} onClick={App}>Back</Link>
            </button>
            <div id="button3">
                <input type='text' id="text"/>
                    <button type="button" onClick={()=>Alert('message')}>scrivi:</button>
            </div>
        </div>
        
    );
}
    


