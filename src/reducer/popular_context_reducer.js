import {
  POPULAR_REPOS_BEGIN,
  POPULAR_REPOS_ERROR,
  POPULAR_REPOS_SUCCESS,
} from '../actions/popular_repos_actions';
export const reducer = (state, action) => {
  console.log(action.type);
  if (action.type === POPULAR_REPOS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === POPULAR_REPOS_SUCCESS) {
    return { ...state, repos: action.payload, isLoading: false };
  }
  if (action.type === POPULAR_REPOS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: { show: true, msg: 'There is an error.' },
    };
  }
  throw new Error(`No action matching with the name of ${action.type}`);
};
