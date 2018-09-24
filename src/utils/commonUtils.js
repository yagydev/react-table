export const searchingData = (array, key, prop) => {
  var results = [];

  prop = typeof prop === "undefined" ? "name" : prop;

  for (var i = 0; i < array.length; i++) {
    debugger;
    if (array[i][prop].includes("" + key)) {
      results.push(array[i]);
    }
  }
  return results;
};

export const getFilteredArray = (val, array) => {
  let tempArray = [];
  array.map(obj => {
    let dateDiff = checkDeffirence(obj.dateStarted);
    if (dateDiff <= val) {
      tempArray.push(obj);
    }
  });
  return tempArray;
};

const checkDeffirence = pDate => {
  var cDate = new Date();
  var preDate = new Date(pDate);
  var timeDiff = Math.abs(cDate.getTime() - preDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
};
