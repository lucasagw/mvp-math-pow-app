import Toast, { ToastOptions } from 'react-native-root-toast';
// Theme
import theme from '../../theme/theme';

class ToastService {
  options: ToastOptions = {};
  constructor(
    options: ToastOptions = {
      backgroundColor: theme.color.green,
      textColor: theme.color.black,
      duration: Toast.durations.LONG,
    }
  ) {
    this.options = options;
  }

  handleSuccessMessage(message: string) {
    Toast.show(message, this.options);
  }

  handleErrorMessage(
    message: string,
    options: ToastOptions = {
      ...this.options,
      backgroundColor: theme.color.red,
      textColor: theme.color.white,
    }
  ) {
    Toast.show(message, options);
  }

  handleWarningMessage(
    message: string,
    options: ToastOptions = {
      ...this.options,
      backgroundColor: theme.color.accent,
      textColor: theme.color.white,
    }
  ) {
    Toast.show(message, options);
  }
}

const toastService = new ToastService();

export default toastService;
