import { useCallback, useState } from 'react';

const useGetMenuHandlers = () => {
  const [state, setState] = useState(null);

  const handleOpen = useCallback(
    e => {
      setState(e?.currentTarget);
    },
    [state]
  );

  const handleClose = useCallback(() => {
    setState(null);
  });

  return [state, handleOpen, handleClose];
};

export default useGetMenuHandlers;
