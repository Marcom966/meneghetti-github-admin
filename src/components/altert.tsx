import React from "react";

export default function getAlertMessage(message: string){
    const Alert = message;
    if(Alert=='message'){
        let words = document.getElementById('text') as HTMLInputElement;
        alert(words.value);
    }
}