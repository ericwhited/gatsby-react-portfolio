import React from 'react';
import { Link, StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import projectArrow from '../images/projectArrow.png';

const PROJECT_LISTING_QUERY = graphql`
  query ProjectListing {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            type
            title
            subtitle
            slug
            buttonText
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
  margin: 0 auto 24px;
`

const Title = styled.h2`
  color: white;
  display: block;
  font-size: 35px;

  @media (min-width: 550px) {
    font-size: 50px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }
`

const SubTitle = styled(Title)`
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
  font-size: 14px;
  margin-bottom: 4px;

  @media (min-width: 550px) {
    font-size: 18px;
  }
`

const ProjectNumber = styled(Title)`
  display: none;
  color: black;
  margin: 0 0 0 auto;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;

  @media (min-width: 768px) {
    display: inline-block;
  }
  
`

const TitleWrapper = styled.div`

  @media (min-width: 768px) {
    min-width: 350px;
  }
`

const ImgWrapStyle = {
  // transform: "translate(-600px, 0px", 
  position: "relative", 
  height: "250px", 
  width: "250px", 
  marginLeft: "16px"
}

const ListingContainer = styled.div`
  ${'' /* padding: 0px 3rem; */}
  max-width: 1700px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }
`

const ProjectArrow = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
  }
`


const projectListing = ({ type }) => (
    <StaticQuery query={PROJECT_LISTING_QUERY} render={({ allMarkdownRemark }) => (
      <ListingContainer>
       { allMarkdownRemark.edges.map(({node, file}, index) => {
          if (node.frontmatter.type === type) {
            return (
              <StyledLink to={node.frontmatter.slug} key={index} image={node.frontmatter.featuredImage.absolutePath}>
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
                  <ProjectArrow src={projectArrow} alt="projectArrow" style={{margin: "0"}} /> 
                <ProjectNumber>{`0${index+1}`}</ProjectNumber>
              </StyledLink>
            )
          }
        })}
        </ListingContainer>
    )} />
)

export default projectListing;


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