import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu, GiTorch } from 'react-icons/gi';
import { links } from '../utils/links';
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center '>
        <div className='nav-header'>
          <h3 className='logo'>
            Git <span>Battle</span>
          </h3>
          <button className='btn toggle-btn'>
            <GiHamburgerMenu />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <NavLink
                key={id}
                to={`${url}`}
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                {text}
              </NavLink>
            );
          })}
        </ul>
        <div className='theme-button'>
          <button>
            <GiTorch />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 3rem;

  .nav-center {
    width: min(90vw, 1170px);
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      letter-spacing: var(--spacing);
      text-shadow: 1px 1px 1px rgba(255, 255, 255);
      span {
        color: var(--clr-neon);
      }
    }
    .toggle-btn {
      background-color: transparent;
      font-size: 1.6rem;
    }
  }
  .nav-links {
    display: none;
  }
  .theme-button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 2.6rem;
      height: 2.6rem;
      font-size: 1.4rem;
      padding: 0.5rem;
      border-radius: 50%;
      background-color: var(--clr-neon);
      border: 2px solid var(--clr-white);
      color: var(--clr-white);
      cursor: pointer;
    }
  }
  @media screen and (min-width: 992px) {
    .toggle-btn {
      display: none;
    }
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav-links {
        display: flex;
        gap: 2rem;
      }
    }
    .theme-button {
      position: static;
    }
  }
`;

export default Navbar;
