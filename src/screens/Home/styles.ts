import styled from 'styled-components/native';

export const container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.padding.small};
`;
