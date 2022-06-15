import React, { useContext, useReducer, useEffect } from 'react';
import { single_user } from '../utils/constants';
import axios from 'axios';
import { reducer } from '../reducer/battle_reducer';
import {
  HANDLE_INPUTS,
  HANDLE_SUBMIT,
  USER_BEGIN,
  USER_SUCCESS,
} from '../actions/battle_actions';
const BattleContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: { show: false, msg: '' },
  player_1: '',
  player_2: '',
  player_1_info: {},
  player_2_info: {},
};

export const BattleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {}, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: HANDLE_INPUTS, payload: { name, value } });
  };

  const handleSubmit = async (val) => {
    const name = val ? 'player_1' : 'player_2';
    dispatch({ type: USER_BEGIN });
    try {
      const user = await axios(`${single_user}${state[name]}`);
      dispatch({
        type: USER_SUCCESS,
        payload: { user: user.data, player: name },
      });
    } catch (error) {}
  };
  return (
    <BattleContext.Provider value={{ ...state, handleChange, handleSubmit }}>
      {children}
    </BattleContext.Provider>
  );
};

export const useBattleContext = () => {
  return useContext(BattleContext);
};
