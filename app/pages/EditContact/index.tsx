import React, {useState, useRef} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../assets/colors';
import { Container, Header, TextHeader, Back, InputContainer,TitleInput, Input, ButtonContainer, 
    BtnSalvarContato, TextSalvarContato, AdmContatoContainer, AdmContato,
    AdmSelect, TitleSelect, AdmSelected, InputsContainer
} from './styles'
import { ToastAndroid } from 'react-native'

export default function EditContact({navigation}){

    const [selectedSim, setSelectedSim] = useState(true);
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

    const salvarAteracoes = () =>{
        ToastAndroid.showWithGravity('Alterações salvas com sucesso', ToastAndroid.SHORT, ToastAndroid.CENTER);
        navigation.navigate('ProfileCompany')
    }

    return(
        <Container>
            <Header>
                <Back onPress={ () => navigation.navigate('ProfileCompany')}>
                    <Icon name='keyboard-arrow-left' size={28} color={colors.white} style={{marginTop: 5}} />
                </Back>
                <TextHeader>Editar Contato</TextHeader>
            </Header>
            <InputsContainer>
            <InputContainer>
                <TitleInput>Nome da Empresa</TitleInput>
                <Input
                    value='Lojas Remmer LTDA.'
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
                        value='Ricardo Sales de Souza'
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
                        value='ricardo.sales@provedor.com.br'
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
                        value='Diretor'
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
                        value='11987629182'
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
                <BtnSalvarContato onPress={() => salvarAteracoes()}>
                    <TextSalvarContato>Salvar Alterações</TextSalvarContato>
                </BtnSalvarContato>
            </ButtonContainer>
        </Container>
    );
}