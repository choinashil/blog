import React from 'react'
import Layout from '../components/layout'
import Path from '../components/path'
import '../styles/index.scss'

const Note = () => {
  return (
    <Layout>
      <section className='Note'>
        <Path category='note' />
        <div className='Container'>일기장</div>
      </section>
    </Layout>
  );
}

export default Note
