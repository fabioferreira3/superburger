import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const PromoImage2 = () => {
  const data = useStaticQuery(graphql`
    query {
      image_: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidHdImage
      }
    }
  `);

  return <Img fluid={data.image_.childImageSharp.fluid} />;
};
