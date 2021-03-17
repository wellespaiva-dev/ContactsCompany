import styled from 'styled-components/native';
import colors from '../../assets/colors';
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white}
`;

export const Header = styled.View`
    top: 0;
    width: 100%;
    height: 55px;
    background: ${colors.blue};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
`;

export const Back = styled.TouchableOpacity`
`;

export const TextHeader = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: "Poppins-Regular";
  width: 60%;
  margin-top: 10px;
`;

export const ButtonContainer = styled.View`
  bottom: 0;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${colors.lightGray};
  height: 90px;
  width: 100%;
  background: ${colors.white}

  `;

  export const BtnCadastrarContato = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 6px;
    background: ${colors.green};
    width: ${width-30}px;
  `;

  export const TextCadastrarContato = styled.Text`
    font-family: "Poppins-Medium";
    font-size: 14px;
    color: ${colors.white};
  `;