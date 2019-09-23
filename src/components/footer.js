import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: rgb(166, 244, 166);
`

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <FooterContainer>
            <p>Created by {data.site.siteMetadata.author}, © 2019</p>
        </FooterContainer>
    );
}

export default Footer
