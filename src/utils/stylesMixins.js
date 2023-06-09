import { css } from 'styled-components';

export const toastMarginMixin = (position, margin) => {
  const topMargin = position.startsWith('top') ? 10 : 0;
  const rightMargin = position.endsWith('right') ? margin : 0;
  const bottomMargin = position.startsWith('bottom') ? 10 : 0;
  const leftMargin = position.endsWith('left') ? margin : 0;
  return css`
    margin: ${topMargin}px ${rightMargin}px ${bottomMargin}px ${leftMargin}px;
  `;
};

export const sizesMixin = (sizeName, sizes) => css`
  gap: ${sizes.marginSizes[sizeName]}px;
  border-radius: ${sizes.borderRadiuses[sizeName]}px;
  padding: ${sizes.paddingSizes[sizeName]}px ${sizes.paddingSizes[sizeName]}px;
  width: ${sizes.toastWidth[sizeName]}px;

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

export const titleTextSizesMixin = (sizeName, sizes) => css`
  font-size: ${sizes.titleFontSizes[sizeName]}px;
  max-width: ${sizes.textMaxWidth[sizeName]}px;
`;
export const descriptionTextSizesMixin = (sizeName, sizes) => css`
  font-size: ${sizes.descriptionFontSizes[sizeName]}px;
  max-width: ${sizes.textMaxWidth[sizeName]}px;
`;

export const closeButtonSizesMixin = (sizeName, sizes) => css`
  font-size: ${sizes.titleFontSizes[sizeName]}px;
  right: ${sizes.paddingSizes[sizeName]}px;
`;
export const animationParamsMixin = (duration) => css`
  animation-delay: 0s, ${duration / 1000 - 0.5}s;
  animation-duration: 0.5s, 0.5s;
  animation-iteration-count: 1, 1;
  animation-fill-mode: forwards, forwards;
`;
export const slidePositionMixin = (direction, position) => {
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
