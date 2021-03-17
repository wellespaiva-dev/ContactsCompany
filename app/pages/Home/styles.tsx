import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import colors  from '../../assets/colors'

const { width } = Dimensions.get('window')

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.white}
`;

export const Logo = styled.Image`
  width: 150px;
  height: 43px;
  position: absolute;
  top: 100px;
`;

export const BtnContatos = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${colors.blue};
  width: ${width - 80}px;
  height: 50px;
  position: absolute;
  bottom: 100px;
`;

export const BtnText = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 20px;
  color: ${colors.white}
`;
