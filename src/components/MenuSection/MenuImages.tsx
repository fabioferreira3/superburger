import { graphql, useStaticQuery } from "gatsby";

export const getMenuItemsImagesData = () => {
  const fluidHdImage = graphql`
    fragment fluidHdImage on File {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `;
  const fluidImageS1 = graphql`
    fragment fluidImageS1 on File {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `;
  // const fluidMobileImage = graphql`
  //   fragment fluidMobileImage on File {
  //     childImageSharp {
  //       fluid(maxWidth: 800) {
  //         ...GatsbyImageSharpFluid
  //       }
  //     }
  //   }
  // `;
  return useStaticQuery(graphql`
    query {
      menuItem1: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem1_s2: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menuItem1_s3: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menuItem1_s4: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menuItem1_s5: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menuItem1_s6: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menuItem2: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem3: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem4: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem5: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem6: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem7: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem8: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem9: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem10: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem11: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem12: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem13: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem14: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem15: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem16: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem17: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem18: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem19: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem20: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem21: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem22: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem23: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem24: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem25: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem26: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem27: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem28: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem29: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidDesktopImage
      }
      menuItem30: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidDesktopImage
      }
    }
  `);
};
