import React from 'react'
import { css } from '@emotion/core'
import { color } from 'styles/variables';

const Tags = ({ tags, fontSize = 14 }) => {
  return (
    <ul css={
      css`
          display: flex;
          margin-top: 4px;
          height: 16px;
          font-size: ${fontSize}px;
        `
    }>
      {tags.map((tag, index) => {
        return (
          <li key={index} css={
            css` 
              &:hover {
                border-bottom: 1px solid ${color.dark};
              }  

              & + & {
                margin-left: 8px;
              }
            `
          }>
            <a href={`/tags/${tag}`} css={
              css`
                  color: ${color.dark};  
                `
            }>
              #{tag}
            </a>
          </li>
        );
      })}
    </ul>

  );
}

export default Tags