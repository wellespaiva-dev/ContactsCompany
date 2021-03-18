import React, {createContext, ReactNode, useState} from 'react';
import {api} from '../services/api';

interface ContactsUserProps {
  id: number;
  company: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  contactAdmin: boolean;
}

interface ContactsContextData {
  contatos: ContactsUserProps[];
  deleteContact: (id: number) => void;
  createContact: (
    company: string,
    name: string,
    email: string,
    phone: string,
    role: string,
    contactAdmin: boolean,
  ) => void;
  getData: () => void;
  isLoading: boolean;
  updateContact: (
    id: number,
    company: string,
    name: string,
    email: string,
    phone: string,
    role: string,
    contactAdmin: boolean,
  ) => void;
}

export const ContactsContext = createContext({} as ContactsContextData);

interface ContactsProviderProps {
  children: ReactNode;
}

export default function ContactsProvider({children}: ContactsProviderProps) {
  const [contatos, setContatos] = useState<ContactsUserProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function deleteContact(id: number) {
    await api
      .delete(`contacts/${id}`)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(e => {
        console.log(e);
      });
    await getData();
  }

  async function getData() {
    await api
      .get('contacts')
      .then(resp => {
        setContatos(resp.data);
        setIsLoading(true);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function createContact(
    company: string,
    name: string,
    email: string,
    phone: string,
    role: string,
    contactAdmin: boolean,
  ) {
    const body = {
      id: Math.floor(Math.random() * 100000) + 1,
      company: company,
      name: name,
      email: email,
      phone: phone,
      role: role,
      contactAdmin: contactAdmin,
    };
    await api
      .post('contacts', body)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(e => {
        console.log(e);
      });
    await getData();
  }

  async function updateContact(
    id: number,
    company: string,
    name: string,
    email: string,
    phone: string,
    role: string,
    contactAdmin: boolean,
  ) {
    const body = {
      company: company,
      name: name,
      email: email,
      phone: phone,
      role: role,
      contactAdmin: contactAdmin,
    };
    await api
      .put(`contacts/${id}`, body)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(e => {
        console.log(e);
      });
    await getData();
  }

  return (
    <ContactsContext.Provider
      value={{
        contatos,
        deleteContact,
        createContact,
        getData,
        isLoading,
        updateContact,
      }}>
      {children}
    </ContactsContext.Provider>
  );
}
