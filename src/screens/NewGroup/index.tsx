import HightLight from '@components/Hightlight';
import { Container, Content } from './styles';
import { Header } from '@components/Header';
import { UsersThreeIcon } from '@components/GroupCard/styles';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export default function NewGroup() {
  return (
    <Container>
      <Header displayBackButton />
      <Content>
        <UsersThreeIcon weight="thin" />
        <HightLight
          title="Nova Turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" type="PRIMARY" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
