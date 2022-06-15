import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className='loading'></div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.section`
  padding: 10rem 0;
  display: grid;
  place-items: center;
  .loading {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    border: 3px solid gray;
    border-top-color: purple;
    animation: spinner 0.6s linear infinite;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
