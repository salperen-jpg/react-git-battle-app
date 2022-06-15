import React from 'react';
import { useBattleContext } from '../context/battle_context';
const Form1 = ({ ply1, ply2 }) => {
  const { player_1, player_2, handleChange, handleSubmit } = useBattleContext();
  console.log(ply1, ply2);

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='player'>Player 1</label>
        <input
          type='text'
          name={`${ply1 ? 'player_1' : 'player_2'}`}
          value={`${ply1 ? player_1 : player_2}`}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(ply1);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Form1;
