import LogoImg from '@assets/logo.png';
import { Container, Logo, BackButton, BackIcon } from './styles';

export function Header({ displayBackButton }: { displayBackButton?: boolean }) {
  return (
    <Container>
      {displayBackButton && (
        <BackButton>
          <BackIcon color="#fff" size={32} />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
}
