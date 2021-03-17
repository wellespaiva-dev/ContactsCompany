import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ContactsUserProps {
    id: number;
    company: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    contactAdmin: boolean
}

interface ContactsContextData {
    contatos: ContactsUserProps[];
    deleteContact: (id: number) => void;
}

export const ContactsContext = createContext({} as ContactsContextData)

interface ContactsProviderProps {
    children: ReactNode
}

export default function ContactsProvider({children}: ContactsProviderProps){

    const [contatos, setContatos] = useState<ContactsUserProps[]>();

    function deleteContact(id: number){
        api.delete(`contacts/${id}`)
        getData();
    }

    function getData(){
        api.get('contacts').then(resp => {
            setContatos(resp.data);
        }).catch( e => {
            console.log(e);
        } );
    }

    useEffect(()=>{
        getData()
    }, [])


    return(
        <ContactsContext.Provider value={{
            contatos,
            deleteContact,
        }}>
            {children}
        </ContactsContext.Provider>
    );
}