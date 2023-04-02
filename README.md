Toast library: library to add toasts in your project
## Installation
### NPM
    npm i toast-library-wil@latest
### Yarn
    yarn add toast-library-wil@latest
## Usage
    import { ToastContainer } from 'toast-library-wil';
Add `ToastContainer` to your application

## Configure and adding Toast
To work with toast you need to import instance from library

    import { ToastWorker } from 'toast-library-wil';

### Theming
To change theme use  `ToastWorker.setToastTheme(theme)`, `theme` properties :

    {
        info: {
            background: colorName or HEX,
            color: colorName or HEX,
        },
        warning: {
            background: colorName or HEX,
            color: colorName or HEX,
        },
        error: {
            background: colorName or HEX,
            color: colorName or HEX,
        },
        success: {
            background: colorName or HEX,
            color: colorName or HEX,
        },
    };
To set container margin from viewport edges use `ToastWorker.setToastContainerMargin(number)`

### Working with toasts
To crate toast use `ToastWorker.createToast(toastConfig)`
`toastConfig` structure :

    {
        title,
        description,
        position, // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
        type, // 'info' | 'warning' | 'error' | 'success'
        duration, // toast duration in ms
        slideDirection,  // 'top' | 'bottom' | 'left' | 'right'
        animationName, // 'opacity' | 'slide'
        color, // custom color for one toast
        margin, // custom margin for one toast (string like margin in CSS)
    }