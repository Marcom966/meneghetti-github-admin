/*
* @jest-environment jsdom
*/


import {renderHook} from '@testing-library/react-hooks';
import { Githuadmin } from '../githubreturn2';


describe ('test custom hook undefined', ()=>{

    test("Risultato con almeno 1 elemento", ()=>{
        // 1.happy path
        //hook viene caricato e repos è un  array con almeno 1 elemento

        const {useReposInstance} = renderHook(()=> Githuadmin());
        expect(useReposInstance.current.repos).toBeDefined();
        expect(useReposInstance.current.repos.lenght).toBeGreaterThan(0);
    })



//caricare hook, se array ha più di un elemento passa, atrementi fail.

// 2.special cases
//hook viene caricato e repos è un non ho risultati

//contrario di sopra


// 3.edge cases.
//errore di connessione

//passa se sono connesso, altrementi no

//404 Not found
// carico url sbagliato, se passa è xk url è sbagliato

//500 internal server error (backend)
// url ritorna null o undefined, passa.


//altro errore (undefined)


})