import React from 'react';
import * as ReactDOM from 'react-dom';
import { ToastContainerWrapper, ToastPositionWrapper } from './styled';
import Toast from '../Toast';
import useToasts from '../../hooks/useToasts';
import singleton from '../../constants/singleton';
import positions from '../../constants/positions';

const ToastContainer = () => {
    const { toasts } = useToasts();
    return ReactDOM.createPortal(
        <ToastContainerWrapper>
            {Object.keys(positions).map((positionName) => (
                <ToastPositionWrapper
                    onClick={() =>
                        singleton.getInstance().createToast({
                            title: 'rddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                            position: positions[positionName],
                            type: 'success',
                            description:
                                'dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                        })
                    }
                    data-cy={positions[positionName]}
                >
                    {toasts.map((t) =>
                        t.position === positions[positionName] ? (
                            <Toast
                                toastTitle={t.title}
                                toastDescription={t.description}
                                type={t.type}
                                handleClose={() =>
                                    singleton.getInstance().removeToast(t.id)
                                }
                            />
                        ) : null,
                    )}
                </ToastPositionWrapper>
            ))}
        </ToastContainerWrapper>,
        document.getElementsByTagName('body')[0],
    );
};
export default ToastContainer;
