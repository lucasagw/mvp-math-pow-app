import styled from 'styled-components/native';

export const CardWrapper = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  min-height: 48px;
  gap: ${({ theme }) => theme.margin.small};
  padding: ${({ theme }) => theme.padding.small};
  background-color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.margin.small};
  border-radius: ${({ theme }) => theme.radius.small};
`;

export const CardImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.small};
`;

export const CardContent = styled.View`
  display: flex;
`;
