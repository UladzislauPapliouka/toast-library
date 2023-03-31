import styled from 'styled-components';

const ToastContainerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    margin: ${({ theme: { containerMargin } }) => containerMargin}px;
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
const ToastPositionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    &[data-cy='top-right'] {
        grid-area: tr;
    }
    &[data-cy='bottom-right'] {
        grid-area: br;
    }
    &[data-cy='bottom-left'] {
        grid-area: bl;
    }
    &[data-cy='top-left'] {
        grid-area: tl;
    }
    &[data-cy='top-right'],
    &[data-cy='bottom-right'] {
        align-items: flex-end;
        @media screen and (max-width: ${({ theme: { sizes } }) =>
                sizes.displayBreackpoints.md}px) {
            align-items: center;
        }
    }
    &[data-cy='bottom-left'],
    &[data-cy='bottom-right'] {
        flex-direction: column-reverse;
    }
`;
export { ToastContainerWrapper, ToastPositionWrapper };
