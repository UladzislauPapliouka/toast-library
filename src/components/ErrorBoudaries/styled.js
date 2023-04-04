import styled from 'styled-components';

export const ErrorMessage = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxl}px;
`;

export const ErrorComponentStack = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.md}px;
`;
