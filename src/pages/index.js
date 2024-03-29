import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
// import Img from 'gatsby-image';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import SkillsListing from '../components/skillsListing'
import html5 from '../images/html5.png'
import css3 from '../images/css3.png'
import javascript from '../images/javascript.png'
import react from '../images/React.svg'
import nestjs from '../images/nestjs.png'
import postgresql from '../images/postgresql.png'
import pgadmin from '../images/pgadmin.svg'
import typeorm from '../images/typeorm.png'
import figma from '../images/figma.png'
import adobeillustrator from '../images/adobeillustrator.png'
import invision from '../images/invision.png'
import adobexd from '../images/adobexd.png'
import linkedin from '../images/linkedin.png'
import githubWhite from '../images/githubWhite.png'

const SkillsHeading = styled.h4`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
`

const StyledSection = styled.section`
  flex: 1;
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${'' /* grid-template-rows: 1fr 1fr; */}
  grid-column-gap: 120px;
  grid-row-gap: 56px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 80%;
  }
`

const Banner = styled.h1`
  font-size: 65px;
  letter-spacing: 3px;
  margin-bottom: 8px;
`

const SubBanner = styled.h2`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`

const SectionHeading = styled.h3`
  text-transform: uppercase;
  font-size: 30px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`
const SeeAll = styled(Link)`
  font-size: 16px;
  display: inline-block;
  flex: 1;
  text-align: right;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-decoration: underline;row
  font-weight: 600;
  color: #fff;
`

const AboutIcons = styled.img`
  ${'' /* height: 30px; 
  width: 30px; */}
  margin: 0;
`

const AboutIconLink = styled.a`
  display: inline-block;
  margin: 0 12px 0 0;
  height: 30px; 
  width: 30px;
`

const DevelopmentMessage = styled.p`
    display: block;
    margin-top: 16px;
    font-size: 16px;
    font-weight: 800;
    width: 100%;
    text-align: center;
`

const IndexPage = () => {
  const [fe_skills, setFe_skills] = useState([
    {name: 'HTML5', img: html5, alt:'HTML5'},
    {name: 'CSS3', img: css3, alt:'CSS3'},
    {name: 'JavaScript', img: javascript, alt:'JavaScript'},
    {name: 'React', img: react, alt:'React'}
  ])

  const [be_skills, set_Fe_skills] = useState([
    {name: 'NestJS', img: nestjs, alt:'NestJS'},
    {name: 'PostgreSQL', img: postgresql, alt:'PostgreSQL'},
    {name: 'pgAdmin', img: pgadmin, alt:'pgAdmin'},
    {name: 'TypeORM', img: typeorm, alt:'TypeORM'}
  ])

  const [design_skills, set_design_skills] = useState([
    {name: 'Figma', img: figma, alt:'Figma'},
    {name: 'Illustrator', img: adobeillustrator, alt:'Adobe Illustrator'},
    {name: 'Invision', img: invision, alt:'Invision'},
    {name: 'Adobe Xd', img: adobexd, alt:'Adobe Xd'},
  ])

  return (
    <Layout>
      <SEO title="Home" />
        <Banner>Eric Whited</Banner>
        <SubBanner>Web Developer & Designer
        <DevelopmentMessage>*Site still in development*</DevelopmentMessage>
        </SubBanner>
        
        
        <SkillsContainer>
          <StyledSection className="about-section">
            <SectionHeading>About</SectionHeading>
            <p>
            My name is Eric Whited and I'm a full-stack web developer with experience in HTML, CSS, JavaScript, jQuery, SASS and NestJS. My interest in coding began back when I started gaming online. I took up the challenge to create a simple website for my guild and the rest was history. My experience is in front-end and design with a lot of interest in back-end javascript development.
            </p>
            <AboutIconLink href="https://www.linkedin.com/in/eric-whited/">
              <AboutIcons src={linkedin} alt="LinkedIn"/>
            </AboutIconLink>
            <AboutIconLink href="https://github.com/ericwhited">
              <AboutIcons src={githubWhite} alt="GitHub"/>
            </AboutIconLink>
          </StyledSection>
          <StyledSection className="skills-section">
            <SectionHeading>Skills</SectionHeading>
            <SkillsHeading>Front-end</SkillsHeading>
            <SkillsListing skills={fe_skills} />
            <SkillsHeading>Back-end</SkillsHeading>
            <SkillsListing skills={be_skills} />
            <SkillsHeading>Design</SkillsHeading>
            <SkillsListing skills={design_skills} />
            <SeeAll to="/resume">See All</SeeAll>
          </StyledSection>
        </SkillsContainer>
    </Layout>
  )
}

export default IndexPage