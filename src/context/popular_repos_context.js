import React, { useContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducer/popular_context_reducer';
import { popular_repos_url } from '../utils/constants';
import axios from 'axios';
import {
  POPULAR_REPOS_BEGIN,
  POPULAR_REPOS_ERROR,
  POPULAR_REPOS_SUCCESS,
  HANDLE_SEARCH,
} from '../actions/popular_repos_actions';

// const BASE_URL = `https://api.github.com/search/repositories?q=stars:%3E1%20language:All&sort=stars&order=desc&type=Repositories`;
const PopularContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: { show: false, msg: '' },
  repos: [],
  search: 'All',
};

export const PopularContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRepos = async (url) => {
    dispatch({ type: POPULAR_REPOS_BEGIN });
    try {
      const res = await axios(url);
      const repos = res.data.items;
      console.log(repos);
      dispatch({ type: POPULAR_REPOS_SUCCESS, payload: repos });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state.search === 'All') {
      fetchRepos(
        `https://api.github.com/search/repositories?q=stars:%3E1%20language:${state.search}&sort=stars&order=desc&type=Repositories`
      );
    } else {
      fetchRepos(
        `https://api.github.com/search/repositories?q=stars:%3E1%20language:${state.search}&sort=stars&order=desc&type=Repositories`
      );
    }
  }, [state.search]);

  const handleSearch = (e) => {
    const repoName = e.target.textContent;
    dispatch({ type: HANDLE_SEARCH, payload: repoName });
  };

  return (
    <PopularContext.Provider value={{ ...state, handleSearch }}>
      {children}
    </PopularContext.Provider>
  );
};

export const usePopularContext = () => {
  return useContext(PopularContext);
};
