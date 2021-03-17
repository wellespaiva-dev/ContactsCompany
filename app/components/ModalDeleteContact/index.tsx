import React from 'react'
import { ViewContainer, LogoContainer, Title, Information, ButtonsContainer, ButtonConfimar, ButtonCancelar, TextCancelar, TextConfirmar } from './styles'
import SvgAviso from '../../assets/svg/aviso'
import { Modal } from 'react-native'

interface Props {
    visibilidade: boolean,
    close(): void,
    deletar(): void
}

export default function ModalDeleteContatct({visibilidade, close, deletar}: Props){

    return(
            <Modal 
                visible={visibilidade} 
                animationType='slide' 
                transparent={true} 
                style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <ViewContainer>
                    <LogoContainer>
                        <SvgAviso width={50} height={50} style={{marginBottom: 5}}/>
                    </LogoContainer>
                    <Title>Deletar Contato</Title>
                    <Information>Tem certeza que deseja deletar esse</Information>
                    <Information>contato? A acção não poderá ser</Information>
                    <Information>desfeita.</Information>
                    <ButtonsContainer>
                        <ButtonCancelar onPress={() => close()}>
                            <TextCancelar>Cancelar</TextCancelar>
                        </ButtonCancelar>
                        <ButtonConfimar onPress={() => deletar()}>
                            <TextConfirmar>Deletar</TextConfirmar>
                        </ButtonConfimar>
                    </ButtonsContainer>
                </ViewContainer>
            </Modal>
    );
}