// unoptimized version / brute force

// var lengthOfLongestSubstring = function(s) {
//   var count = {};
//   var longest = 0;
//   if (s === ' ' || s.length === 1) {
//       return 1;
//   }
//   for (let i = 0; i < s.length; i++) {
//     count[s[i]] = 1;
//       for (let j = i + 1; j < s.length; j++) {
//         count[s[j]] === undefined ? count[s[j]] = 1 : count[s[j]]++;
//         if (count[s[j]] > 1 || j === s.length - 1) {
//           if (Object.keys(count).length > longest) {
//               longest = Object.keys(count).length;
//           }
//           break;
//         } else {
//           continue;
//         }
//       }
//     count = {};
//   }

//   return longest;
// };

var lengthOfLongestSubstring = (s) => {

  if (!s) return 0;
  if (s.length < 2) return s.length;
  let ls = s[0];
  let cs = s[0];

  for (let i = 0; i < s.length; i++) {

    let index = cs.indexOf(s[i]);

    if (index > -1) {
      if (cs.length > ls.length) {
        ls = cs;
      }

      cs = cs.substring(index + 1, cs.length) + s[i];
    } else {
      cs = cs + s[i];
    }
  }
  if (cs.length > ls.length) ls = cs;
  return ls.length;
};

console.log(lengthOfLongestSubstring('pwwkew'));
