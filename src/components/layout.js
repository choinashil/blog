import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = props => {
  return (
    <div className='wrap'>
      <Header />
      <div className='container'>
        <div className='area-content'>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout
