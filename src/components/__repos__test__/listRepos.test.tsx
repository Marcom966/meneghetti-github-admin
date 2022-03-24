import React from "react";
import axios from "axios";
import Githubadmin from '../githubreturn2';
import { BASE_URL, fetchUsers } from "utils";
import mockAxios from 'jest-mock-axios';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mAxiosGet = jest.MockedFunction<typeof axios.get> = axios.get;

describe('repos pieno', ()=>{
    /*happy Path*/




    it('chiamata', async ()=>{
        let arrayOfStudents = [];
            arrayOfStudents = await Githubadmin();
            let BASE_URL = 'https://github-function-app.azurewebsites.net/api/HttpStudentsRepos';
            let repos = {results: [
                {
                  name: 'Luca',
                  surname: 'Agostoni',
                  login: 'Luca-Agostoni',
                  class: 'Fullstack 2020/2022',
                  link: 'https://api.github.com/repos/Luca-Agostoni/Agostoni-Luca-github',
                  creationDate: '2021-10-29T07:39:16Z',
                  lastUpdate: '2022-01-09T16:40:30Z',
                  repoName: 'Agostoni-Luca-github',
                  idRepo: 422484111
                },
                {
                  name: 'Matteo',
                  surname: 'Bellia',
                  login: 'belliamatteo',
                  class: 'Fullstack 2020/2022',
                  link: "https://api.github.com/repos/belliamatteo/MovieAppReactMatteoBellia",
                  creationDate: "2021-10-20T07:20:39Z",
                  lastUpdate: "2021-10-27T10:53:08Z",
                  repoName: 'MovieAppReactMatteoBellia',
                  idRepo: 419225228
                },]}
                mAxiosGet.mockResolvedValue(repos);
            


    

        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}`);
    })

    it('risultato undefined', ()=>{
        let arrayOfStudents = [];
        arrayOfStudents = Githubadmin();
        let arrayResults = arrayOfStudents.length;
    expect(arrayResults).toEqual(undefined);
    });


    it('rete in down', ()=>{
        let error = 'getaddrinfo ENOTFOUND github-function-app.azurewebsites.net';
        expect(()=>Githubadmin()).rejects.toThrow(error);

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