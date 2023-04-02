import ToastContainer from '@components/ToastContainer/index.jsx';
import Singleton from '@service/singleton.js';

const ToastWorker = {
  createToast: Singleton.createToast.bind(Singleton),
  setToastTheme: Singleton.setToastTheme.bind(Singleton),
  setToastContainerMargin: Singleton.setToastContainerMargin.bind(Singleton),
};
export { ToastContainer, ToastWorker };
