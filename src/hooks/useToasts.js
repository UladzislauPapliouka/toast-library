import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import singleton from '../constants/singleton';

const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);
    useImperativeHandle(ref, () => ({
        createNewToast(newToast) {
            if (toasts.length < 3) {
                setToasts((prevState) => [...prevState, newToast]);
                setTimeout(
                    () => this.removeToast(newToast.id),
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
        singleton.getInstance().setToastContainer(ref.current);
    }, [toasts]);

    return {
        toasts,
    };
};
export default useToast;
