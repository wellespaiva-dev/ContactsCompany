import styled from 'styled-components/native';
import colors from '../../assets/colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  margin-top: 10px;
  height: 60px;
  width: ${width - 20}px;
  border-width: 1px;
  border-radius: 6px;
  border-color: ${colors.lightGray};
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${colors.gray};
`;

export const Information = styled.Text`
  font-size: 12px;
  font-family: 'Poppin-Regular';
  color: ${colors.informationGray};
`;
