

import React,  { useContext, createContext} from "react";

export default function Changecontext(context: string){
    const defaultContext = {
        default: 'false',

    }
    if (context!='false'){
        return 'true';
    }

    console.log('true');

    const themeContext = createContext(defaultContext);
}