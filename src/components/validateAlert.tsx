import React from "react";
import { Githubreturn } from "./Githubreturn";
import { Link, } from "react-router-dom";
import Alert from './Alert2';
import { useNavigate } from "react-router-dom";
import Changecontext, { seeContext } from "./Context";

export default function validateAlert(){
    //funzione che controlla se lo user ha messo password e email giusti


        let userName = document.getElementById('login name') as HTMLInputElement
        let userNameString = userName.value;
        let password = document.getElementById('login password') as HTMLInputElement;
        let passwordString = password.value;
        //prendo i valori immessi dall'utente nei due campi "login"

        if ((userNameString=="Marco") && (passwordString=="1234gyugyu")){
            //se (E SOLO SE) l'utente ha riempito i due campi con questo usename e questa password la funzione apre la pagina lista utente altrementi apre una finestra di avvertimernto.

            {/*Changecontext('true')*/}
            {/*console.log('it did went trough!')*/}
            {window.open('http://localhost:3000/Githubreturn','_self')}
            }else{
            Alert();

            //leggere condizione if
        }
}