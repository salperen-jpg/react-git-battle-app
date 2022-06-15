import React from 'react';
import Form1 from './Form1';
import { useBattleContext } from '../context/battle_context';
const Forms = () => {
  return (
    <section className='section-center'>
      <Form1 ply1 />
      <Form1 ply2 />
    </section>
  );
};

export default Forms;
