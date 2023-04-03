import { v4 } from 'uuid';

import positions from '@constants/positions';
import colorsTheme from '@constants/theme';

class Singleton {
  constructor() {
    this.toastTheme = colorsTheme;
  }

  setToastContainer(toastContainer) {
    this.toastContainer = toastContainer;
  }

  setToastTheme(theme) {
    this.toastTheme = Object.assign(colorsTheme, theme);
  }

  createToast({
    title,
    description,
    position = positions.topLeft,
    type = 'info',
    duration = 3000,
    slideDirection = 'top',
    animationName,
    color,
    margin = 10,
  }) {
    this.toastContainer?.createNewToast({
      title,
      description,
      position,
      type,
      duration,
      slideDirection,
      animationName,
      color,
      margin,
      id: v4(),
    });
  }

  removeToast(toastId) {
    this.toastContainer?.removeToast(toastId);
  }
}
export default new Singleton();
