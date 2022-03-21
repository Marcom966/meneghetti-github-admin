import React from "react";
import axios from "axios";
import Githubadmin from '../githubreturn2';


describe('repos pieno', ()=>{
    /*happy Path*/

    it('repos pieno', async ()=>{
        let arrayOfStudents = [];
            arrayOfStudents = await Githubadmin();
            let arrayResults = arrayOfStudents.length;
        expect(arrayResults).toBeGreaterThan(1);
    })

    it('risultato undefined', ()=>{
        let arrayOfStudents = [];
        arrayOfStudents = Githubadmin();
        let arrayResults = arrayOfStudents.length;
    expect(arrayResults).toEqual(undefined);
    });


    it('rete in down', ()=>{
        
    })

    it('error 500', ()=>{

    })
}) 

/*export const Githubadmin = async() =>{
    try{

        var arrayOfStudents = [];
        const res = await axios.get("https://github-function-app.azurewebsites.net/api/HttpStudentsRepos");
            arrayOfStudents = res.data.results;
        console.log(arrayOfStudents);


        }catch (error){
            console.log(error);
            throw error;
        }


    
        {/*{studentiReturn.map((studente: Object)=>{
            <div className='dettaglioStudente'>
            nome: {studente.name}<br></br>
            cognome: {studente.surname}<br></br>
            classe: {studente.class}<br></br>
            login: {studente.login}<br></br>
    </div>
        })}
        return arrayOfStudents;*/