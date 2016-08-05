var arr = prompt().split(',');

function checkSum(array) {
  var sum = arr.reduce(function(a, b) {
    return Number(a) + Number(b);
  });

  var tempSumFirst = 0,
    tempSumLast = 0;
  if (arr.length == 1) {
    return 'Passed';
  }
  for (var i = 0; i < arr.length - 1; i++) {
    tempSumFirst += Number(arr[i]);
    tempSumLast += Number(arr[arr.length - i]);
    var result = (tempSumFirst == sum - Number(arr[i + 1]) - tempSumFirst) ? 'PASSED' : 'FAILED';
    var resultEnd = (tempSumLast == sum - Number(arr[arr.length - (i + 1)]) - tempSumFirst) ? 'PASSED' : 'FAILED';
    if (result == 'PASSED' || resultEnd == 'PASSED') {
      return 'PASSED';
    } else {
      continue;
    }
  }
  return 'FAILED';
}

console.log("TESTCASE:" + " " +checkSum(arr));
