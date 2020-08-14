import { useContext } from 'react';
import { DispatchContext } from '../context';

const useAppDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a Provider');
  }
  return context;
};

export default useAppDispatch;
