import { ToastOptions, toast } from 'react-toastify';

interface PromiseMessages {
	pending: string;
	success: string;
	error: string;
}

export const showMessage = (message: string, body: ToastOptions = {}) => {
	return toast(message, {
		...body
	});
};
export const showPromise = <T>(
  promise: Promise<T>, 
  messages: PromiseMessages
) => {
  return toast.promise(promise, messages);
};

export const showSuccess = (message: string, body: ToastOptions = {}) => {
	return toast.success(message, {
		...body
	});
};
export const showError = (message: string, body: ToastOptions = {}) => {
	return toast.error(message, {
		...body
	});
};
export const showLoading = (message: string) => {
	return toast.loading(message);
};

export const showDismiss = (id: string | number) => { 
  return toast.dismiss(id);
};
