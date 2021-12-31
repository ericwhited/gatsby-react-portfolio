import React from 'react';
import { Link, StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled, {css} from 'styled-components';
import projectArrow from '../images/projectArrow.png';

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
              absolutePath
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
  align-items: center;
  justify-content: start;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  margin: 0 auto;
`

const Title = styled.h2`
  color: white;
  font-size: 50px;
  display: block;
`

const SubTitle = styled(Title)`
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
  font-size: 14px;
  margin-bottom: 4px;
`

const ProjectNumber = styled(Title)`
  color: black;
  margin: 0 0 0 auto;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`

const TitleWrapper = styled.div`
  min-width: 350px;
`

const ImgWrapStyle = {
  // transform: "translate(-600px, 0px", 
  position: "relative", 
  height: "250px", 
  width: "250px", 
}

const ListingContainer = styled.div`
  padding: 0px 3rem;
  max-width: 1700px;
  margin: 0 auto;
`


const projectListing = () => (
    <StaticQuery query={PROJECT_LISTING_QUERY} render={({ allMarkdownRemark }) => (
      <ListingContainer>
       { allMarkdownRemark.edges.map(({node, file}, index) => {
            return (
              <StyledLink to={node.frontmatter.slug} image={node.frontmatter.featuredImage.absolutePath}>
                <TitleWrapper>
                  <SubTitle>{node.frontmatter.subtitle}</SubTitle>
                  <Title>{node.frontmatter.title}</Title>
                </TitleWrapper>
                  <Img 
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                    objectFit="contain"
                    style={ImgWrapStyle} 
                    imgStyle={{objectFit: "contain"}}
                  />
                  <img src={projectArrow} alt="projectArrow" style={{margin: "0"}} /> 
                <ProjectNumber>{`0${index+1}`}</ProjectNumber>
              </StyledLink>
            )
        })}
        </ListingContainer>
    )} />
)

export default styled(projectListing) (
  () => css`
    background: red;
  `
)


// {
//   file(relativePath: {eq: "/src/projects/projectArrow.png"}) {
//     childImageSharp {
//       fixed(width: 125, height: 125) {
//         base64
//         tracedSVG
//         aspectRatio
//         srcWebp
//         srcSetWebp
//         originalName
//       } 
//     }
//   }
// }