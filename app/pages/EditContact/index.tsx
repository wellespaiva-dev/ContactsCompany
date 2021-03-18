/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useContext, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors';
import {
  Container,
  Header,
  TextHeader,
  Back,
  InputContainer,
  TitleInput,
  Input,
  ButtonContainer,
  BtnSalvarContato,
  TextSalvarContato,
  AdmContatoContainer,
  AdmContato,
  AdmSelect,
  TitleSelect,
  AdmSelected,
  InputsContainer,
  stylesMask,
} from './styles';
import {Alert, ToastAndroid} from 'react-native';
import {ContactsContext} from '../../hooks/ContactsContext';
import {TextInputMask} from 'react-native-masked-text';

export default function EditContact({navigation, route}) {
  const [selectedSim, setSelectedSim] = useState(false);
  const [selectedNao, setSelectedNao] = useState(false);
  const {contatos, updateContact} = useContext(ContactsContext);

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [contactAdmin, setContactAdmin] = useState(false);

  const {id} = route.params;

  useEffect(() => {
    const dados = contatos.find(dado => dado.id === id);
    if (dados) {
      verificaContactAdmin(dados?.contactAdmin);
      setCompany(dados?.company);
      setName(dados?.name);
      setPhone(dados?.phone);
      setRole(dados?.role);
      setEmail(dados?.email);
      setContactAdmin(dados?.contactAdmin);
    }
  }, [contatos, id]);

  function verificaContactAdmin(dados: boolean | undefined) {
    if (dados === true) {
      setSelectedSim(true);
    } else if (dados === false) {
      setSelectedNao(true);
    }
  }

  function update() {
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
      updateContact(id, company, name, email, phone, role, contactAdmin);
      ToastAndroid.showWithGravity(
        'Alterações salvas com sucesso',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      navigation.navigate('ProfileCompany');
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
        <Back onPress={() => navigation.navigate('ProfileCompany')}>
          <Icon
            name="keyboard-arrow-left"
            size={28}
            color={colors.white}
            style={{marginTop: 5}}
          />
        </Back>
        <TextHeader>Editar Contato</TextHeader>
      </Header>

      <InputsContainer>
        <InputContainer>
          <TitleInput>Nome da Empresa</TitleInput>
          <Input
            value={company}
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
            value={name}
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
            value={email}
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
            value={role}
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
            value={phone}
            placeholder="(xx) xxxxx-xxxx"
            returnKeyType="done"
            onChangeText={text => {
              setPhone(text);
            }}
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
        <BtnSalvarContato onPress={() => update()}>
          <TextSalvarContato>Salvar Alterações</TextSalvarContato>
        </BtnSalvarContato>
      </ButtonContainer>
    </Container>
  );
}
