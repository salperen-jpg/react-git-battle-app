import React from 'react';
import Repos from '../components/Repos';
import { usePopularContext } from '../context/popular_repos_context';
const Home = () => {
  return (
    <section className='section'>
      <Repos />
    </section>
  );
};

export default Home;
