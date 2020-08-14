/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import { getPathname } from '../utils';
import useAppState from './useAppState';

const useSpotifyData = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      setIsLoading(true);
      const { data } = await Axios(url, config);
      const resItems = recents ? data.items.map((item: any) => item.track) : data.items;
      setItems(resItems);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [timeRange, url]);
  return { items, isLoading, isError };
};

export default useSpotifyData;
