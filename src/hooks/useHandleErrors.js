import { useLayoutSnackbar } from 'components/shared/layout-provider';

const useHandleErrors = () => {
  const {snackbar, setSnackbar} = useLayoutSnackbar();

  const handleErrors = (error) => {
    let message;

    if(error && error.response) {
      try {
        switch (error.response.status) {
          case 401:
            message = `Status code ${error.response.status} You are not authorized`
            break;
          case 403:
            message = `Status code ${error.response.status} Forbidden, You don't have access to the required url`
            break;
          case 400:
            message = `Status code ${error.response.status} Bad Request`
            break;
          case 404:
            message = `Status code ${error.response.status} The page you are requesting is not found`
            break;
          default:
            message = `Status code ${error.response.status} Something went wrong`
        }
      } catch (e) {
        message = "Something went wrong and the problem has been reported to our support team!";
        // notify Airbrake or any service like it
      }
    } else if (error.request) {
      // The request was made but no response was received
      message = "Something went wrong and the problem has been reported to our support team!";
    } else {
      // Something happened in setting up the request
      message = "Something went wrong and the problem has been reported to our support team!";
    }
  
    setSnackbar({
      ...snackbar,
      open: true,
      severity: 'error',
      message: message
    });
  };

  return {
    handleErrors,
  };
};
export default useHandleErrors;
