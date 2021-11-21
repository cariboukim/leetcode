# Leetcode Learning

## TopKFrequentWords

* Using Map as a sorting tool

* Explanation of a what Map() does: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map>

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
