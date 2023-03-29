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

    createToast(title) {
        this.toastContainer?.createNewToast({ title, id: 1 });
    }

    removeToast(toastId) {
        this.toastContainer?.removeToast(toastId);
    }
}

export default new Singleton();
