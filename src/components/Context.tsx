

import React,  { useContext, createContext} from "react";

export default function Changecontext(context: string){
    const defaultContext = {
        default: 'false',

    }
    if (context!='false'){
        Changecontext('true');
    }else{
        console.log('non ha letto');
    }

    const themeContext = createContext(defaultContext);
}

export function seeContext(){
    let currentContext = useContext;
    let currentcontext2 = currentContext.toString();
    console.log(currentcontext2);
    const contextFinal = 'context validated';
    console.log(contextFinal);
    if (currentcontext2!='true'){
        window.open('localhost:3000','_self');
    }
    return contextFinal;
}