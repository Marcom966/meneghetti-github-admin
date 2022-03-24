import React from "react";
import axios from "axios";


export default async function Githubadmin(){
    

        let arrayOfStudents = [];
        const res = await axios.get("https://github-function-app.azurewebsites.net/api/HttpStudentsRepos");
            arrayOfStudents = res.data.results;
        console.log(arrayOfStudents);


    
        {/*{studentiReturn.map((studente: Object)=>{
            <div className='dettaglioStudente'>
            nome: {studente.name}<br></br>
            cognome: {studente.surname}<br></br>
            classe: {studente.class}<br></br>
            login: {studente.login}<br></br>
    </div>
        })}*/}
        return arrayOfStudents;
}