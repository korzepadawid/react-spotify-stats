/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import { getPathname } from '../utils';
import useAppState from './useAppState';

export const ERROR = 'ERROR';
export const STARTED = 'STARTED';
export const SUCCESS = 'SUCCESS';

export interface State {
  items: any[];
  status: string;
}

const initialState: State = {
  items: [],
  status: 'idle',
};
export type Action =
  | { type: 'ERROR' }
  | { type: 'STARTED' }
  | { type: 'SUCCESS'; payload: { items: any[] } };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        status: 'rejected',
      };
    case STARTED:
      return {
        ...state,
        status: 'pending',
      };

    case SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        status: 'resolved',
      };

    default:
      throw new Error(`Unhandled action type.`);
  }
};

const useSpotifyData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const key = getPathname();
  const recents = key === 'recents';

  const { accessToken, timeRange } = useAppState();
  type TimeRangeType = typeof timeRange;
  const url = recents
    ? 'https://api.spotify.com/v1/me/player/recently-played?limit=50'
    : `https://api.spotify.com/v1/me/top/${key}?limit=50&time_range=${
        timeRange[key as keyof TimeRangeType]
      }`;

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const fetchData = async () => {
    try {
      dispatch({ type: STARTED });
      const { data } = await Axios(url, config);
      const resItems = recents ? data.items.map((item: any) => item.track) : data.items;
      dispatch({ type: SUCCESS, payload: { items: resItems } });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  useEffect(() => {
    fetchData();
  }, [timeRange, url]);
  return state;
};

export default useSpotifyData;
