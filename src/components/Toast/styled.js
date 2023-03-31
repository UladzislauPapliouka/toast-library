import styled, { css, keyframes } from 'styled-components';

const sizesMixin = (sizeName, sizes) => css`
  gap: ${sizes.marginSizes[sizeName]}px;
  border-radius: ${sizes.borderRadiuses[sizeName]}px;
  padding: ${sizes.paddingSizes[sizeName]}px ${sizes.paddingSizes[sizeName]}px;
  margin: ${sizes.marginSizes[sizeName] / 2}px;
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
const getAnimationParams = (duration) => css`
  animation-delay: 0s, ${duration / 1000 - 0.5}s;
  animation-duration: 0.5s, 0.5s;
  animation-iteration-count: 1, 1;
  animation-fill-mode: forwards, forwards;
`;
const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }`;
const opacityAnimation = (duration) => css`
  animation-name: ${show}, ${hide};
  ${getAnimationParams(duration)}
`;
const getSlidePosition = (direction, position) => {
  switch (direction) {
    case 'bottom':
      return css`
        transform: translate(0, ${position}px);
      `;
    case 'left':
      return css`
        transform: translate(${-position}px, 0);
      `;
    case 'right':
      return css`
        transform: translate(${position}px, 0);
      `;
    default:
      return css`
        transform: translate(0, ${-position}px);
      `;
  }
};
const slideIn = (direction) => keyframes`
  from {
    opacity: 0;
    ${getSlidePosition(direction, 200)}
}
to {
    opacity: 1;
    ${getSlidePosition(direction, 0)}
}
`;
const slideOut = (direction) => keyframes`
    from {
      opacity: 1;
      ${getSlidePosition(direction, 0)}
    }
    to {
      opacity: 0;
      ${getSlidePosition(direction, 200)}
    }
`;
const slideAnimation = (duration, direction) => css`
  ${getAnimationParams(duration)}
  animation-name: ${slideIn(direction)}, ${slideOut(direction)};
`;

const ToastWrapper = styled.div`
  position: relative;
  display: grid;
  pointer-events: all;
  place-items: center;
  box-sizing: border-box;
  background-color: ${({ type, theme: { colors } }) => colors[type].background};
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
  ${({ duration, slideDirection, animationName }) => {
    if (!animationName) return ``;
    switch (animationName) {
      case 'opacity':
        return opacityAnimation(duration);
      default:
        return slideAnimation(duration, slideDirection);
    }
  }}
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
export { CloseButton, ToastDataWrapper, ToastDescription, ToastTitle };
