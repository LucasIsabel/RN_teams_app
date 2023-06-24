import { Title, SubTitle, Container } from './styles';

type Hightlight = {
  title?: string;
  subtitle?: string;
};

export default function HightLight({ title, subtitle }: Hightlight) {
  return (
    <Container>
      <Title> {title} </Title>
      <SubTitle> {subtitle} </SubTitle>
    </Container>
  );
}
