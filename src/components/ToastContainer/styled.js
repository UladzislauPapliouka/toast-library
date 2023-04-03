import styled, { css } from 'styled-components';

import {
  gridAreaFromPositionForDesktop,
  gridAreaFromPositionForMobile,
} from '@constants/positions';

export const ToastContainerWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  overflow: hidden;
  //TODO: rename that property
  padding: ${({ theme: { containerMargin } }) => containerMargin}px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'tl tr'
    'bl br';
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreackpoints.md}px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: 'tr' 'br';
  }
`;
export const ToastPositionWrapper = styled.div`
  display: flex;

  ${({ position, theme: { sizes } }) => css`
    grid-area: ${gridAreaFromPositionForDesktop[position]};
    flex-direction: ${position.startsWith('top') ? 'column' : 'column-reverse'};
    align-items: ${position.endsWith('left') ? 'flex-start' : 'flex-end'}};
  @media screen and (max-width: ${sizes.displayBreackpoints.md}px) {
    grid-area: ${gridAreaFromPositionForMobile[position]};
    align-items: center;
  }
  `};
`;
