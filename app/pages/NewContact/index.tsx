/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useContext} from 'react';
import {
  Container,
  Header,
  TextHeader,
  Back,
  Information,
  Information2,
  InputContainer,
  TitleInput,
  Input,
  ButtonContainer,
  BtnCriarContato,
  TextCriarContato,
  AdmContatoContainer,
  AdmContato,
  AdmSelect,
  TitleSelect,
  AdmSelected,
  InputsContainer,
  stylesMask,
} from './styles';
import {Alert, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';
import {ContactsContext} from '../../hooks/ContactsContext';
import {TextInputMask} from 'react-native-masked-text';

export default function NewContact({navigation}) {
  const [selectedSim, setSelectedSim] = useState(false);
  const [selectedNao, setSelectedNao] = useState(false);
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [contactAdmin, setContactAdmin] = useState(false);

  const {createContact} = useContext(ContactsContext);

  function createContato() {
    if (
      company === '' ||
      name === '' ||
      email === '' ||
      phone === '' ||
      role === ''
    ) {
      Alert.alert('', 'Existem campos obrigatórios para sem preenchidos.');
    } else if (selectedSim === false && selectedNao === false) {
      Alert.alert('', 'Existem campos obrigatórios para sem preenchidos.');
    } else {
      createContact(company, name, email, phone, role, contactAdmin);
      navigation.navigate('Contacts');
      ToastAndroid.showWithGravity(
        'Contato cadastrado com sucesso',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  }

  let pessoaContatoRef: any = useRef();
  let emailRef: any = useRef();
  let cargoRef: any = useRef();

  const SimSelected = () => {
    if (selectedSim === false) {
      setSelectedSim(true);
      setSelectedNao(false);
      setContactAdmin(true);
    }
  };

  const NaoSelected = () => {
    if (selectedNao === false) {
      setSelectedNao(true);
      setSelectedSim(false);
      setContactAdmin(false);
    }
  };

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.navigate('Contacts')}>
          <Icon
            name="keyboard-arrow-left"
            size={28}
            color={colors.white}
            style={{marginTop: 5}}
          />
        </Back>
        <TextHeader>Cadastrar Novo Contato</TextHeader>
      </Header>
      <Information>Para cadastrar um novo contato</Information>
      <Information2>precisamos de alguns dados</Information2>
      <InputsContainer>
        <InputContainer>
          <TitleInput>Nome da Empresa</TitleInput>
          <Input
            placeholder="Informe o nome da empresa"
            returnKeyType="next"
            onChangeText={text => {
              setCompany(text);
            }}
            onSubmitEditing={() => {
              pessoaContatoRef.focus();
            }}
          />
        </InputContainer>
        <InputContainer>
          <TitleInput>Nome Completo do Contato</TitleInput>
          <Input
            ref={ref => {
              pessoaContatoRef = ref;
            }}
            placeholder="Informe o nome do contato"
            returnKeyType="next"
            onChangeText={text => {
              setName(text);
            }}
            onSubmitEditing={() => {
              emailRef.focus();
            }}
          />
        </InputContainer>
        <InputContainer>
          <TitleInput>E-mail</TitleInput>
          <Input
            ref={ref => {
              emailRef = ref;
            }}
            placeholder="Informe o e-mail"
            returnKeyType="next"
            onChangeText={text => {
              setEmail(text);
            }}
            onSubmitEditing={() => {
              cargoRef.focus();
            }}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        </InputContainer>
        <InputContainer>
          <TitleInput>Cargo</TitleInput>
          <Input
            ref={ref => {
              cargoRef = ref;
            }}
            placeholder="Ex: Diretor"
            returnKeyType="next"
            onChangeText={text => {
              setRole(text);
            }}
          />
        </InputContainer>
        <InputContainer>
          <TitleInput>Telefone Celular</TitleInput>
          <TextInputMask
            placeholder="(xx) xxxxx-xxxx"
            returnKeyType="done"
            onChangeText={text => setPhone(text)}
            keyboardType="phone-pad"
            type="cel-phone"
            style={stylesMask.InputMask}
          />
        </InputContainer>
        <InputContainer>
          <TitleInput>Adminitrador de Contato</TitleInput>
          <AdmContatoContainer>
            <AdmContato>
              <AdmSelect
                style={
                  selectedSim === true ? {borderColor: colors.green} : null
                }
                onPress={() => SimSelected()}>
                {selectedSim === true && <AdmSelected />}
              </AdmSelect>
              <TitleSelect>Sim</TitleSelect>
            </AdmContato>
            <AdmContato>
              <AdmSelect
                style={
                  selectedNao === true ? {borderColor: colors.green} : null
                }
                onPress={() => NaoSelected()}>
                {selectedNao === true && <AdmSelected />}
              </AdmSelect>
              <TitleSelect>Não</TitleSelect>
            </AdmContato>
          </AdmContatoContainer>
        </InputContainer>
      </InputsContainer>
      <ButtonContainer>
        <BtnCriarContato onPress={() => createContato()}>
          <TextCriarContato>Criar Contato</TextCriarContato>
        </BtnCriarContato>
      </ButtonContainer>
    </Container>
  );
}
