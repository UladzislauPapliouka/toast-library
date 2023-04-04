import ToastContainer from '@components/ToastContainer';
import Singleton from '@service/singleton';

const ToastWorker = {
  createToast: Singleton.createToast.bind(Singleton),
  setToastTheme: Singleton.setToastTheme.bind(Singleton),
};
export { ToastContainer, ToastWorker };
