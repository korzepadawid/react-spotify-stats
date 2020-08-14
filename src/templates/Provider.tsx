import React, { useReducer, useEffect } from 'react';
import { reducer } from '../reducer';
import { StateContext, DispatchContext } from '../context';
import { loadState, saveState } from '../utils';

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;
