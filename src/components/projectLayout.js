import React, { Component } from 'react'
import Layout from './layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';


export default class projectLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        const featuredImgFluid = markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
        return (
            <Layout>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <Img fluid={featuredImgFluid} imgStyle={{height: "unset", width: "unset"}} />
                {/* dangerouslySetInnerHTML is a react thing */}
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }} />
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
