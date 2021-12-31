import React, { useState } from "react";
import styled, {css} from 'styled-components'

const SkillList = styled.ul`
    display: flex;
    margin: 0 0 32px 16px;
`

const SkillItem = styled.li`
    margin: 0 24px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImgContainer = styled.div`
    max-width: 50px;
    max-height: 50px;
    margin: 0;
`

const SkillImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const SkillName = styled.p`
    ${'' /* overflow-wrap: break-word;
    width: 100px;
    text-align: center;
    margin: 4px 0 0 0; */}
`

const SkillsListing = ({ skills }) => {
    return (
        <SkillList>
            {
            skills.map((skill) => {
                return (
                <SkillItem>
                    <ImgContainer>
                        <SkillImg src={skill.img} alt={skill.alt}/> 
                    </ImgContainer>
                    <SkillName>{skill.name}</SkillName>
                </SkillItem>
                )
            })
            }
        </SkillList>
    )
}

export default SkillsListing;