import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <div>
            <Link to='/'><h1>문어지지말고 개발일기</h1></Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header
