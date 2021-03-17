import styled from 'styled-components/native';
import colors from '../../assets/colors';
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${colors.white};
    align-items: center;
`;

export const Header = styled.View`
    top: 0;
    width: 100%;
    height: 55px;
    background: ${colors.blue};
    align-items: center;
    flex-direction: row;
    padding: 10px;
`;

export const Back = styled.TouchableOpacity`
`;

export const TextHeader = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: "Poppins-Regular";
  width: 80%;
  margin-top: 10px;
  text-align: center
`;

export const ProfileView = styled.View`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  border-width: 1px;
  border-radius: 50px;
  border-color: ${colors.matteGray};
  background: ${colors.lightGray};
  align-items: center;
  justify-content: center;
`;

export const NameProfile = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-family: "Poppins-Medium";
  color: ${colors.gray}
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${colors.lightGray};
  height: 90px;
  width: 100%;
  background: ${colors.white};
  bottom: 20px;
  position: absolute;
`;

export const BtnDeleteContato = styled.TouchableOpacity`
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 6px;
    background: ${colors.white};
    width: ${width-30}px;
    border-color: ${colors.green};
    border-width: 1px;
`;

export const TextDeleteContato = styled.Text`
    font-family: "Poppins-Medium";
    font-size: 14px;
    color: ${colors.green};
`;

export const BtnEditContato = styled.TouchableOpacity`
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 6px;
    background: ${colors.green};
    width: ${width-30}px;
  `;

export const TextEditContato = styled.Text`
    font-family: "Poppins-Medium";
    font-size: 14px;
    color: ${colors.white};
`;