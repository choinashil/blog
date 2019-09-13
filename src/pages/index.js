import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Index = () => {
    return (
        <div>
            <Layout>
                <h1>안녕하세욥</h1>
                <h2>나시루입니다🐙</h2>
                <p><Link to='about'>자기소개 화면</Link></p>
                <p><Link to='blog' category='programming'>Programming</Link></p>
                <p><Link to='blog' category='activity'>Activity</Link></p>
            </Layout>
        </div>
    );
}

export default Index
