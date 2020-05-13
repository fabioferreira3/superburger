import { graphql, useStaticQuery } from "gatsby";

export const MenuItemsImagesData = () => {
  const squareImage = graphql`
    fragment squareImage on File {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `;
  return useStaticQuery(graphql`
    query {
      menuItem1: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...squareImage
      }
      menuItem2: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...squareImage
      }
      menuItem3: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...squareImage
      }
    }
  `);
};
