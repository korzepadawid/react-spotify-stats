export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const SET_TIME_RANGE = 'SET_TIME_RANGE';
export const SIGN_OUT = 'SIGN_OUT';

export type Action =
  | { type: typeof AUTH_REQUEST }
  | { type: typeof AUTH_SUCCESS; payload: { accessToken: string } }
  | { type: typeof AUTH_FAILURE }
  | { type: typeof SET_TIME_RANGE; payload: { key: string; value: string } }
  | { type: typeof SIGN_OUT };

export type Dispatch = (action: Action) => void;

export interface State {
  accessToken: string | '';
  createdAt: number;
  authStatus: string;
  timeRange: {
    artists: string;
    tracks: string;
  };
}
