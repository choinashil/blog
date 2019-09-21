import React from 'react'
import '../styles/index.scss'

const Path = ({ category, subject }) => {

  let subjectSlug;

  if (subject) {
    subjectSlug = subject.toLowerCase().replace(/ /g, '-');
  }

  return (
    <div class='Path'>
      <a href={category === 'home' ? '/' : `/${category}`}>
        <h2>{category}</h2>
      </a>

      {subject ? 
        <a href={`/${category}/${subjectSlug}`}>
          <h2>{subject}</h2>
        </a>
        : ''
      }
    </div>
  );
}

export default Path
