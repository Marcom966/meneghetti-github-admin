import React from "react";

//'Alert' construction


export default function getAlertMessage(message: string){
//function declaration


    const Alert = message;
    if(Alert=='message'){
        //checking if alert is empty


        let words = document.getElementById('text') as HTMLInputElement;
        alert(words.value);
        //if alert is not empty then capture whats written and display it.

        
    }else{
        alert("INPUT EMPTY!!!")
        //else, display the input is empty!
    }
}