import React from 'react';
import { usePopularContext } from '../context/popular_repos_context';
import Loading from './Loading';
import Repo from './Repo';
const Repos = () => {
  const { isLoading, repos, error } = usePopularContext();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <h2>There is an error.</h2>
      </div>
    );
  }
  return (
    <section className='repos-container section-center'>
      {repos.map((repo, index) => {
        return <Repo key={index} {...repo} index={index + 1} />;
      })}
    </section>
  );
};

export default Repos;
