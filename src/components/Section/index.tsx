import React from 'react';

import { Container, Content } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}
const Section: React.FC<Props> = ({ variant, title, description }: Props) => (
  <Container className={variant}>
    <Content>
      <h2>{title}</h2>
      <p>{description}</p>
    </Content>
  </Container>
);

export default Section;
