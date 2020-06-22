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
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    padding: 2rem 3rem;

`

const Heading = styled.h1`
    flex: 1;
`

const Nav = () => (
    <NavContainer>
    {/* <Heading>{window.location.pathname === "/" ? "/home" : `${window.location.pathname}` }</Heading> */}
    <Heading>Eric Whited</Heading>
    <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
    </nav>
    </NavContainer>
)

export default Nav