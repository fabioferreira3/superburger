import { graphql, useStaticQuery } from "gatsby";

export const getMenuItemsImagesData = () => {
  return useStaticQuery(graphql`
    query {
      menuItem1: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidHdImage
      }
      menuItem1_s2: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidImageS2
      }
      menuItem1_s3: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidImageS3
      }
      menuItem1_s4: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidImageS4
      }
      menuItem1_s5: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidImageS5
      }
      menuItem1_s6: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidImageS6
      }

      menuItem2: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidHdImage
      }
      menuItem2_s2: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidImageS2
      }
      menuItem2_s3: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidImageS3
      }
      menuItem2_s4: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidImageS4
      }
      menuItem2_s5: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidImageS5
      }
      menuItem2_s6: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidImageS6
      }

      menuItem3: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidHdImage
      }
      menuItem3_s2: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS2
      }
      menuItem3_s3: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS3
      }
      menuItem3_s4: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS4
      }
      menuItem3_s5: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS5
      }
      menuItem3_s6: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidImageS6
      }

      menuItem4: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidHdImage
      }
      menuItem4_s2: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidImageS2
      }
      menuItem4_s3: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidImageS3
      }
      menuItem4_s4: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidImageS4
      }
      menuItem4_s5: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidImageS5
      }
      menuItem4_s6: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidImageS6
      }

      menuItem5: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidHdImage
      }
      menuItem5_s2: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidImageS2
      }
      menuItem5_s3: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidImageS3
      }
      menuItem5_s4: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidImageS4
      }
      menuItem5_s5: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidImageS5
      }
      menuItem5_s6: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidImageS6
      }

      menuItem6: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidHdImage
      }
      menuItem6_s2: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidImageS2
      }
      menuItem6_s3: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidImageS3
      }
      menuItem6_s4: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidImageS4
      }
      menuItem6_s5: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidImageS5
      }
      menuItem6_s6: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidImageS6
      }

      menuItem7: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidHdImage
      }
      menuItem7_s2: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidImageS2
      }
      menuItem7_s3: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidImageS3
      }
      menuItem7_s4: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidImageS4
      }
      menuItem7_s5: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidImageS5
      }
      menuItem7_s6: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidImageS6
      }

      menuItem8: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidHdImage
      }
      menuItem8_s2: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidImageS2
      }
      menuItem8_s3: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidImageS3
      }
      menuItem8_s4: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidImageS4
      }
      menuItem8_s5: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidImageS5
      }
      menuItem8_s6: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidImageS6
      }

      menuItem9: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidHdImage
      }
      menuItem9_s2: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidImageS2
      }
      menuItem9_s3: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidImageS3
      }
      menuItem9_s4: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidImageS4
      }
      menuItem9_s5: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidImageS5
      }
      menuItem9_s6: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidImageS6
      }

      menuItem10: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidHdImage
      }
      menuItem10_s2: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidImageS2
      }
      menuItem10_s3: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidImageS3
      }
      menuItem10_s4: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidImageS4
      }
      menuItem10_s5: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidImageS5
      }
      menuItem10_s6: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidImageS6
      }

      menuItem11: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidHdImage
      }
      menuItem11_s2: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidImageS2
      }
      menuItem11_s3: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidImageS3
      }
      menuItem11_s4: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidImageS4
      }
      menuItem11_s5: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidImageS5
      }
      menuItem11_s6: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidImageS6
      }

      menuItem12: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidHdImage
      }
      menuItem12_s2: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidImageS2
      }
      menuItem12_s3: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidImageS3
      }
      menuItem12_s4: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidImageS4
      }
      menuItem12_s5: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidImageS5
      }
      menuItem12_s6: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidImageS6
      }

      menuItem13: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidHdImage
      }
      menuItem13_s2: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidImageS2
      }
      menuItem13_s3: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidImageS3
      }
      menuItem13_s4: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidImageS4
      }
      menuItem13_s5: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidImageS5
      }
      menuItem13_s6: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidImageS6
      }

      menuItem14: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidHdImage
      }
      menuItem14_s2: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidImageS2
      }
      menuItem14_s3: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidImageS3
      }
      menuItem14_s4: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidImageS4
      }
      menuItem14_s5: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidImageS5
      }
      menuItem14_s6: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidImageS6
      }

      menuItem15: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidHdImage
      }
      menuItem15_s2: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidImageS2
      }
      menuItem15_s3: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidImageS3
      }
      menuItem15_s4: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidImageS4
      }
      menuItem15_s5: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidImageS5
      }
      menuItem15_s6: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidImageS6
      }

      menuItem16: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidHdImage
      }
      menuItem16_s2: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidImageS2
      }
      menuItem16_s3: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidImageS3
      }
      menuItem16_s4: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidImageS4
      }
      menuItem16_s5: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidImageS5
      }
      menuItem16_s6: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidImageS6
      }

      menuItem17: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidHdImage
      }
      menuItem17_s2: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidImageS2
      }
      menuItem17_s3: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidImageS3
      }
      menuItem17_s4: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidImageS4
      }
      menuItem17_s5: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidImageS5
      }
      menuItem17_s6: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidImageS6
      }

      menuItem18: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidHdImage
      }
      menuItem18_s2: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidImageS2
      }
      menuItem18_s3: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidImageS3
      }
      menuItem18_s4: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidImageS4
      }
      menuItem18_s5: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidImageS5
      }
      menuItem18_s6: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidImageS6
      }

      menuItem19: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidHdImage
      }
      menuItem19_s2: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidImageS2
      }
      menuItem19_s3: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidImageS3
      }
      menuItem19_s4: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidImageS4
      }
      menuItem19_s5: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidImageS5
      }
      menuItem19_s6: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidImageS6
      }

      menuItem20: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidHdImage
      }
      menuItem20_s2: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidImageS2
      }
      menuItem20_s3: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidImageS3
      }
      menuItem20_s4: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidImageS4
      }
      menuItem20_s5: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidImageS5
      }
      menuItem20_s6: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidImageS6
      }

      menuItem21: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidHdImage
      }
      menuItem21_s2: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidImageS2
      }
      menuItem21_s3: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidImageS3
      }
      menuItem21_s4: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidImageS4
      }
      menuItem21_s5: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidImageS5
      }
      menuItem21_s6: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidImageS6
      }

      menuItem22: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidHdImage
      }
      menuItem22_s2: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidImageS2
      }
      menuItem22_s3: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidImageS3
      }
      menuItem22_s4: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidImageS4
      }
      menuItem22_s5: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidImageS5
      }
      menuItem22_s6: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidImageS6
      }

      menuItem23: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidHdImage
      }
      menuItem23_s2: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidImageS2
      }
      menuItem23_s3: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidImageS3
      }
      menuItem23_s4: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidImageS4
      }
      menuItem23_s5: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidImageS5
      }
      menuItem23_s6: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidImageS6
      }

      menuItem24: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidHdImage
      }
      menuItem24_s2: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidImageS2
      }
      menuItem24_s3: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidImageS3
      }
      menuItem24_s4: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidImageS4
      }
      menuItem24_s5: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidImageS5
      }
      menuItem24_s6: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidImageS6
      }

      menuItem25: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidHdImage
      }
      menuItem25_s2: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidImageS2
      }
      menuItem25_s3: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidImageS3
      }
      menuItem25_s4: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidImageS4
      }
      menuItem25_s5: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidImageS5
      }
      menuItem25_s6: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidImageS6
      }

      menuItem26: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidHdImage
      }
      menuItem26_s2: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidImageS2
      }
      menuItem26_s3: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidImageS3
      }
      menuItem26_s4: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidImageS4
      }
      menuItem26_s5: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidImageS5
      }
      menuItem26_s6: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidImageS6
      }

      menuItem27: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidHdImage
      }
      menuItem27_s2: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidImageS2
      }
      menuItem27_s3: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidImageS3
      }
      menuItem27_s4: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidImageS4
      }
      menuItem27_s5: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidImageS5
      }
      menuItem27_s6: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidImageS6
      }

      menuItem28: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidHdImage
      }
      menuItem28_s2: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidImageS2
      }
      menuItem28_s3: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidImageS3
      }
      menuItem28_s4: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidImageS4
      }
      menuItem28_s5: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidImageS5
      }
      menuItem28_s6: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidImageS6
      }

      menuItem29: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidHdImage
      }
      menuItem29_s2: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidImageS2
      }
      menuItem29_s3: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidImageS3
      }
      menuItem29_s4: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidImageS4
      }
      menuItem29_s5: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidImageS5
      }
      menuItem29_s6: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidImageS6
      }

      menuItem30: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidHdImage
      }
      menuItem30_s2: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidImageS2
      }
      menuItem30_s3: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidImageS3
      }
      menuItem30_s4: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidImageS4
      }
      menuItem30_s5: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidImageS5
      }
      menuItem30_s6: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidImageS6
      }
    }
  `);
};
