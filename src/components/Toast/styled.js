import styled from 'styled-components';

const ToastWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: HelveticaNeueCyr, Regular;
    font-weight: 900;
    font-size: 30px;
    border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
    padding: ${({ theme: { sizes } }) => sizes.paddingSizes.md}px
        ${({ theme: { sizes } }) => sizes.paddingSizes.sm}px;
    background-color: ${({ type, theme: { colors } }) =>
        colors[type].background};
    color: ${({ type = 'info', theme: { colors } }) => colors[type].color};
    max-width: ${({ theme: { sizes } }) => sizes.toastMaxWidth.md}px;
    max-height: ${({ theme: { sizes } }) => sizes.toastMaxHeight.md}px;
    gap: ${({ theme: { sizes } }) => sizes.marginSizes.md}px;
    & > svg {
        font-size: ${({ theme: { sizes } }) => sizes.iconSizes.md}px;
    }
`;
const CloseButton = styled.button`
    position: absolute;
    font-size: ${({ theme: { sizes } }) => sizes.iconSizes.sm}px;
    padding: 0;
    right: 10px;
    color: inherit;
    top: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
`;
export default ToastWrapper;
export { CloseButton };
