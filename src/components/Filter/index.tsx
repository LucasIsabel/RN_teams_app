import { TouchableOpacityProps } from 'react-native';
import { FilterStyleProps, Container, Title } from './style';

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export default function Filter({ isActive = false, title, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title> {title} </Title>
    </Container>
  );
}
