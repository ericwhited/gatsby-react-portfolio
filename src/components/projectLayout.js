import React, { Component } from 'react'
import Layout from './layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, {css} from 'styled-components';

import GithubButton from './githubButton';

const ProjectTitle = styled.h1`
    font-size: 65px;
    margin-bottom: 8px;
`

const ProjectSubTitle = styled.h2`
    font-size: 16px;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
`

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ProjectDescription = styled.div`
    ${'' /* width: 50%; */}
`

const Wrapper = styled.div`
    width: 50%;
`

const RenderGHButton = (gitHubLink) => {
    return gitHubLink ? <GithubButton link={gitHubLink} /> : null
}

export default class projectLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        const featuredImgFluid = markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
        const gitHubLink = markdownRemark.frontmatter.githubLink
        return (
            <Layout>
                <ProjectTitle>{markdownRemark.frontmatter.title}</ProjectTitle>
                <ProjectSubTitle>{markdownRemark.frontmatter.subtitle}</ProjectSubTitle>
                <Content>
                <Wrapper>
                    {/* dangerouslySetInnerHTML is a react thing */}
                    <ProjectDescription dangerouslySetInnerHTML={{
                        __html: markdownRemark.html
                    }} />
                    {
                        RenderGHButton(gitHubLink)
                    }
                </Wrapper>
                    <Img 
                        fluid={featuredImgFluid} 
                        style={{height: "100%", width: "440px", display: "inline-block"}} 
                        imgStyle={{height: "100%", width: "100%"}} 
                    />
                    
                </Content>
            </Layout>
        )
    }
}


export const query = graphql`
    query ProjectQuery($slug: String!) {
        markdownRemark(frontmatter: {slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                slug
                githubLink
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
