import { Container, Title, UsersThreeIcon } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = { title: string } & TouchableOpacityProps;

export default function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <UsersThreeIcon />
      <Title> {title} </Title>
    </Container>
  );
}
