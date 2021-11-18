var solution = function(isBadVersion) {

  return function(n) {
      let i = 1;
      let j = n;

      while (i < j) {

          let midpoint = i + Math.floor((j - i) / 2);

          if (isBadVersion(midpoint)) {
              j = midpoint;
          } else {
              i = midpoint + 1;
          }
      }

      return i;
  };
};