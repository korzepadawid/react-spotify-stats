import Axios, { AxiosRequestConfig } from 'axios';
import qs from 'query-string';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SIGN_OUT,
  Dispatch,
  Action,
  SET_TIME_RANGE,
} from '../types';

export const signIn = async (dispatch: Dispatch, code: string) => {
  dispatch({ type: AUTH_REQUEST });
  const requestData = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT,
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  };

  const config: AxiosRequestConfig = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(requestData),
    url: 'https://accounts.spotify.com/api/token',
  };

  try {
    const {
      data: { access_token: accessToken },
    } = await Axios(config);
    dispatch({ type: AUTH_SUCCESS, payload: { accessToken } });
  } catch (error) {
    dispatch({ type: AUTH_FAILURE });
  }
};

export const setTimeRange = (key: string, value: string): Action => ({
  type: SET_TIME_RANGE,
  payload: { key, value },
});

export const signOut = (): Action => ({ type: SIGN_OUT });
