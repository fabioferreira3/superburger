import { graphql, useStaticQuery } from "gatsby";
import _ from "lodash";

import { generateImageSources } from "../../helpers/generateImageSources";

export const getBannerImage = () => {
  const data = useStaticQuery(graphql`
    query {
      banner_: file(relativePath: { eq: "main-banner.jpg" }) {
        ...fluidHdImage
      }
      banner__s2: file(relativePath: { eq: "main-banner.jpg" }) {
        ...fluidImageS2
      }
      banner__s3: file(relativePath: { eq: "main-banner.jpg" }) {
        ...fluidImageS3
      }
      banner__s4: file(relativePath: { eq: "main-banner.jpg" }) {
        ...fluidImageS4
      }
      banner__s5: file(relativePath: { eq: "main-banner.jpg" }) {
        ...fluidImageS5
      }
      banner__s6: file(relativePath: { eq: "main-banner.jpg" }) {
        ...fluidImageS6
      }
    }
  `);

  return generateImageSources(data);
};
