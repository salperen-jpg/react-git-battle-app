import React from 'react';
import { usePopularContext } from '../context/popular_repos_context';
import Loading from './Loading';
import Repo from './Repo';
import styled from 'styled-components';

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
    <Wrapper className='section-center'>
      {repos.map((repo, index) => {
        return <Repo key={index} {...repo} index={index + 1} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(268.5px, 1fr));
`;

export default Repos;
