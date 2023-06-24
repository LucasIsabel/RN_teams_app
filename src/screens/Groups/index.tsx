import HightLight from '@components/Hightlight';
import { Header } from '@components/Header';
import { Container } from './styles';

export default function Groups() {
  return (
    <Container>
      <Header displayBackButton={false} />
      <HightLight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
}
