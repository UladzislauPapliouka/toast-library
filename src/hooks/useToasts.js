import { useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

import Singletone from '@constants/singleton.js';

const useToast = () => {
  const [toasts, setToasts] = useState([]);
  const ref = useRef(null);
  useImperativeHandle(ref, () => ({
    createNewToast(newToast) {
      if (toasts.filter((t) => t.position === newToast.position).length < 3) {
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

  useLayoutEffect(() => {
    Singletone.getInstance().setToastContainer(ref.current);
  }, []);

  return {
    toasts,
  };
};
export default useToast;
