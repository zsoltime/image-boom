import { useEffect, useReducer, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = new URL('https://pixabay.com/api/');

API_URL.searchParams.set('key', API_KEY);
API_URL.searchParams.set('image_photo', 'photo');
API_URL.searchParams.set('per_page', 12);

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        error: null,
        isLoading: true,
      };

    case 'FETCH_FIRST_PAGE':
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false,
      };

    case 'FETCH_NEXT_PAGE':
      return {
        ...state,
        data: {
          ...state.data,
          hits: [...state.data.hits, ...action.payload.hits],
        },
        error: null,
        isLoading: false,
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      throw new Error();
  }
};

const useImageFetch = (options = {}) => {
  const { keyword = '', page = 1 } = options;
  const [query, setQuery] = useState({ keyword, page });
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        query.keyword && API_URL.searchParams.set('q', query.keyword);
        API_URL.searchParams.set('page', query.page || 1);

        const res = await fetch(API_URL.href);
        console.log({ res });
        const data = await res.json();

        if (!didCancel) {
          dispatch({
            type:
              query.page > 1 ? 'FETCH_NEXT_PAGE' : 'FETCH_FIRST_PAGE',
            payload: data,
          });
        }
      } catch (error) {
        console.log({ error });
        if (!didCancel) {
          dispatch({
            type: 'FETCH_FAILURE',
            payload: error,
          });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [query]);

  return [state, setQuery];
};

export default useImageFetch;
