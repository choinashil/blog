import React from 'react'
import { Link } from 'gatsby'

const Index = () => {
    return (
        <div>
            <h1>안녕하세욥</h1>
            <h2>나시루입니다🐙</h2>
            <p><Link to='about'>자기소개 화면</Link></p>
            <p><Link to='blog'>블로그 화면</Link></p>
        </div>
    );
}

export default Index
