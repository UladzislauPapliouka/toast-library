import { v4 } from 'uuid';

class Singleton {
    getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    setToastContainer(toastContainer) {
        this.toastContainer = toastContainer;
    }

    createToast({
        title,
        description = '',
        position = 'top-left',
        type = 'info',
        duration = 3000,
    }) {
        this.toastContainer?.createNewToast({
            title,
            description,
            position,
            type,
            duration,
            id: v4(),
        });
    }

    removeToast(toastId) {
        this.toastContainer?.removeToast(toastId);
    }
}

export default new Singleton();
