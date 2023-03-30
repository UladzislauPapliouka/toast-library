import React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainerWrapper, ToastPositionWrapper } from './styled';
import Toast from '../Toast';
import useToasts from '../../hooks/useToasts';
import singleton from '../../constants/singleton';
import positions from '../../constants/positions';
import * as sizes from '../../constants/sizes';

const ToastContainer = () => {
    const { toasts } = useToasts();
    return ReactDOM.createPortal(
        <ThemeProvider
            theme={{
                colors: singleton.toastTheme,
                sizes,
                containerMargin: singleton.getInstance().containerMargin,
            }}
        >
            <ToastContainerWrapper>
                {Object.keys(positions).map((positionName) => (
                    <ToastPositionWrapper
                        key={positionName}
                        onClick={() =>
                            singleton.getInstance().createToast({
                                title: 'rddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                                position: positions[positionName],
                                type: 'info',
                                animationName: 'slide',
                                description:
                                    'dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                            })
                        }
                        data-cy={positions[positionName]}
                    >
                        {toasts.map((t) =>
                            t.position === positions[positionName] ? (
                                <Toast
                                    key={t.id}
                                    toastTitle={t.title}
                                    toastDescription={t.description}
                                    type={t.type}
                                    duration={t.duration}
                                    animationName={t.animationName}
                                    slideDirection={t.slideDirection}
                                    handleClose={() =>
                                        singleton
                                            .getInstance()
                                            .removeToast(t.id)
                                    }
                                />
                            ) : null,
                        )}
                    </ToastPositionWrapper>
                ))}
            </ToastContainerWrapper>
        </ThemeProvider>,
        document.getElementsByTagName('body')[0],
    );
};
export default ToastContainer;
