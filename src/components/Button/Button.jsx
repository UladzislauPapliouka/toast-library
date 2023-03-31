import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.md}px;
  border: none;
  cursor: pointer;
`;
export default Button;
