import HightLight from '@components/Hightlight';
import Filter from '@components/Filter';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Form, HeaderList, PlayerQuantity } from './styles';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { PalyerCard } from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import { Button } from '@components/Button';

export default function Player() {
  const [team, setTeam] = useState<string>('Time A');
  const [players, setPlayers] = useState<string[]>([
    'Lucas',
    'Carlos',
    'Felipe',
    'Matheus',
    'Ronaldo',
    'Elias',
  ]);

  const onRemove = () => {};

  return (
    <Container>
      <Header displayBackButton />
      <HightLight
        title="Nome da turma"
        subtitle="adicione a galera para os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Filter title={item} isActive={team === item} />
          )}
          horizontal
        />
        <PlayerQuantity> {players.length} </PlayerQuantity>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PalyerCard name={item} onRemove={onRemove} />
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover time" type="SECONDARY" />
    </Container>
  );
}
