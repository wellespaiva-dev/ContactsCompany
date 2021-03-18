import React from 'react';
import {Container, Logo, BtnContatos, BtnText} from './styles';

export default function Home({navigation}) {
  return (
    <Container>
      <Logo source={require('../../assets/images/tradeup.png')} />
      <BtnContatos onPress={() => navigation.navigate('ScreenContacts')}>
        <BtnText>Contatos</BtnText>
      </BtnContatos>
    </Container>
  );
}
