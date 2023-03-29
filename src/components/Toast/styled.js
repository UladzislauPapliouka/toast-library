import styled, { css } from 'styled-components';

const sizesMixin = (sizeName, sizes) => css`
    margin: ${sizes.marginSizes[sizeName] / 2}px;
    gap: ${sizes.marginSizes[sizeName]}px;
    border-radius: ${sizes.borderRadiuses[sizeName]}px;
    padding: ${sizes.paddingSizes[sizeName]}px ${sizes.paddingSizes[sizeName]}px;

    max-width: ${sizes.toastMaxWidth[sizeName]}px;
    width: fit-content;
    min-width: ${sizes.toastMinWidth[sizeName]}px;

    max-height: ${sizes.toastMaxHeight[sizeName]}px;
    grid-template-columns:
        ${sizes.iconSizes[sizeName]}px
        1fr
        ${sizes.titleFontSizes[sizeName]}px;
    & > svg {
        font-size: ${sizes.iconSizes[sizeName]}px;
        min-width: ${sizes.iconSizes[sizeName]}px;
        flex-grow: 1;
    }
`;
const titleTextSizesMixin = (sizeName, sizes) => css`
    font-size: ${sizes.titleFontSizes[sizeName]}px;
    max-width: ${sizes.toastMaxWidth[sizeName] -
    sizes.paddingSizes[sizeName] * 2 -
    sizes.titleFontSizes[sizeName] * 2 -
    sizes.iconSizes[sizeName] -
    sizes.marginSizes[sizeName]}px;
`;
const descriptionTextSizesMixin = (sizeName, sizes) => css`
    font-size: ${sizes.descriptionFontSizes[sizeName]}px;
    max-width: ${sizes.toastMaxWidth[sizeName] -
    sizes.paddingSizes[sizeName] * 4 -
    sizes.titleFontSizes[sizeName] -
    sizes.iconSizes[sizeName] -
    sizes.marginSizes[sizeName]}px;
`;

const closeButtonSizesMixin = (sizeName, sizes) => css`
    font-size: ${sizes.titleFontSizes[sizeName]}px;
    right: ${sizes.paddingSizes[sizeName]}px;
`;

const ToastWrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    box-sizing: border-box;
    background-color: ${({ type, theme: { colors } }) =>
        colors[type].background};
    color: ${({ type = 'info', theme: { colors } }) => colors[type].color};

    ${({ theme: { sizes } }) => sizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => sizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => sizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => sizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => sizesMixin('sm', sizes)};
    }
`;
const CloseButton = styled.button`
    position: absolute;
    padding: 0;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    ${({ theme: { sizes } }) => closeButtonSizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('sm', sizes)};
    }
`;
const ToastDataWrapper = styled.div`
    display: flex;
    justify-self: start;
    flex-direction: column;
`;
const ToastTitle = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({ theme: { sizes } }) => titleTextSizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('sm', sizes)};
    }
`;
const ToastDescription = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({ theme: { sizes } }) => descriptionTextSizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('sm', sizes)};
    }
`;

export default ToastWrapper;
export { CloseButton, ToastTitle, ToastDescription, ToastDataWrapper };
