import styled from 'styled-components';

const ToastContainerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
`;
const ToastPositionWrapper = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    &[data-cy='top-right'],
    &[data-cy='bottom-right'] {
        align-items: flex-end;
    }
    &[data-cy='top'],
    &[data-cy='bottom'] {
        align-items: center;
    }
    &[data-cy='bottom-left'],
    &[data-cy='bottom'],
    &[data-cy='bottom-right'] {
        flex-direction: column-reverse;
    }
`;
export { ToastContainerWrapper, ToastPositionWrapper };
