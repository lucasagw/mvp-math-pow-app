import styled from 'styled-components/native';

export const AuthHeaderWrapper = styled.View`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background-color: ${({ theme }) => theme.color.primary};
`;

export const AuthHeader = styled.View`
  width: 100%;
  min-height: 64px;
  padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
`;

export const AuthHeaderButton = styled.TouchableOpacity`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 20px;
  padding: ${({ theme }) => theme.padding.extraSmall};
`;
