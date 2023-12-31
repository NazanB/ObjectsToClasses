function zipStrings(strA, strB) {
  let result = "";
  let index = 0;

  while (!(strA[index] === undefined && strB[index] === undefined)) {
    if (!(strA[index] === undefined)) {
      result += strA[index];
    }
    if (!(strB[index] === undefined)) {
      result += strB[index];
    }
    index++;
  }

  return result;
}
//
console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
