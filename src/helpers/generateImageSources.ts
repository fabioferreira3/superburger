import _ from "lodash";

const figureOutGroupKeys = (imageMapping: any) => {
  const regex = /(?=_s[1-6]$)\w+/;
  return _.chain(imageMapping)
    .map((data, idx) => idx)
    .filter((groupKey: any) => !regex.test(groupKey))
    .value();
};

export const generateImageSources = (
  imageMapping: any,
  groupImages = false
) => {
  const groupKeys = figureOutGroupKeys(imageMapping);
  const newSources: any = {};

  const sources = _.mapValues(imageMapping, (imageData: any, index) => {
    let mediaQuery = {};
    if (_.includes(index, "_s2")) {
      mediaQuery = `(max-width:1919px) and (min-width:1600px)`;
    } else if (_.includes(index, "_s3")) {
      mediaQuery = `(max-width:1599px) and (min-width:1366px)`;
    } else if (_.includes(index, "_s4")) {
      mediaQuery = `(max-width:1365px) and (min-width:1024px)`;
    } else if (_.includes(index, "_s5")) {
      mediaQuery = `(max-width:1023px) and (min-width:768px)`;
    } else if (_.includes(index, "_s6")) {
      mediaQuery = `(max-width:767px)`;
    } else {
      mediaQuery = `(min-width:1920px)`;
    }

    return {
      ...imageData.childImageSharp.fluid,
      media: mediaQuery,
    };
  });

  if (!groupImages) {
    return _.toArray(sources);
  }

  _.forEach(groupKeys, (keyName: any) => {
    newSources[keyName] = _.toArray(
      Object.keys(sources)
        .filter(key => key.includes(keyName))
        .reduce((obj: any, key) => {
          obj[key] = sources[key];
          return obj;
        }, {})
    );
  });
  console.log(newSources);

  return newSources;
};
