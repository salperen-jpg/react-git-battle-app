import React from 'react';
import ButtonContainer from '../components/ButtonContainer';
import Repos from '../components/Repos';
import { usePopularContext } from '../context/popular_repos_context';
const Home = () => {
  return (
    <section className='section'>
      <ButtonContainer />
      <Repos />
    </section>
  );
};

export default Home;
