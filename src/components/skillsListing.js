import React, { useState } from "react";
import styled, {css} from 'styled-components'

const SkillList = styled.ul`
    display: flex;
`

const SkillItem = styled.li`
    margin-right: 8px;
`

const skillsListing = ({ skills }) => {
    return (
        <SkillList>
            {
            skills.map((s) => {
                return (
                <SkillItem>
                    {/* <img src={arrow} alt="projectArrow" style={{margin: "0"}} />  */}
                    <p>{s.name}</p>
                </SkillItem>
                )
            })
            }
        </SkillList>
    )
}

export default skillsListing;