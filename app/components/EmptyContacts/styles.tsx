import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const EmptyContainer = styled.View`
  flex: 1;
  background: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const TextEmpty = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${colors.gray};
  font-size: 17px;
  text-align: center;
  margin-top: 10px;
`;
