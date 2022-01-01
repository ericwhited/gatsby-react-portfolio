import React, { Component } from 'react'
import Layout from './layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

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
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
  }
`

const ProjectDescription = styled.div`
    ${'' /* width: 50%; */}
`

const Wrapper = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
  }
`

const ImgWrapper = styled.div`
    width: 60vw
`

const RenderGHButton = (link, text) => {
    return link !== 'nolink' ? <GithubButton link={link} text={text} /> : null
}

export default class projectLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        const featuredImgFluid = markdownRemark.frontmatter.featuredImage ? markdownRemark.frontmatter.featuredImage.childImageSharp.fluid : null
        const link = markdownRemark.frontmatter.link ? markdownRemark.frontmatter.link : null
        const secondImage = markdownRemark.frontmatter.secondImage ? markdownRemark.frontmatter.secondImage.childImageSharp.fluid : null
        const text = markdownRemark.frontmatter.buttonText ? markdownRemark.frontmatter.buttonText : null
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
                            RenderGHButton(link, text)
                        }
                    </Wrapper>
                    <ImgWrapper>
                        {
                            secondImage
                                ? <Img 
                                    fluid={secondImage} 
                                    style={{height: "100%", width: "100vw", display: "inline-block"}} 
                                    imgStyle={{height: "100%", width: "100vw"}} 
                                />
                                : <Img 
                                    fluid={featuredImgFluid} 
                                    style={{height: "100%", width: "60vw", display: "inline-block"}} 
                                    imgStyle={{height: "100%", width: "60vw"}} 
                                />
                        }
                    </ImgWrapper>
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
                link
                buttonText
                noimage
                secondImage {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
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
