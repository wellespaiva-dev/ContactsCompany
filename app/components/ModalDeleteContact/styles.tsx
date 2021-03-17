import styled from 'styled-components/native';
import colors from '../../assets/colors';
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const ViewContainer = styled.View`
    display: flex;
    height: ${height/2.5}px;
    width: ${width-40}px;
    background: ${colors.white};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${colors.matteGray};
    margin-top: ${height/4}px;
    margin-left: 20px
`;

export const LogoContainer = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 80px;
    align-items: center;
    justify-content: center;
    background: ${colors.lightOrange}
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: "Poppins-Medium";
    color: ${colors.modalGray};
    margin-top: 10px;
`;

export const Information = styled.Text`
    font-size: 14px;
    font-family: "Poppins-Regular";
    color: ${colors.black}
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const ButtonCancelar = styled.TouchableOpacity`
    background: ${colors.lightOrange};
    width: 100px;
    height: 40px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`

export const TextCancelar = styled.Text`
    font-size: 12px;
    font-family: "Poppins-Medium";
    color: ${colors.orange};
`;

export const ButtonConfimar = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${colors.orange};
    width: 100px;
    height: 40px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`

export const TextConfirmar = styled.Text`
    font-size: 12px;
    font-family: "Poppins-Medium";
    color: ${colors.orange};
`;