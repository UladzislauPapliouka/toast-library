import { v4 } from 'uuid';

import positions from './positions';
import colorsTheme from './theme';

class Singleton {
  constructor() {
    this.toastTheme = colorsTheme;

    this.containerMargin = 10;
  }

  getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }

  setToastContainer(toastContainer) {
    this.toastContainer = toastContainer;
  }

  setToastTheme(theme) {
    this.toastTheme = Object.assign(colorsTheme, theme);
  }

  setToastContainerMargin(margin) {
    this.containerMargin = margin;
  }

  createToast({
    title,
    description = '',
    position = positions.topLeft,
    type = 'info',
    duration = 3000,
    slideDirection = 'top',
    animationName,
  }) {
    this.toastContainer?.createNewToast({
      title,
      description,
      position,
      type,
      duration,
      slideDirection,
      animationName,
      id: v4(),
    });
  }

  removeToast(toastId) {
    this.toastContainer?.removeToast(toastId);
  }
}
export default new Singleton();
