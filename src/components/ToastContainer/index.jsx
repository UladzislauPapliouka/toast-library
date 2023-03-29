import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { ToastContainerWrapper, ToastPositionWrapper } from './styled';
import Toast from '../Toast';

const ToastContainer = () => {
    const positions = [
        'top-left',
        'top',
        'top-right',
        'bottom-left',
        'bottom',
        'bottom-right',
    ];
    const [titles, setTitles] = useState(['a', 'a1', 'a2']);
    useEffect(() => {
        setTimeout(() => {
            setTitles(titles.slice(0, 2));
        }, 3000);
    }, []);
    return ReactDOM.createPortal(
        <ToastContainerWrapper>
            {positions.map((pos) => (
                <ToastPositionWrapper data-cy={pos}>
                    {titles.map((t) => (
                        <Toast toastTitle={t} />
                    ))}
                </ToastPositionWrapper>
            ))}
        </ToastContainerWrapper>,
        document.getElementsByTagName('body')[0],
    );
};
export default ToastContainer;
