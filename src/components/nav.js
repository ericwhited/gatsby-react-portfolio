import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 0 10px;
    flex: 1;
    text-transform: uppercase;
    font-family: Anton;
    font-size: 18px
`

const StyledNav = styled.nav`
    flex: 1;
    text-align: right;
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    padding: 2rem 3rem;
    max-width: calc(1920px + 3rem);
    margin: 0 auto 48px;
`

const Heading = styled.h1`
    flex: 1;
    margin: 0;
    font-family: 'Anton';
`

const Name = styled(Heading)`
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
`

const Nav = () => (
    <NavContainer>
    <Heading>{window.location.pathname === "/" ? "Home" : `${window.location.pathname}` }</Heading>
    <Name>Eric Whited</Name>
    <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/resume">Resume</StyledLink>
    </StyledNav>
    </NavContainer>
)

export default Nav