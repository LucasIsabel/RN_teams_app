import HightLight from '@components/Hightlight';
import GroupCard from '@components/GroupCard';
import { Header } from '@components/Header';
import { Container, EmptyState } from './styles';
import { FlatList } from 'react-native';
import { useState } from 'react';

export default function Groups() {
  const [group, setGroup] = useState<{ name: string }[]>([
    {
      name: 'Lucas De Oliveira Isabel',
    },
    {
      name: 'Carlos Santos',
    },
    {
      name: 'Carlos Santos',
    },
    {
      name: 'Carlos Santos',
    },
    {
      name: 'Carlos Santos',
    },
    {
      name: 'Carlos Santos',
    },
    {
      name: 'Carlos Santos',
    },
    {
      name: 'Carlos Santos',
    },
  ]);

  const handleOnPress = () => {
    console.log('PRESSED');
  };

  return (
    <Container>
      <Header displayBackButton={false} />
      <HightLight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={group}
        renderItem={({ item }) => (
          <GroupCard title={item.name} onPress={handleOnPress} />
        )}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={
          <EmptyState> Nenhum time cadastrado .. </EmptyState>
        }
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
