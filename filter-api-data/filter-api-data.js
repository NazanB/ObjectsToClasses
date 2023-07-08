"use strict";
function filterApiData(apiData, mandatoryKeys) {
  let result = [];

  apiData.forEach((entry) => {
    let hitCount = 0;
    for (const key in entry) {
      if (mandatoryKeys.includes(key)) {
        hitCount++;
      }
    }
    if (hitCount === mandatoryKeys.length) {
      result.push(entry);
    }
  });
  return result;
}
