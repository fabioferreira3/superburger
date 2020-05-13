import { graphql, useStaticQuery } from "gatsby";

export const getMenuItemsImagesData = () => {
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
      menuItem4: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...squareImage
      }
      menuItem5: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...squareImage
      }
      menuItem6: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...squareImage
      }
      menuItem7: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...squareImage
      }
      menuItem8: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...squareImage
      }
      menuItem9: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...squareImage
      }
      menuItem10: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...squareImage
      }
      menuItem11: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...squareImage
      }
      menuItem12: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...squareImage
      }
      menuItem13: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...squareImage
      }
      menuItem14: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...squareImage
      }
      menuItem15: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...squareImage
      }
      menuItem16: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...squareImage
      }
      menuItem17: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...squareImage
      }
      menuItem18: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...squareImage
      }
      menuItem19: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...squareImage
      }
      menuItem20: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...squareImage
      }
      menuItem21: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...squareImage
      }
      menuItem22: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...squareImage
      }
      menuItem23: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...squareImage
      }
      menuItem24: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...squareImage
      }
      menuItem25: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...squareImage
      }
      menuItem26: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...squareImage
      }
      menuItem27: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...squareImage
      }
      menuItem28: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...squareImage
      }
      menuItem29: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...squareImage
      }
      menuItem30: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...squareImage
      }
    }
  `);
};
