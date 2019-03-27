import React from 'react';

const Project = ({ repo: { html_url, name, description, language, forks_count } }) => (
  <div className="repo">
    <h3><a target="_blank" rel="noopener noreferrer" href={html_url}>{name}</a></h3>
    <p>{description ? description : 'No Description Found!'}</p>
    <ul>
      {language && <li>{language}</li>}
      {forks_count > 0 && <li>{forks_count}</li>}
    </ul>
  </div>
)

export default Project;
