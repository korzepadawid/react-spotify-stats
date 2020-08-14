import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SET_TIME_RANGE,
  SIGN_OUT,
  State,
  Action,
} from '../types';

export const initialState: State = {
  accessToken: '',
  isLoading: false,
  isError: false,
  createdAt: 0,
  timeRange: {
    artists: 'medium_term',
    tracks: 'medium_term',
  },
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        accessToken: action.payload.accessToken,
        createdAt: Date.now(),
      };

    case AUTH_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case SIGN_OUT:
      return { ...initialState };

    case SET_TIME_RANGE:
      return {
        ...state,
        timeRange: { ...state.timeRange, [action.payload.key]: action.payload.value },
      };

    default:
      throw new Error('Unhandled action type.');
  }
};
