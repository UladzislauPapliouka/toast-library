import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import Singletone from '../constants/singleton';

const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);
    useImperativeHandle(ref, () => ({
        createNewToast(newToast) {
            if (
                toasts.filter((t) => t.position === newToast.position).length <
                3
            ) {
                setToasts((prevState) => [...prevState, newToast]);
                setTimeout(
                    () => this.removeToast(newToast.id, newToast.position),
                    newToast.duration,
                );
            }
        },
        removeToast: (toastId) => {
            setToasts((prevState) =>
                prevState.filter((toast) => toastId !== toast.id),
            );
        },
    }));

    useEffect(() => {
        Singletone.getInstance().setToastContainer(ref.current);
    }, [toasts]);

    return {
        toasts,
    };
};
export default useToast;
