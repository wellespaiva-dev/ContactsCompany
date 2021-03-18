import styled from 'styled-components/native';
import colors from '../../assets/colors';
import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
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

export const Back = styled.TouchableOpacity``;

export const TextHeader = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: 'Poppins-Regular';
  width: 80%;
  margin-top: 10px;
  text-align: center;
`;

export const InputsContainer = styled.ScrollView`
  display: flex;
`;

export const InputContainer = styled.View`
  margin-top: 15px;
  padding: 0 10px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const TitleInput = styled.Text`
  padding: 0 2px;
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: ${colors.matteGray};
`;

export const stylesMask = StyleSheet.create({
  InputMask: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.matteGray,
    borderWidth: 1,
    borderColor: colors.matteGray,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20,
    height: 40,
    paddingLeft: 10,
  },
});

export const Input = styled.TextInput`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: ${colors.matteGray};
  border-width: 1px;
  border-color: ${colors.matteGray};
  border-radius: 6px;
  align-items: flex-start;
  justify-content: center;
  width: ${width - 20}px;
  height: 40px;
  padding: 0 10px;
`;

export const AdmContatoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  padding: 10px;
`;

export const AdmContato = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const AdmSelect = styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  border-width: 1px;
  color: ${colors.matteGray};
  border-radius: 50px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const TitleSelect = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: ${colors.matteGray};
  margin-left: 10px;
  margin-top: 1px;
`;

export const AdmSelected = styled.View`
  width: 12px;
  height: 12px;
  background: ${colors.green};
  border-radius: 50px;
`;

export const ButtonContainer = styled.View`
  bottom: 0;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${colors.lightGray};
  height: 90px;
  width: 100%;
  background: ${colors.white};
  position: absolute;
  top: ${height / 1.2}px;
  left: 0;
  right: 0;
`;

export const BtnSalvarContato = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 6px;
  background: ${colors.green};
  width: 340px;
`;

export const TextSalvarContato = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${colors.white};
`;
