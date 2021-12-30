import React, { useState } from "react"
import { Link } from "gatsby"
import styled, {css} from 'styled-components'
import Img from 'gatsby-image';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SkillsListing from '../components/skillsListing'
import arrow from '../images/projectArrow.png'

const SkillsHeading = styled.h4`
  color: red;
`

const StyledSection = styled.section`
  flex: 1;
`

const SkillsContainer = styled.div`
  display: flex;
  border: 2px solid red;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`

const IndexPage = () => {
  const [fe_skills, setFe_skills] = useState([
    {name: 'HTML5', img: '', alt:''},
    {name: 'CSS3', img: '', alt:''},
    {name: 'JavaScript', img: '', alt:''},
    {name: 'React', img: '', alt:''}
  ])

  const [be_skills, set_Fe_skills] = useState([
    {name: 'NestJS', img: '', alt:''},
    {name: 'PostgreSQL', img: '', alt:''},
    {name: 'pgAdmin', img: '', alt:''},
    {name: 'TypeORM', img: '', alt:''}
  ])

  const [design_skills, set_design_skills] = useState([
    {name: 'Figma', img: '', alt:''},
    {name: 'Adobe Illustrator', img: '', alt:''},
    {name: 'Invision', img: '', alt:''},
    {name: 'Adobe Xd', img: '', alt:''},
  ])

  return (
    <Layout>
      <SEO title="Home" />
        <h1>Eric Whited</h1>
        <h2>Web Developer & Designer</h2>
        <SkillsContainer>
          <StyledSection className="about-section">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis est fermentum lorem sollicitudin. Cursus sed arcu adipiscing rhoncus. Sagittis lacinia eu pellentesque mi sed et a ac. Tristique tellus bibendum tempus, arcu sem mi vestibulum amet. Molestie scelerisque ipsum tincidunt massa tincidunt.
              Tellus sed lorem felis aliquet pellentesque fusce. Feugiat nibh aliquam mauris bibendum eget ultricies quam netus. Non eu amet, aliquam augue vitae id integer eleifend. Elementum eros, cras nunc at. Sed porta in erat tincidunt. In suspendisse tempor sed quis quam a, eros, pulvinar feugiat. Integer volutpat elementum, eu semper pharetra nulla diam. Elementum non vel pharetra aliquam pretium molestie facilisis. Pellentesque augue faucibus lectus eget amet, nibh. Morbi convallis pharetra adipiscing rhoncus leo, duis convallis lectus massa. Diam libero viverra egestas purus ut pharetra. Felis ut a tortor donec.
            </p>
          </StyledSection>
          <StyledSection className="skills-section">
            <h3>Skills</h3>
            <SkillsHeading>Front-end</SkillsHeading>
            <SkillsListing skills={fe_skills} />
            <SkillsHeading>Back-end</SkillsHeading>
            <SkillsListing skills={be_skills} />
            <SkillsHeading>Design</SkillsHeading>
            <SkillsListing skills={design_skills} />
          </StyledSection>
        </SkillsContainer>
    </Layout>
  )
}

export default IndexPage