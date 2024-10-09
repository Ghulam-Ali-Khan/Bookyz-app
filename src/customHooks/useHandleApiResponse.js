import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

const useHandleApiResponse = (error, isSuccess, successMessage = 'Operation successful!', back = false) => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar(successMessage, { variant: 'success', preventDuplicate: true });
      if (back) {
        router.back();
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      try {
        if ('detail' in error.data) {
          enqueueSnackbar(error.data.detail, { variant: 'error', preventDuplicate: true });
          return;
        }

        if ('message' in error.data || 'Message' in error.data) {
          enqueueSnackbar(error.data.message || error.data.Message, {
            variant: 'error',
            preventDuplicate: true,
          });
        }

        if ('non_field_errors' in error.data) {
          enqueueSnackbar(error.data.non_field_errors[0], { variant: 'error', preventDuplicate: true });
        } else {
          const errorMsg = Object.entries(error.data)[0];
          if (Array.isArray(errorMsg[1])) {
            enqueueSnackbar(errorMsg[1][0], { variant: 'error', preventDuplicate: true });
            return;
          }
          enqueueSnackbar(errorMsg[1], { variant: 'error', preventDuplicate: true });
        }
      } catch (err) {
        enqueueSnackbar('Unhandled exception has occurred!', { variant: 'error', preventDuplicate: true });
      }
    }
  }, [error]);

  return null;
};

export default useHandleApiResponse;
