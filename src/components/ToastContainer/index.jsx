import React from 'react';
import * as ReactDOM from 'react-dom';
import { ToastContainerWrapper, ToastPositionWrapper } from './styled';
import Toast from '../Toast';
import useToasts from '../../hooks/useToasts';
import singleton from '../../constants/singleton';

const ToastContainer = () => {
    const positions = [
        'top-left',
        'top',
        'top-right',
        'bottom-left',
        'bottom',
        'bottom-right',
    ];
    const { toasts } = useToasts();
    return ReactDOM.createPortal(
        <ToastContainerWrapper>
            {positions.map((pos) => (
                <ToastPositionWrapper
                    onClick={() => singleton.getInstance().createToast('fd')}
                    data-cy={pos}
                >
                    {toasts.map((t) => (
                        <Toast
                            toastTitle={t.title}
                            onClick={() =>
                                singleton.getInstance().removeToast(t.id)
                            }
                        />
                    ))}
                </ToastPositionWrapper>
            ))}
        </ToastContainerWrapper>,
        document.getElementsByTagName('body')[0],
    );
};
export default ToastContainer;
