import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.info.background};
  color: ${({ theme: { colors } }) => colors.info.color};
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.md}px;
  border: none;
  cursor: pointer;
`;
export default Button;
