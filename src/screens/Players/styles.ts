import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 32px 0;
`;

export const PlayerQuantity = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
