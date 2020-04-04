import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 0 10px;
    flex: 1;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;

`

const Nav = () => (
    <NavContainer>
    <h1>Page Name</h1>
    <h2>Eric Whited</h2>
    <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="projects">Projects</StyledLink>
        <StyledLink to="contact">Contact</StyledLink>
    </nav>
    </NavContainer>
)

export default Nav