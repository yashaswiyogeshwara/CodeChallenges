var inputStr = prompt("enter a string");

//console.log("Input String: " + inputStr);
//console.log("Input String Length: " + inputStr.length);
if (inputStr.length > 0) {
  var str = inputStr;
  var spaceIndexArr = [];
  var k = 1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      var spaceIndex = (i + k);
      spaceIndexArr.push(spaceIndex);
      k--;
    }
  }

  str = str.replace(/\s/gi, "");
  var len = str.length;
  var columns = Math.ceil(Math.sqrt(len));
  var rows = Math.floor(Math.sqrt(len));

  var encyMatrix = "";
  for (var k = 0; k < columns; k++) {
    for (var j = 0; j < len; j++) {
      if (str[(j * columns) + k]) {
        encyMatrix = encyMatrix + str[(j * columns) + k];
      } else {
        encyMatrix = encyMatrix + " ";
        break;
      }

    }

  }

  if (spaceIndexArr.length > 0) {
    encyMatrix = encyMatrix + "numsp" + " " + spaceIndexArr.join(" ");
  } else {
    encyMatrix = encyMatrix + " ";
  }

  console.log("Encrypted String: " + encyMatrix);
  //console.log("Encrypted String Length: " + encyMatrix.length);

  var decryptStr = "";
  var spaceNumIndex = encyMatrix.search("numsp");
  if (spaceNumIndex > -1) {
    var spaceNumArr = encyMatrix.slice(spaceNumIndex + "numsp".length + 1).split(" ");
    tempStr = encyMatrix.slice(0, spaceNumIndex - 1);
    var columnLength = tempStr.slice(0, tempStr.indexOf(" ")).length;
  } else {
    tempStr = encyMatrix;
  }
  var arrDecrypt = tempStr.split(" ");
  var decryptStr = "";
  var k = 1;

  for (var i = 0; i < arrDecrypt.length; i++) {
    arrDecrypt.forEach(function(subString) {
      if (subString[i]) {
        decryptStr += subString[i];
      }
    });
  }
  var k = 1;
  if (spaceIndexArr) {
    for (var j = 0; j < spaceIndexArr.length; j++) {
      decryptStr = decryptStr.slice(0, Number(spaceIndexArr[j]) - k) + " " + decryptStr.slice(Number(spaceIndexArr[j] - k));
      k--;
    }
  }
  console.log("Decrypted String: " + decryptStr);
  //console.log("Decrypted String Length: " + decryptStr.length);

} else {
  prompt("enter a valid string");
}
