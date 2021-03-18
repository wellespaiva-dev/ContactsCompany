/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  Title,
  SearchContainer,
  SearchText,
  CardList,
  ListContainer,
  InformationContainer,
  EmpresaName,
  PessoaName,
} from './styles';
import SvgSearch from '../../assets/svg/search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';
import {ContactsContext} from '../../hooks/ContactsContext';

interface Props {
  navigation: any;
}

export default function ListContacts({navigation}: Props) {
  const {contatos, isLoading} = useContext(ContactsContext);

  const [dados, setDados] = useState(contatos);

  const handlerSearch = text => {
    const data = contatos.filter(Data => Data.company.includes(text));
    setDados(data);
  };

  useEffect(() => {
    setDados(contatos);
  }, [contatos]);

  return (
    <Container>
      <Title>Contatos Cadastrados</Title>
      <SearchContainer>
        <SvgSearch height={15} width={15} style={{marginLeft: 10}} />
        <SearchText
          placeholder="Pesquisar..."
          onChangeText={text => {
            handlerSearch(text);
          }}
        />
      </SearchContainer>
      <ListContainer
        data={dados}
        refreshing={isLoading}
        renderItem={({item}: any) => (
          <CardList
            key={item.id}
            onPress={() =>
              navigation.navigate('ProfileCompany', {id: item.id})
            }>
            <InformationContainer>
              <EmpresaName>{item.company}</EmpresaName>
              <PessoaName>{item.name}</PessoaName>
            </InformationContainer>
            <Icon name="keyboard-arrow-right" size={28} color={colors.gray} />
          </CardList>
        )}
      />
    </Container>
  );
}
