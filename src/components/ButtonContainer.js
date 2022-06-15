import React from 'react';
import { buttons } from '../utils/links';
import styled from 'styled-components';
import { usePopularContext } from '../context/popular_repos_context';

const ButtonContainer = () => {
  const { handleSearch } = usePopularContext();
  return (
    <section className='section'>
      {buttons.map((button, index) => {
        const { id, text } = button;
        return (
          <button key={id} onClick={(e) => handleSearch(e)}>
            {text}
          </button>
        );
      })}
    </section>
  );
};

export default ButtonContainer;
