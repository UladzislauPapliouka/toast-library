import styled from 'styled-components';

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
  flex-direction: column;
  &[data-position='top-right'] {
    grid-area: tr;
  }
  &[data-position='bottom-right'] {
    grid-area: br;
  }
  &[data-position='bottom-left'] {
    grid-area: bl;
    @media screen and (max-width: ${({ theme: { sizes } }) =>
        sizes.displayBreackpoints.md}px) {
      grid-area: br;
      align-items: center;
    }
  }
  &[data-position='top-left'] {
    grid-area: tl;
    @media screen and (max-width: ${({ theme: { sizes } }) =>
        sizes.displayBreackpoints.md}px) {
      grid-area: tr;
      align-items: center;
    }
  }
  &[data-position='top-right'],
  &[data-position='bottom-right'] {
    align-items: flex-end;
    @media screen and (max-width: ${({ theme: { sizes } }) =>
        sizes.displayBreackpoints.md}px) {
      align-items: center;
    }
  }
  &[data-position='bottom-left'],
  &[data-position='bottom-right'] {
    flex-direction: column-reverse;
  }
`;
