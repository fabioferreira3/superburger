import _ from "lodash";

export const generateImageSources = (imageMapping: any) => {
  return _.mapValues(imageMapping, (imageData: any, idx: number) => {
    let mediaQuery = {};
    switch (idx) {
      case 1:
        mediaQuery = `(max-width:1919px) and (min-width:1600px)`;
        break;
      case 2:
        mediaQuery = `(max-width:1599px) and (min-width:1366px)`;
        break;
      case 3:
        mediaQuery = `(max-width:1365px) and (min-width:1024px)`;
        break;
      case 4:
        mediaQuery = `(max-width:1023px) and (min-width:768px)`;
        break;
      case 5:
        mediaQuery = `(max-width:767px)`;
        break;
      default:
        mediaQuery = `(min-width:1920px)`;
        break;
    }
    return {
      ...imageData.childImageSharp.fluid,
      media: mediaQuery,
    };
  });
};
