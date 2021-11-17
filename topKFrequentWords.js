var words = ["i","love","leetcode","i","love","coding"];
var k = 2;

var topKFrequent = function(words, k) {
  // create words counting object
  var wcount = {};
  // iterate over the words array
  for (let i = 0; i < words.length; i++) {
    wcount[words[i]] === undefined ? wcount[words[i]] = 1 : wcount[words[i]]++;
  }

  let warray = [];
  let count = Object.values(wcount);
  let keys = Object.keys(wcount);
  for (let i = 0; i < keys.length; i++) {
    warray.push([keys[i], count[i]]);
  };

  warray.sort((a,b) => {
    return b[1] - a[1];
  });

  let final = [];

  for (let i = 0; i < k; i++) {
    final.push(warray[i][0]);
  }

  final.sort((a, b) => {
    return a.localeCompare(b);
  });

  return final;
};

console.log(topKFrequent(words, k));