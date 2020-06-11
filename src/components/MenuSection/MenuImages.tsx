import { graphql, useStaticQuery } from "gatsby";
import { generateImageSources } from "../../helpers/generateImageSources";

export const getMenuItemsImagesData = () => {
  const data = useStaticQuery(graphql`
    query {
      menuItem1_: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem1__s2: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem1__s3: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem1__s4: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem1__s5: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem1__s6: file(relativePath: { eq: "menuItems/menu_item1.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem2_: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem2__s2: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem2__s3: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem2__s4: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem2__s5: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem2__s6: file(relativePath: { eq: "menuItems/menu_item2.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem3_: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem3__s2: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem3__s3: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem3__s4: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem3__s5: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem3__s6: file(relativePath: { eq: "menuItems/menu_item3.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem4_: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem4__s2: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem4__s3: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem4__s4: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem4__s5: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem4__s6: file(relativePath: { eq: "menuItems/menu_item4.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem5_: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem5__s2: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem5__s3: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem5__s4: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem5__s5: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem5__s6: file(relativePath: { eq: "menuItems/menu_item5.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem6_: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem6__s2: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem6__s3: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem6__s4: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem6__s5: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem6__s6: file(relativePath: { eq: "menuItems/menu_item6.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem7_: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem7__s2: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem7__s3: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem7__s4: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem7__s5: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem7__s6: file(relativePath: { eq: "menuItems/menu_item7.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem8_: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem8__s2: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem8__s3: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem8__s4: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem8__s5: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem8__s6: file(relativePath: { eq: "menuItems/menu_item8.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem9_: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem9__s2: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem9__s3: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem9__s4: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem9__s5: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem9__s6: file(relativePath: { eq: "menuItems/menu_item9.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem10_: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem10__s2: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem10__s3: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem10__s4: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem10__s5: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem10__s6: file(relativePath: { eq: "menuItems/menu_item10.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem11_: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem11__s2: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem11__s3: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem11__s4: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem11__s5: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem11__s6: file(relativePath: { eq: "menuItems/menu_item11.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem12_: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem12__s2: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem12__s3: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem12__s4: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem12__s5: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem12__s6: file(relativePath: { eq: "menuItems/menu_item12.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem13_: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem13__s2: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem13__s3: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem13__s4: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem13__s5: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem13__s6: file(relativePath: { eq: "menuItems/menu_item13.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem14_: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem14__s2: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem14__s3: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem14__s4: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem14__s5: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem14__s6: file(relativePath: { eq: "menuItems/menu_item14.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem15_: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem15__s2: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem15__s3: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem15__s4: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem15__s5: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem15__s6: file(relativePath: { eq: "menuItems/menu_item15.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem16_: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem16__s2: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem16__s3: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem16__s4: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem16__s5: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem16__s6: file(relativePath: { eq: "menuItems/menu_item16.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem17_: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem17__s2: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem17__s3: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem17__s4: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem17__s5: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem17__s6: file(relativePath: { eq: "menuItems/menu_item17.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem18_: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem18__s2: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem18__s3: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem18__s4: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem18__s5: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem18__s6: file(relativePath: { eq: "menuItems/menu_item18.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem19_: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem19__s2: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem19__s3: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem19__s4: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem19__s5: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem19__s6: file(relativePath: { eq: "menuItems/menu_item19.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem20_: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem20__s2: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem20__s3: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem20__s4: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem20__s5: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem20__s6: file(relativePath: { eq: "menuItems/menu_item20.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem21_: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem21__s2: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem21__s3: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem21__s4: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem21__s5: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem21__s6: file(relativePath: { eq: "menuItems/menu_item21.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem22_: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem22__s2: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem22__s3: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem22__s4: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem22__s5: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem22__s6: file(relativePath: { eq: "menuItems/menu_item22.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem23_: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem23__s2: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem23__s3: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem23__s4: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem23__s5: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem23__s6: file(relativePath: { eq: "menuItems/menu_item23.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem24_: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem24__s2: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem24__s3: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem24__s4: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem24__s5: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem24__s6: file(relativePath: { eq: "menuItems/menu_item24.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem25_: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem25__s2: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem25__s3: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem25__s4: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem25__s5: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem25__s6: file(relativePath: { eq: "menuItems/menu_item25.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem26_: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem26__s2: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem26__s3: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem26__s4: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem26__s5: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem26__s6: file(relativePath: { eq: "menuItems/menu_item26.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem27_: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem27__s2: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem27__s3: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem27__s4: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem27__s5: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem27__s6: file(relativePath: { eq: "menuItems/menu_item27.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem28_: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem28__s2: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem28__s3: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem28__s4: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem28__s5: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem28__s6: file(relativePath: { eq: "menuItems/menu_item28.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem29_: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem29__s2: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem29__s3: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem29__s4: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem29__s5: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem29__s6: file(relativePath: { eq: "menuItems/menu_item29.jpg" }) {
      #        ...fluidImageS6
      #      }

      menuItem30_: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
        ...fluidHdImage
      }
      #      menuItem30__s2: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
      #        ...fluidImageS2
      #      }
      #      menuItem30__s3: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
      #        ...fluidImageS3
      #      }
      #      menuItem30__s4: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
      #        ...fluidImageS4
      #      }
      #      menuItem30__s5: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
      #        ...fluidImageS5
      #      }
      #      menuItem30__s6: file(relativePath: { eq: "menuItems/menu_item30.jpg" }) {
      #        ...fluidImageS6
      #      }
    }
  `);

  return generateImageSources(data, true);
};
