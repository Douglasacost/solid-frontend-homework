import Toastify from 'toastify-js'

const useToastMessage = () => {
    return {
        show: (message: string, type: 'success' | 'error' | 'info' | 'warning') => {
          Toastify({
            text: message,
            duration: 6000,
            close: true,
            newWindow: true,
            gravity: 'top',
            position: 'right',
            className: `card toast toast__${type}`,
            stopOnFocus: true,
          }).showToast();
        },
    }
}

export default useToastMessage;