import HightLight from '@components/Hightlight';
import ListEmpty from '@components/ListEmpty';
import GroupCard from '@components/GroupCard';
import { Container } from './styles';
import { Header } from '@components/Header';
import { FlatList } from 'react-native';
import { useState } from 'react';

export default function Groups() {
  const [groups, setGroups] = useState<{ name: string }[]>([]);

  const handleOnPress = () => {
    console.log('PRESSED');
  };

  return (
    <Container>
      <Header displayBackButton={false} />
      <HightLight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <GroupCard title={item.name} onPress={handleOnPress} />
        )}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={<ListEmpty />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
    </Container>
  );
}
