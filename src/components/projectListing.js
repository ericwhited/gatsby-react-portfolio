import React from 'react';
import { Link, StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const PROJECT_LISTING_QUERY = graphql`
    query ProjectListing {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          subtitle
          slug
          app_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}

`

const projectListing = () => (
    <StaticQuery query={PROJECT_LISTING_QUERY} render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({node}) => {
            console.log(node.frontmatter.app_image)
            return (
            <section style={{border: "2px dashed red"}}>
                <p>{node.frontmatter.subtitle}</p>
                <p>{node.frontmatter.title}</p>
                {/* see notion notes as to why this isnt working right now. */}
                {/* <Img fluid={node.frontmatter.childImageSharp.fluid} /> */}
            </section>
            )
        })
    )} />
)

export default projectListing