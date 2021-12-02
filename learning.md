# Leetcode Learning

## TopKFrequentWords

* Using Map as a sorting tool

* Explanation of a what [Map()](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map>) does.

* Explanation of what [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) does.

* Array.prototype.sort() is very effective because it sorts the array in place, and returns the original array, sorted however you would like.

1. After iterating through the array, and inputting all the values into the new Map, use a spread operator on the map object and sort by ascending/descending or as needed.

```javascript
words.forEach(n => map.set(n, map.get(n) + 1 || 1));

let sortedArray = [...map].sort((a, b) => {});
```

2. Using map.set() puts the specified key, value pair that you want into your map. In this case, we are using get to see whether or not this value already exists in the map and adding 1, if it does not exist, it defaults to 1.

### I can use spread operator on Map()? How does this work?

* This works because Map() returns an object filled with key, value pairs. Using a spread operator ``` ... ``` clones the object, allowing for different use cases to be possible with the object.

------

## LongestSubstring

* Using substring() to effectively splice from string, eliminating the need for an array

* Explanation on [substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

* Using String.substring() helps out a lot especially in this case where you need to find a specific part of the string that you need to cut out.

------

## Math.max() & Math.min()

* [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) and [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) were very useful in optimizing bestTimeToSellAndBuyStock.

* Math.max() just returns the largest of integers put into the input parameters like so, and Math.min() returns the smallest of integers

```Math.max(1, 3, 5), output = 5```
```Math.min(1, 3, 5), output = 1```

* In this use case, it was used to find the absolute max value, through subtracting the current price minus the smallest value possible, iterating through the array

* This allows for find the greatest difference without having to use multiple for loops or recursion, effectively reducing the possible time complexity

------

## for ... of

* Explanation of [for ... of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

* This syntax creates a loop iterating over iterable objects, so it can extend beyond arrays.

* So how does this differ from a normal for loop?  Syntax-wise, it is different but it also no longer terminates the loop based on previously stated arguemnts such as ``` for (let i = 0; i < array.length; i++) ```, the for ... of loop just iterates over all iterable elements and stops when there are no more things to iterate over, kind of like a while loop.

* When to know to use a regular for loop vs. a for ... of loop? Not quite sure myself, there are of course varying cases but I'll try experimenting with all of them and see which ones work the best! The knowledge of this for ... of loop does open a lot more opportunities and different ways to approach a problem.

------

## Encountering a bug in plusOne

* When working through this problem there was an interesting bug where using Number() on this particular string, [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3], would result in the last three digits turning into 0's

* I still do not know why this happens and have not found an explanation to why this happens but hopefully I can come back to this problem and figure out why this happens.

------

## Binary - using BigInt

* When going through this problem initially, I was really confused on what a binary string was. A quick google search and a quickly found out that a binary search was basically 1's and 0's that you would just add too a string, or that's kind of what I figured it out to be as. Binary string explained [here](https://www.ibm.com/docs/en/i/7.3?topic=types-binary-strings#:~:text=A%20binary%20string%20is%20a,has%20a%20CCSID%20of%2065535.).

* However, when actually trying to come up with a solution to this problem, I came into a problem where I had to add strings, which would not work, or in different cases where I would have to add strings where they had different integer positions.

* After struggling a bit, I came upon this discussion post on leetcode, where [nova2993](https://leetcode.com/problems/add-binary/discuss/1017596/Detail-Explanation-EASY-Single-Line-97-faster) talks about using BigInt and solving the problem in 1 line, which is super mind blowing to me.

* "0b" put in front a string that you're trying to convert lets BigInt() know that what you're tryign to pass in is a binary number.

* After converting the binary strings into binary numbers, you use toString to convert the BigInt number back into a binary string. You do this by passing the base that you want to convert the argument to.

``` str.toString(2) converts the str string to Binary (base 2) ```

------

## Climbing Stairs - memoization

* Memoization explained [here](https://www.digitalocean.com/community/tutorials/understanding-memoization-in-javascript).

* A basic definition of memoization, an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs are supplied again.

* So how do we use memoization in this case?
