// function containDuplicate(nums) {
//   let newArray = {};
//   for (let num of nums) {
//     if (newArray.hasOwnProperty(num)) {
//       return true;
//     }
//     newArray[num] = true; // Store element as key in the object
//   }
//   return false; // Return false if no duplicate is found
// }

// let nums = [1, 2, 3, 1];

// console.log(containDuplicate(nums)); // Output: true

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

// var topKFrequent = function (nums, k) {
//   let freqMap = new Map();
//   nums.forEach((num) => freqMap.set(num, (freqMap.get(num) || 0) + 1));

//   let sorted = Array.from(freqMap.entries()).sort((a, b) => a - b);
//   return sorted.slice(0, k).map((entry) => entry[0]);
// };
// let nums = [1, 1, 1, 2, 2, 3],
//   k = 2;

// console.log(topKFrequent(nums, k));

// var productExceptSelf = function (nums) {
//   let n = nums.length;
//   let output = new Array(n).fill(1);
//   leftSide = 1;
//   rightSide = 1;

//   for (let i = 0; i < n; i++) {
//     output[i] = leftSide;
//     leftSide *= nums[i];
//   }
//   for (let i = n - 1; i >= 0; i--) {
//     output[i] *= rightSide;
//     rightSide *= nums[i];
//   }
//   return output;
// };

// const nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums));

// var validSudoku = function (board) {
//   const newBoard = new Set(); // 'const' added for variable declaration

//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       const cellVal = board[i][j];
//       if (cellVal !== ".") {
//         const rowVal = `row ${i} ${cellVal}`;
//         const colVal = `col ${j} ${cellVal}`;
//         const boxVal = `box ${Math.floor(i / 3)} ${Math.floor(
//           j / 3
//         )} ${cellVal}`; // Corrected box value calculation

//         if (
//           newBoard.has(rowVal) ||
//           newBoard.has(colVal) ||
//           newBoard.has(boxVal)
//         ) {
//           return false;
//         } else {
//           newBoard.add(rowVal);
//           newBoard.add(colVal);
//           newBoard.add(boxVal);
//         }
//       }
//     }
//   }
//   return true;
// };

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// console.log(validSudoku(board));

function funcEncoded(strgs) {
  return strgs.map((strg) => `${strg.length}/${strg}`).join("");
}

function funcDecoded(strgs) {
  const result = [];
  let i = 0;

  while (i < strgs.length) {
    const slashIndex = strgs.indexOf("/", i);
    // console.log(slashIndex);
    const length = parseInt(strgs.slice(i, slashIndex));
    // console.log(length)

    result.push(strgs.slice(slashIndex + 1, slashIndex + 1 + length));
    i = slashIndex + length + 1;
  }
  return result;
}

let strgs = ["hello", "worlde", "leetcode"];
const encodeVal = funcEncoded(strgs);
const decodeVal = funcDecoded(encodeVal);
console.log(decodeVal);

console.log(encodeVal);
