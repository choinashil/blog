import React from 'react'

import Layout from '../components/layout'
import Path from '../components/path'
import '../styles/index.scss'

const about = () => {
  return (
    <Layout>
      <section className='me'>
        <Path category='me' />
        <div className='content'>
          <h1>About</h1>
          <p>안녕하세요 나시루 소개를 해볼까요</p>
          <span>나시루 인스타는 <a href='https://www.instagram.com/n.shx/?hl=ko' target='_blank' rel='noopener noreferrer'>요기</a></span>
        </div>
      </section>
    </Layout>
  );
}
  
export default about
  