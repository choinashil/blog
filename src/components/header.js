import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)

    return (
        <header>
            <Link to='/'>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>by {data.site.siteMetadata.author}</p>
            </Link>
            
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
