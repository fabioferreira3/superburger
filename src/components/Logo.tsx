import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { generateImageSources } from "../helpers/generateImageSources";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo_: file(relativePath: { eq: "logo.png" }) {
        ...fluidHdImage
      }
      logo__s2: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS2
      }
      logo__s3: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS3
      }
      logo__s4: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS4
      }
      logo__s5: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS5
      }
      logo__s6: file(relativePath: { eq: "logo.png" }) {
        ...fluidImageS6
      }
    }
  `);

  const imageSources = generateImageSources(data);

  return <Img fluid={imageSources} />;
};

export default Logo;
