import { graphql, useStaticQuery } from "gatsby";

export const getBannerImage = () => {
  const data = useStaticQuery(graphql`
    query {
      banner_: file(relativePath: { eq: "main-banner.jpg" }) {
        ...fluidHdImage
      }
    }
  `);

  return data;
};
