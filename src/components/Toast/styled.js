import styled, { css, keyframes } from 'styled-components';

import {
  animationParamsMixin,
  closeButtonSizesMixin,
  descriptionTextSizesMixin,
  sizesMixin,
  slidePositionMixin,
  titleTextSizesMixin,
} from '@utils/stylesMixins';

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

const slideIn = (direction) => keyframes`
  from {
    opacity: 0;
    ${slidePositionMixin(direction, 200)}
}
to {
    opacity: 1;
    ${slidePositionMixin(direction, 0)}
}
`;
const slideOut = (direction) => keyframes`
    from {
      opacity: 1;
      ${slidePositionMixin(direction, 0)}
    }
    to {
      opacity: 0;
      ${slidePositionMixin(direction, 200)}
    }
`;

const opacityAnimation = (duration) => css`
  animation-name: ${show}, ${hide};
  ${animationParamsMixin(duration)}
`;

const slideAnimation = (duration, direction) => css`
  ${animationParamsMixin(duration)}
  animation-name: ${slideIn(direction)}, ${slideOut(direction)};
`;

export const ToastWrapper = styled.div`
  position: relative;
  display: grid;
  pointer-events: all;
  place-items: center;
  box-sizing: border-box;
  margin: ${({ margin }) => margin};
  background-color: ${({ type, theme: { colors }, color }) =>
    color || colors[type].background};
  color: ${({ type = 'info', theme: { colors } }) => colors[type].color};
  ${({ theme: { sizes }, margin }) => sizesMixin('xxl', sizes, margin)};
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreackpoints.xl}px) {
    ${({ theme: { sizes }, margin }) => sizesMixin('xl', sizes, margin)};
  }
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreackpoints.lg}px) {
    ${({ theme: { sizes }, margin }) => sizesMixin('lg', sizes, margin)};
  }
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreackpoints.md}px) {
    ${({ theme: { sizes }, margin }) => sizesMixin('md', sizes, margin)};
  }
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreackpoints.sm}px) {
    ${({ theme: { sizes }, margin }) => sizesMixin('sm', sizes, margin)};
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
export const CloseButton = styled.button`
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
export const ToastDataWrapper = styled.div`
  display: flex;
  justify-self: start;
  flex-direction: column;
`;
export const ToastTitle = styled.span`
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
export const ToastDescription = styled.span`
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
