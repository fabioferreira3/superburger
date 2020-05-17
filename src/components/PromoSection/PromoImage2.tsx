import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { generateImageSources } from "../../helpers/generateImageSources";

export const PromoImage2 = () => {
  const data = useStaticQuery(graphql`
    query {
      image_: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidHdImage
      }
      image__s2: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS2
      }
      image__s3: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS3
      }
      image__s4: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS4
      }
      image__s5: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS5
      }
      image__s6: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS6
      }
    }
  `);

  const imageSource = generateImageSources(data);

  return <Img fluid={imageSource} />;
};
