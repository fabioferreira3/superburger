import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        ...fluidHdImage
      }
      logo_s2: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS2
      }
      logo_s3: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS3
      }
      logo_s4: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS4
      }
      logo_s5: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS5
      }
      logo_s6: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS6
      }
    }
  `);

  // const sources = [
  //   data.logo.childImageSharp.fluid,
  //   {
  //     ...data.logo_s1.childImageSharp.fluid,
  //     media: `(min-width: 768px)`,
  //   },
  // ];

  return <Img fluid={data.logo.childImageSharp.fluid} />;
};

export default Logo;
