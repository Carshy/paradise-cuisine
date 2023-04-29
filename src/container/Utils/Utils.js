/* eslint-disable arrow-body-style */
export const formatString = (string) => {
  return string.toLowerCase().replace(/\s/g, '_');
};

export const isValidString = (string) => string !== null && /[A-Za-z\d]/g.test(string);

export const getIngredientMaterials = (object) => {
  // Convert object to entries..
  let result = [];
  const arr = Object.entries(object);

  arr.forEach((entry) => {
    if (entry[0].startsWith('strIngredient') && isValidString(entry[1])) {
      let pair = new Array(2);
      pair[0] = entry[1];
      result.push(pair);
    } else if (entry[0].startsWith('strMeasure') && isValidString(entry[1])) {
      const position = parseInt(entry[0].replace('strMeasure', '')) - 1;
      result[position][1] = entry[1];
    }
  });

  return result;
};
