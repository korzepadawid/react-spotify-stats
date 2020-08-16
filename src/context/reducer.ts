import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SET_TIME_RANGE,
  SIGN_OUT,
  State,
  Action,
} from './types';

export const initialState: State = {
  accessToken: '',
  authStatus: 'idle',
  createdAt: 0,
  timeRange: {
    artists: 'medium_term',
    tracks: 'medium_term',
  },
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, authStatus: 'pending' };

    case AUTH_SUCCESS:
      return {
        ...state,
        authStatus: 'resolved',
        accessToken: action.payload.accessToken,
        createdAt: Date.now(),
      };

    case AUTH_FAILURE:
      return { ...state, authStatus: 'rejected' };

    case SIGN_OUT:
      return { ...initialState, authStatus: 'idle' };

    case SET_TIME_RANGE:
      return {
        ...state,
        timeRange: { ...state.timeRange, [action.payload.key]: action.payload.value },
      };

    default:
      throw new Error('Unhandled action type.');
  }
};
