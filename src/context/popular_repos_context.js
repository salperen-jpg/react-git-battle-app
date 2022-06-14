import React, { useContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducer/popular_context_reducer';
import { popular_repos_url } from '../utils/constants';
import axios from 'axios';
import {
  POPULAR_REPOS_BEGIN,
  POPULAR_REPOS_ERROR,
  POPULAR_REPOS_SUCCESS,
} from '../actions/popular_repos_actions';

const PopularContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: { show: false, msg: '' },
  repos: [],
};

export const PopularContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRepos = async () => {
    dispatch({ type: POPULAR_REPOS_BEGIN });
    try {
      const res = await axios(popular_repos_url);
      const repos = res.data.items;
      console.log(repos);
      dispatch({ type: POPULAR_REPOS_SUCCESS, payload: repos });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <PopularContext.Provider value={{ ...state }}>
      {children}
    </PopularContext.Provider>
  );
};

export const usePopularContext = () => {
  return useContext(PopularContext);
};
