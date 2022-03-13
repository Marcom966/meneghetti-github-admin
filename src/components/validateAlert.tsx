import React from "react";
import { Githubreturn } from "./Githubreturn";
import { Link, } from "react-router-dom";
import Alert from './Alert2';
import { useNavigate } from "react-router-dom";

export default function validateAlert(){
        let userName = document.getElementById('login name') as HTMLInputElement
        let userNameString = userName.value;
        let password = document.getElementById('login password') as HTMLInputElement;
        let passwordString = password.value;
        if ((userNameString=="Marco") && (passwordString=="1234gyugyu")){
            {console.log('it did went trough!')}
            {window.open('http://localhost:3000/Githubreturn','_self')}
            }else{
            Alert();
        }
}