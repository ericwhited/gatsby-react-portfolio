import React from 'react'
import Layout from '../components/layout'
import resume from '../images/resume.png'
import styled from 'styled-components'

const ResumeImg = styled.img`
    margin: 0 auto;
    display: block;
    width: 90%
`

const Resume = () => (
    <Layout>
        {/* this is not the page name */}
        <ResumeImg src={resume} alt="resume" />
    </Layout>
)

export default Resume;