import React, {useContext, useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../assets/colors';
import { Container, Header, Back, TextHeader, ProfileView, 
        NameProfile, ButtonContainer, BtnEditContato, BtnDeleteContato, 
        TextDeleteContato, TextEditContato 
} from './styles'
import { ToastAndroid } from 'react-native'
import SvgUnionGray from '../../assets/svg/unionGray'
import ProfileCard from '../../components/ProfileCard'
import ModalDeleteContatct from '../../components/ModalDeleteContact'
import { ContactsContext } from '../../hooks/ContactsContext';
interface perfilProps {
    id: number;
    company: string
    name: string
    email: string 
    phone: string
    role: string 
    contactAdmin: boolean
}

export default function ProfileCompany({navigation, route}){

    const [visible, setVisible] = useState(false);
    const {id} = route.params;
    const [perfil,setPerfil] = useState<perfilProps>();
    const { contatos, deleteContact } = useContext(ContactsContext)

    useEffect(()=> {
        const dados = contatos.find(dado =>
            dado.id === id
        )
        setPerfil(dados)
    }, [])


    return(
            <Container>
                <Header>
                    <Back onPress={ () => navigation.navigate('Contacts')}>
                        <Icon name='keyboard-arrow-left' size={28} color={colors.white} style={{marginTop: 5}} />
                    </Back>
                    <TextHeader>{perfil?.company}</TextHeader>
                </Header>
                <ProfileView>
                    <SvgUnionGray />
                </ProfileView>
                <NameProfile>{perfil?.company}.</NameProfile>
                <ProfileCard titulo='Nome Completo do Contato' informacao={perfil?.name}/>
                <ProfileCard titulo='E-mail' informacao={perfil?.email}/>
                <ProfileCard titulo='Cargo' informacao={perfil?.role}/>
                <ProfileCard titulo='Telefone Celular' informacao={perfil?.phone}/>
                <ProfileCard titulo='Administrador de Contato' informacao={
                    perfil?.contactAdmin ? 'Sim' : 'Não'
                    }/>
                <ButtonContainer>
                    <BtnDeleteContato onPress={ () => setVisible(true)}>
                        <TextDeleteContato>Deletar Contato</TextDeleteContato>
                    </BtnDeleteContato>
                    <BtnEditContato onPress={ () => navigation.navigate('EditContact') }>
                        <TextEditContato>Editar Contato</TextEditContato>
                    </BtnEditContato>
                </ButtonContainer>

                <ModalDeleteContatct visibilidade={visible} close={() => setVisible(false)} deletar={() => {
                        setVisible(false)
                        navigation.navigate('Contacts')
                        deleteContact(perfil?.id)
                        ToastAndroid.showWithGravity('Contato excluído com sucesso', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }}/>
            </Container>
    );
}