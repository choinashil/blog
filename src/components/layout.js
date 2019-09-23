import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Container = styled.div`
    display: flex;
    min-height: 100vh;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    flex-grow: 1;
`

const Layout = props => {
    return (
        <Container>
            <Header />
            <ContentWrapper>
                <Content>
                    {props.children}
                </Content>
                <Footer />
            </ContentWrapper>
        </Container>
    )
}

export default Layout
