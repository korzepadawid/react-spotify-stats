import { useContext } from 'react';
import { StateContext } from '../context';

const useAppState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a Provider');
  }
  return context;
};

export default useAppState;
