import { initialState } from '../reducer';
import { State } from '../types';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) return initialState;
    const state = JSON.parse(serializedState);
    const currentTimestamp = Date.now();
    const diffrence = currentTimestamp - state.createdAt;
    if (diffrence < 3600000) {
      return state;
    }
    return initialState;
  } catch (err) {
    return initialState;
  }
};

export const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem('state', serializedState);
  } catch (error) {
    return undefined;
  }
};

export const getPathname = () => {
  const pathname = window.location.pathname.slice(1);
  return pathname;
};
