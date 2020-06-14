import { graphql } from "gatsby";

export const fluidHdImage = graphql`
  fragment fluidHdImage on File {
    childImageSharp {
      fluid(maxWidth: 1600, quality: 50) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
