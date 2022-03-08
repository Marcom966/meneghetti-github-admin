import React from "react";
import Axios from 'axios';
import {Githubreturn} from './Githubreturn';
import { isMapIterator } from "util/types";
import internal from "stream";


interface nuovoStudente {
    nome: string;
    cognome: string;
    login: string;
    classe: string;
    repos?: string[];

}

export function studente(){
    const nuovoStudente: nuovoStudente = {
        nome: 'mario',
        cognome: 'rossi',
        login: 'Mario.Rossi',
        classe: 'Fullstackdeveloper',

    }
    return nuovoStudente;
}
