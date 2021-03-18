import React from 'react';
import {Container, Title, Information} from './styles';

interface Props {
  titulo: string;
  informacao: string | undefined;
}

export default function ProfileCard({titulo, informacao}: Props) {
  return (
    <Container>
      <Title>{titulo}</Title>
      <Information>{informacao}</Information>
    </Container>
  );
}
