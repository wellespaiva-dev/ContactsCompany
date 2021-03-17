import React, { useContext, useEffect, useState } from 'react'
import { Container, Header, Back, TextHeader, ButtonContainer, BtnCadastrarContato, TextCadastrarContato } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../assets/colors';
import EmptyContacts from '../../components/EmptyContacts'
import ListContacts from '../../components/ListContacts'
import { ContactsContext } from '../../hooks/ContactsContext'

export default function Contacts({navigation}){

    const { contatos, getData } = useContext(ContactsContext)
    
    return(
        <Container>
            <Header>
                <Back onPress={()=> navigation.navigate('Home')}>
                    <Icon name='keyboard-arrow-left' size={28} color={colors.white} style={{marginTop: 5}} />
                </Back>
                <TextHeader>Contatos</TextHeader>
            </Header>
            {
                contatos?.length !== 0 &&
                <ListContacts navigation={navigation}/>
            }
            {
                contatos?.length === 0 &&
                <EmptyContacts />
            }
            <ButtonContainer>
                <BtnCadastrarContato onPress={() => navigation.navigate('NewContact')}>
                    <TextCadastrarContato>Cadastrar Novo Contato</TextCadastrarContato>
                </BtnCadastrarContato>
            </ButtonContainer>
        </Container>
    );
}