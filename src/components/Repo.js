import React from 'react';

const Repo = ({
  index,
  name,
  private: pri,
  html_url,
  forks_count,
  open_issues_count: issues,
  owner: { avatar_url, url, login },
  stargazers_count: star,
}) => {
  console.log(name);
  return (
    <article>
      <h1>{index}.</h1>
      <img src={avatar_url} alt={name} />
      <span>{login}</span>
    </article>
  );
};

export default Repo;
