import { graphql, useStaticQuery } from "gatsby";
import _ from "lodash";

import { generateImageSources } from "../../helpers/generateImageSources";

export const getAboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutus_: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidHdImage
      }
    }
  `);

  return generateImageSources(data);
};
