import ToastContainer from '@components/ToastContainer/index.jsx';
import Singleton from '@service/singleton.js';

const ToastWorker = {
  createToast: Singleton.createToast,
  setToastTheme: Singleton.setToastTheme,
  setToastContainerMargin: Singleton.setToastContainerMargin,
};
export { ToastContainer, ToastWorker };
