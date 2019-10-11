function convertStringToArray(string) {
  var os = require("os");

  return string.split(os.EOL);

  var newArray = [];

  for (let i = 0; i < string.length; i++) {
    var element = string[i];
    newArray.push(element);
  }

  return newArray;
}
 
console.log(convertStringToArray(""));
 