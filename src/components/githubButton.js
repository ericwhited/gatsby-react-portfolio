import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.a`
    color: white;
    font-family: Anton;
    text-transform: uppercase;
    padding: 16px 40px;
    /* height: 50px;
    width: 150px; */
    background: black;
    border: 2px solid white;
    font-size: 20px;
`

const GithubButton = ({ link }) => (
    <StyledButton href={link}>Github</StyledButton>
)

export default GithubButton
