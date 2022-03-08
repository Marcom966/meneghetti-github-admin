import React from 'react';
import { studente } from './Githubadmin';
import { Githubadmin } from './githubreturn2';

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
    </div>
        
    );
}
    


