export type TypeClass = {
    codice: string;
    titoloCorso: string;
}

export type studente = {
    nome: string;
    surname: string,
    login: string,
    class: TypeClass;
    repos: string[]|undefined|null;
}


