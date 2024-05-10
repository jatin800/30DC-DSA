// function containDuplicate(nums) {
//   let newArray = [];
//   for (let num of nums) {
//     if (newArray.includes(num)) {
//       return true;
//     }
//     newArray.push(num);
//   }
// }

// let nums = [1, 2, 3, 1];

// console.log(containDuplicate(nums));

// function validAnagram(string1, string2) {
//   let str1 = string1.split("").sort().join("");
//   let str2 = string2.split("").sort().join("");

//   if (str1 === str2) {
//     return true;
//   }
//   return false;
// }

// let s = "anagram";
// let t = "nagaram";

// console.log(validAnagram(s, t));

// function twoSum(numberArr, target) {
//   for (let i = 0; i < numberArr.length; i++) {
//     for (let j = i + 1; j < numberArr.length; j++) {
//       if (numberArr[i] + numberArr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// let numberArr = [2, 7, 11, 15];

// let target = 9;

// console.log(twoSum(numberArr, target));

// function groupAnagrams(strs) {
//   const newAnagrams = new Map();

//   for (let word of strs) {
//     let sortedWords = word.split("").sort().join("");
//     if (newAnagrams.has(sortedWords)) {
//       newAnagrams.get(sortedWords).push(word);
//     } else {
//       newAnagrams.set(sortedWords, [word]);
//     }
//   }
//   return Array.from(newAnagrams.values());
// }

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagrams(strs));

var topKFrequent = function (nums, k) {
  let counter = new Map();
  console.log(counter);
  nums.forEach((num) => {
    counter.set(num, (counter.get(num) || 0) + 1);
  });
  let sorted = Array.from(counter.entries()).sort((a, b) => a - b);
  console.log(sorted);
    return sorted.slice(0, k).map((entry) => entry[0]);
};
let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, k));
