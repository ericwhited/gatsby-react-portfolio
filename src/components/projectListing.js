import React from 'react';
import { Link, StaticQuery, graphql} from 'gatsby';
// import Img from 'gatsby-image';
import styled, {css} from 'styled-components'

const PROJECT_LISTING_QUERY = graphql`
    query ProjectListing {
  allMarkdownRemark {
    edges {
      node {
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
  }
}

`

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  /* border: 2px solid red; */
  text-decoration: none;
  padding: 40px 0;
  text-transform: uppercase;
`

const Title = styled.p`
  color: white;
  font-size: 50px;
  display: block;
`

const SubTitle = styled(Title)`
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
  font-size: 14px;
`

const ProjectNumber = styled(Title)`
  color: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}


`

const projectListing = () => (
    <StaticQuery query={PROJECT_LISTING_QUERY} render={({ allMarkdownRemark }) => (
      <div style={{padding: "0 11rem"}}>
       { allMarkdownRemark.edges.map(({node}, index) => {
            return (
            <StyledLink to={node.frontmatter.slug}>
              <div>
                <SubTitle>{node.frontmatter.subtitle}</SubTitle>
                <Title>{node.frontmatter.title}</Title>
              </div>
              <ProjectNumber>{`0${index+1}`}</ProjectNumber>
                {/* see notion notes as to why this isnt working right now. */}
                {/* <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} imgStyle={{height: "unset", width: "unset"}} style={{height: "500px", width: "500px"}} /> */}
            </StyledLink>
            )
        })}
        </div>
    )} />
)

export default styled(projectListing) (
  () => css`
    background: red;
  `
)