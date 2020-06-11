import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo_: file(relativePath: { eq: "logo.png" }) {
        ...fluidHdImage
      }
    }
  `);

  return <Img fluid={data.logo_.childImageSharp.fluid} />;
};

export default Logo;
