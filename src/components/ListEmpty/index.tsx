import { Container, Message, SmileySadIcon } from './styles';

type Props = {
  message?: string;
};

export default function ListEmpty({
  message = 'Sem registros até o momento',
}: Props) {
  return (
    <Container>
      <SmileySadIcon />
      <Message> {message} </Message>
    </Container>
  );
}
