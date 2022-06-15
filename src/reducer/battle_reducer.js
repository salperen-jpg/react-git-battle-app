import {
  HANDLE_INPUTS,
  HANDLE_SUBMIT,
  USER_BEGIN,
  USER_SUCCESS,
} from '../actions/battle_actions';
export const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_INPUTS:
      const { value, name } = action.payload;
      if (name === 'player_1') {
        return { ...state, player_1: value };
      } else {
        return { ...state, player_2: value };
      }
    case HANDLE_SUBMIT:
      return { ...state };
    case USER_BEGIN:
      return { ...state, isLoading: true };
    case USER_SUCCESS:
      const { user, player } = action.payload;
      if (player === 'player_1') {
        return { ...state, isLoading: false, player_1_info: user };
      } else {
        return { ...state, isLoading: false, player_2_info: user };
      }

    default:
      throw new Error(
        `no action type matching with the name of ${action.type}`
      );
  }
};
