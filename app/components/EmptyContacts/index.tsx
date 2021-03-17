import React from 'react'
import { EmptyContainer, TextEmpty } from './styles'
import SvgUnion from '../../assets/svg/union'

export default function EmptyContacts(){
    return(
        <EmptyContainer>
            <SvgUnion width={70} height={70}/>
            <TextEmpty>No momento não há contatos cadastrados</TextEmpty>
        </EmptyContainer>
    );
}