import React, { useRef, useEffect } from 'react'
import { css } from '@emotion/core'

const Utterances = () => {
  const commentBox = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'choinashil/blog');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'dark-blue');
    script.setAttribute('crossorigin', 'anonymous');

    commentBox.current.appendChild(script);
  }, [])

  return (
    <div ref={commentBox} className='utterances' css={css`
      margin-top: 80px;
      max-width: 1000px;

      & > .utterances {
        max-width: 100%;
      }
    `} />
  );
}

export default Utterances
