import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonIconTypeStyleProps, Icon } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ type = 'PRIMARY', icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
