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
    createContact: (company: string, name: string, email: string, phone: string, role: string, contactAdmin: boolean) => void
}

export const ContactsContext = createContext({} as ContactsContextData)

interface ContactsProviderProps {
    children: ReactNode
}

export default function ContactsProvider({children}: ContactsProviderProps){

    const [contatos, setContatos] = useState<ContactsUserProps[]>([]);

    function deleteContact(id: number){
        api.delete(`contacts/${id}`)
        getData();
    }

    async function getData(){
        await api.get('contacts').then(resp => {
            setContatos(resp.data);
        }).catch( e => {
            console.log(e);
        } );
    }

    function createContact(company: string, name: string, email: string, phone: string, role: string, contactAdmin: boolean){
        const body = {
            id: Math.random(),
            company: company,
            name: name,
            email: email,
            phone: phone,
            role: role,
            contactAdmin: contactAdmin
        }
        api.post('contacts/',body)
    }

    useEffect(()=>{
        getData()
    }, [])


    return(
        <ContactsContext.Provider value={{
            contatos,
            deleteContact,
            createContact,
        }}>
            {children}
        </ContactsContext.Provider>
    );
}