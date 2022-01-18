import React, { Component } from 'react'
import Layout from './layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import GithubButton from './githubButton';

const ProjectTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 8px;
    text-align: center;

    @media (min-width: 425px) {
        font-size: 55px;
    }

    @media (min-width: 768px) {
        text-align: left;
        font-size: 65px;
  }

    ${'' /* media query here */}
`

const ProjectSubTitle = styled.h2`
    font-size: 16px;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
  }
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
    order: 2;

    @media (min-width: 768px) {
        width: 50%;
        order: 0;
  }
`

const ImgWrapper = styled.div`
    width: 65%;
    height: auto;
    margin: 32px 0 56px;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: 45%;
  }
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
                                />
                                : <Img 
                                    fluid={featuredImgFluid} 
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
                        fluid(maxWidth: 800) {
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
