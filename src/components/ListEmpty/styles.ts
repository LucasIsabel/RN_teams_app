import styled, { css } from 'styled-components/native';
import { SmileyXEyes } from 'phosphor-react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    text-align: center;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 10px;
`;

export const SmileySadIcon = styled(SmileyXEyes).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  weight: 'thin',
  size: 40,
}))``;
