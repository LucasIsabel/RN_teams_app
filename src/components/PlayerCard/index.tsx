import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Icon, Name } from './styles';

type Props = {
  name: string;
  onRemove: Function;
};

export function PalyerCard({ name }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name> {name} </Name>
      <ButtonIcon icon="close" type="SECUNDARY" />
    </Container>
  );
}
