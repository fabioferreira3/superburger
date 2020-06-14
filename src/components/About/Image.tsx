import { graphql, useStaticQuery } from "gatsby";

export const getAboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutus_: file(relativePath: { eq: "about-banner.jpg" }) {
        ...fluidHdImage
      }
    }
  `);

  return data;
};
