import { graphql, useStaticQuery } from "gatsby";
import _ from "lodash";

import { generateImageSources } from "../../helpers/generateImageSources";

export const getAboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutus_: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidHdImage
      }
      aboutus__s2: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidImageS2
      }
      aboutus__s3: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidImageS3
      }
      aboutus__s4: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidImageS4
      }
      aboutus__s5: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidImageS5
      }
      aboutus__s6: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidImageS6
      }
    }
  `);

  return _.toArray(generateImageSources(data));
};
