import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import singleton from '../constants/singleton';

const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);
    useImperativeHandle(ref, () => ({
        createNewToast(newToast) {
            if (toasts.length < 3) {
                setToasts((prevState) => [...prevState, newToast]);
                setTimeout(() => this.removeToast(newToast.id), 3000);
            }
        },
        removeToast: (toastId) => {
            const newToasts = toasts.filter((toast) => toastId !== toast.id);
            setToasts(newToasts);
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
