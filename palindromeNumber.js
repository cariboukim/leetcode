var isPalindrome = function(x) {

  // optimized

  //   if (x < 0) return false;

  //   let n = x;
  //   let reverse = 0;
  //   while (n) {
  //     let last = n % 10;
  //     reverse = reverse * 10 + last;
  //     n = Math.floor(n/10);
  //   }

  //   return reverse === x;

    // if (x < 0) return false;
    // let reverse = x.toString().split('').reverse().join('');
    // return Number(reverse) === x;

    var reverse = '';
    let string = x.toString();
    string = string.split('');
    if (x < 0) return false;;
    while (string.length > 0) {
      reverse += string.pop();
    }
    if (parseInt(reverse) === x) {
      return true;
    } else {
        return false;
    }

  };