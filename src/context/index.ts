import React from 'react';
import { State, Dispatch } from './types';

export const StateContext = React.createContext<State | undefined>(undefined);
export const DispatchContext = React.createContext<Dispatch | undefined>(undefined);
