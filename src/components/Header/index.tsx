import LogoImg from '@assets/logo.png';
import { Container, Logo, BackButton, BackIcon } from './styles';

export function Header() {
  return (
    <Container>
      <BackButton>
        <BackIcon color="#fff" size={32} />
      </BackButton>
      <Logo source={LogoImg} />
    </Container>
  );
}
