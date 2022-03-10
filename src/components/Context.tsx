

import React,  { useContext, createContext} from "react";

export default function Changecontext(context: string){
    const defaultContext = {
        default: 'false',

    }
    if (context!='false'){
        const context2 = 'true';
        console.log('contesto: '+context2)
    }else{
        console.log('non ha letto');
    }

    const themeContext = createContext(defaultContext);
}