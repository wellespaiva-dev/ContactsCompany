import React, { useState, useRef } from 'react'
import { Container, Header, TextHeader, Back, Information, 
        Information2, InputContainer,TitleInput, Input, ButtonContainer, 
        BtnCriarContato, TextCriarContato, AdmContatoContainer, AdmContato,
        AdmSelect, TitleSelect, AdmSelected, InputsContainer
} from './styles'
import { ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../assets/colors';


export default function NewContact({navigation}){

    const [selectedSim, setSelectedSim] = useState(false);
    const [selectedNao, setSelectedNao] = useState(false);

    let pessoaContatoRef = useRef();
    let emailRef = useRef();
    let cargoRef = useRef();
    let telefoneRef = useRef();

    const SimSelected = () => {
        if(selectedSim === false){
            setSelectedSim(true);
            setSelectedNao(false);
        }
    }

    const NaoSelected = () => {
        if(selectedNao === false){
            setSelectedNao(true);
            setSelectedSim(false);
        }
    }

    return(
        <Container>
            <Header>
                <Back onPress={()=> navigation.navigate('Contacts')}>
                    <Icon name='keyboard-arrow-left' size={28} color={colors.white} style={{marginTop: 5}} />
                </Back>
                <TextHeader>Cadastrar Novo Contato</TextHeader>
            </Header>
            <Information>Para cadastrar um novo contato</Information>
            <Information2>precisamos de alguns dados</Information2>
            <InputsContainer>
            <InputContainer>
                <TitleInput>Nome da Empresa</TitleInput>
                <Input
                    placeholder='Informe o nome da empresa'
                    returnKeyType='next'
                    onChangeText={ () => {} }
                    onSubmitEditing={() => {
                        pessoaContatoRef.focus();
                    }}
                />
            </InputContainer>
                <InputContainer>
                    <TitleInput>Nome Completo do Contato</TitleInput>
                    <Input
                        ref={(ref) => {pessoaContatoRef = ref}}
                        placeholder='Informe o nome do contato'
                        returnKeyType='next'
                        onChangeText={ () => {} }
                        onSubmitEditing={() => {
                            emailRef.focus();
                        }}
                    />
                </InputContainer>
                <InputContainer>
                    <TitleInput>E-mail</TitleInput>
                    <Input
                        ref={(ref) => {emailRef = ref}}
                        placeholder='Informe o e-mail'
                        returnKeyType='next'
                        onChangeText={ () => {} }
                        onSubmitEditing={() => {
                            cargoRef.focus();
                        }}
                        keyboardType='email-address'
                        textContentType='emailAddress'
                    />
                </InputContainer>
                <InputContainer>
                    <TitleInput>Cargo</TitleInput>
                    <Input 
                        ref={(ref) => {cargoRef = ref}}
                        placeholder='Ex: Diretor'
                        returnKeyType='next'
                        onChangeText={ () => {} }
                        onSubmitEditing={() => {
                            telefoneRef.focus();
                        }}
                    />
                </InputContainer>
                <InputContainer>
                    <TitleInput>Telefone Celular</TitleInput>
                    <Input 
                        ref={(ref) => {telefoneRef = ref}}
                        placeholder='(xx) xxxxx-xxxx'
                        returnKeyType='done'
                        onChangeText={ () => {} }
                        keyboardType='phone-pad'
                        maxLength={11}
                        textContentType='telephoneNumber'
                    />
                </InputContainer>
                <InputContainer>
                    <TitleInput>Adminitrador de Contato</TitleInput>
                    <AdmContatoContainer>
                        <AdmContato>
                            <AdmSelect 
                                style={selectedSim === true ? {borderColor: colors.green}: null}
                                onPress={ () => SimSelected() }
                            >
                                {selectedSim === true && <AdmSelected/>}
                            </AdmSelect>
                            <TitleSelect>Sim</TitleSelect>
                        </AdmContato>
                        <AdmContato >
                            <AdmSelect 
                                style={selectedNao === true ? {borderColor: colors.green}: null}
                                onPress={ () => NaoSelected() }
                            >
                            {selectedNao === true && <AdmSelected/>}
                            </AdmSelect>
                            <TitleSelect>Não</TitleSelect>
                        </AdmContato>
                    </AdmContatoContainer>
                </InputContainer>
            </InputsContainer>
            <ButtonContainer>
                <BtnCriarContato onPress={() => {
                    navigation.navigate('Contacts') 
                    ToastAndroid.showWithGravity('Contato cadastrado com sucesso', ToastAndroid.SHORT, ToastAndroid.CENTER)
                    }}
                >
                    <TextCriarContato>Criar Contato</TextCriarContato>
                </BtnCriarContato>
            </ButtonContainer>
        </Container>
    );
}