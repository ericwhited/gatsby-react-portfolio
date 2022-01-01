import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    color: white;
    font-family: Anton;
    text-transform: uppercase;
    padding: 16px 40px;
    background: #0000000;
    border: 2px solid white;
    font-size: 20px;
    margin-top: 16px;
    display: inline-block;
`

const GithubButton = ({ link, text }) => (
    <StyledButton href={link}>
        {text}
    </StyledButton>
)

export default GithubButton
