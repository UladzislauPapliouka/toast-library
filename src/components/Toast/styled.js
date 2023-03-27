import styled from 'styled-components';

const ToastWrapper = styled.div`
    display: flex;
    padding: ${({ theme: { sizes } }) => sizes.paddingSizes.md}px
        ${({ theme: { sizes } }) => sizes.paddingSizes.sm}px;
    background-color: ${({ theme: { colors } }) => colors.error};
    max-width: ${({ theme: { sizes } }) => sizes.toastMaxWidth.md}px;
    max-height: ${({ theme: { sizes } }) => sizes.toastMaxHeight.md}px;
    box-sizing: border-box;
`;
export default ToastWrapper;
