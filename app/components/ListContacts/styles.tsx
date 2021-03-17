import styled from 'styled-components/native';
import colors from '../../assets/colors';
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const Container = styled.View`
  background: ${colors.white};
  align-items: flex-start;
  padding: 10px;
  height: ${height/1.3}px
`;

export const Title = styled.Text`
    font-size: 22px;
    font-family: "Poppins-Medium";
    color: ${colors.gray};
`;

export const SearchContainer = styled.View`
    width: ${width-20}px;
    height: 40px;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${colors.borderColor};
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
`;

export const SearchText = styled.TextInput`
    padding: 5px;
    width: 90%;
    font-size: 14px;
    color: ${colors.gray};
    font-family: "Poppins-Regular";
    align-items: center;
    justify-content: center;
`;

export const ListContainer = styled.FlatList`
    width: 100%;
    margin-top: 10px;
`;

export const CardList = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: ${colors.lightGray};
    height: 70px;
`;

export const InformationContainer = styled.View``;

export const EmpresaName = styled.Text`
    font-size: 14px;
    font-family: "Poppins-Medium";
    color: ${colors.gray};
`;

export const PessoaName = styled.Text`
    font-size: 12px;
    font-family: "Poppins-Regular";
    color: ${colors.gray};
`;
