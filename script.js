// function containDuplicate(nums) {
//   let newSet = new Set();

//   for (let num of nums) {
//     if (newSet.has(num)) {
//       return true;
//     }
//     newSet.add(num);
//   }
//   return false;
// }

// const nums = [1, 2, 3, 1];

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

// function funcEncoded(strgs) {
//   return strgs.map((str) => `${str.length}/${str}`).join("");
// }

// function funcDecoded(strgs) {
//   let result = [];
//   let i = 0;
//   while (i < strgs.length) {
//     let slashIndex = strgs.indexOf("/", i);
//     let length = parseInt(strgs.slice(i, slashIndex));
//     result.push(strgs.slice(slashIndex + 1, slashIndex + 1 + length));
//     i = slashIndex + length + 1;
//   }
//   return result;
// }

// let strgs = ["hello", "worlde", "leetcode"];
// const encodeVal = funcEncoded(strgs);
// const decodeVal = funcDecoded(encodeVal);
// console.log(decodeVal);

// console.log(encodeVal);

// function funcEncoded(strgs) {
//   return strgs.map((str) => `${str.length}/${str}`).join("");
// }

// function funcDecoded(strgs) {
//   let result = [];

//   // In the case of the funcDecoded function, we are iterating over an encoded string where the length of each encoded substring is not fixed. We need to dynamically find the next slash index to extract the length and then the substring itself.
//   // Here's how the while loop accomplishes this:
//   let i = 0;
//   while (i < strgs.length) {
//     let slashIndex = strgs.indexOf("/", i);
//     let length = parseInt(strgs.slice(i, slashIndex));
//     //We are using slice to extract a portion of the encoded string strgs starting from index i up to (but not including) the slashIndex. This portion contains the length of the current substring.
//     // Here's what each parameter represents:
//     // The first parameter i is the starting index from which to begin extracting the substring.
//     // The second parameter slashIndex is the index up to which the substring should be extracted.
//     // So, effectively, this line extracts the portion of the encoded string that represents the length of the current substring. This portion is then parsed into an integer using parseInt to get the actual length value.

//     result.push(strgs.slice(slashIndex + 1, slashIndex + 1 + length));
//     i = slashIndex + 1 + length;
//   }
//   return result;
// }

// let strgs = ["hello", "worlde", "leetcode"];
// const encodeVal = funcEncoded(strgs);
// const decodeVal = funcDecoded(encodeVal);
// console.log(decodeVal);
// console.log(encodeVal);

// // Initialize function longestConsecutive(nums)
// function longestConsecutive(nums) {
//   // Check if the input array is empty

//   if (nums.length === 0) return "Nikal";

//   let newSet = new Set(nums);
//   let MAX_LEENGTH = 0;

//   for (let set of newSet) {
//     if (!newSet.has(set - 1)) {
//       let currentNum = set;
//       let currentLength = 1;

//       while (newSet.has(currentNum + 1)) {
//         currentNum++;
//         currentLength++;
//       }

//       MAX_LEENGTH = Math.max(MAX_LEENGTH, currentLength);
//     }
//   }
//   return MAX_LEENGTH;
// }

// // Example input array 'nums'
// const nums = [0, 1];
// // Call the longestConsecutive function with input 'nums' and log the result
// console.log(longestConsecutive(nums)); // Output should be the length of the longest consecutive sequence

// function isValidPalaidrom(s) {
//   console.log(s);
//   let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   console.log(str);
//   let str2 = str.split("").reverse().join("");
//   console.log(str2);

//   if (str === str2) return true;
//   else return false;
// }

// let s = "race a car";
// console.log(isValidPalaidrom(s));

// function twoSum(nums, k) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     if (nums[left] + nums[right] === k) {
//       return [left + 1, right + 1];
//     } else if (nums[left] + nums[right] < k) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return [];
// }

// const nums = [5, 7, 5, 15];
// const k = 10; // Provide the target sum 'k'

// console.log(twoSum(nums, k)); // Output: [1, 2] (indices of the two numbers that add up to 9)

// function threeSum(nums) {
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     debugger;
//     if (i > 0 && nums[i] == nums[i - 1]) {
//       continue;
//     }
//     let leftPointer = i + 1;
//     let rightPointer = nums.length - 1;

//     while (leftPointer < rightPointer) {
//       const sum = nums[i] + nums[leftPointer] + nums[rightPointer];
//       if (sum > 0) {
//         rightPointer--;
//       } else if (sum < 0) {
//         leftPointer++;
//       } else if (sum === 0) {
//         result.push([nums[i], nums[leftPointer], nums[rightPointer]]);
//         leftPointer++;
//         while (
//           nums[leftPointer] == nums[leftPointer - 1] &&
//           leftPointer < rightPointer
//         ) {
//           leftPointer++;
//         }
//       }
//     }
//   }
//   return result;
// }

// const nums = [-1, 0, 1, 2, -1, -4];

// console.log(threeSum(nums));

// var isValidSudoku = function (board) {
//   const newBoard = new Set(); // 'const' added for variable declaration

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
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
//           return "duplicate agya";
//         } else {
//           newBoard.add(rowVal);
//           newBoard.add(colVal);
//           newBoard.add(boxVal);
//         }
//       }
//     }
//   }
//   return "koi duplicate nhi hai";
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

// console.log(isValidSudoku(board));

// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;
//   const numSet = new Set(nums); // Creating a set from nums array
//   let maxLength = 0;

//   numSet.forEach((num) => {
//     if (!numSet.has(num - 1)) {
//       // Only start counting from the beginning of a sequence
//       let currNum = num;
//       let currLen = 1;
//       while (numSet.has(currNum + 1)) {
//         // Keep incrementing currNum until it's not present in numSet
//         currNum++;
//         currLen++;
//       }
//       maxLength = Math.max(maxLength, currLen); // Update maxLength if required
//     }
//   });

//   return maxLength;
// };

// const nums = [99,100, 4, 200, 1, 1, 1, 1, 1, 3, 2];

// console.log(longestConsecutive(nclg

// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function (height) {
//   // debugger;
//   let left = 0;
//   let right = height.length - 1;
//   let leftMax = 0;
//   let rightMax = 0;
//   let water = 0;

//   while (left < right) {
//     if (height[left] <= height[right]) {
//       leftMax = Math.max(leftMax, height[left]);
//       water += leftMax - height[left];
//       left++;
//     } else {
//       rightMax = Math.max(rightMax, height[right]);
//       water += rightMax - height[right];
//       right--;
//     }
//   }

//   return water;
// };

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// console.log(trap(height));

// function characterReplacement(s, k) {
//   const charCount = new Map();
//   let maxCount = 0;
//   let maxLen = 0;
//   let rightPointer = 0;

//   for (let leftPointer = 0; leftPointer < s.length; leftPointer++) {
//     // Increment the count of the current character
//     charCount[s[leftPointer]] = (charCount[s[leftPointer]] || 0) + 1;

//     // Update the maximum count in the current window
//     maxCount = Math.max(maxCount, charCount[s[leftPointer]]);

//     // If the window size exceeds the maximum repeating character count + k
//     // We need to shrink the window from the left
//     while (leftPointer - rightPointer + 1 - maxCount > k) {
//       charCount[s[rightPointer]]--;
//       rightPointer++;
//     }

//     // Update the maximum length
//     maxLen = Math.max(maxLen, leftPointer - rightPointer + 1);
//   }

//   return maxLen;
// }

// const s = "AABABBA",
//   k = 1;

// console.log(characterReplacement(s, k));

// function maxArea(height) {
//   let max = 0;
//   let leftPointer = 0;
//   let rightPointer = height.length - 1;

//   while (leftPointer < rightPointer) {
//     let width = rightPointer - leftPointer;
//     let currHeight = Math.min(height[leftPointer], height[rightPointer]);
//     const area = width * currHeight;
//     max = Math.max(max, area);
//     if (height[leftPointer] < height[rightPointer]) {
//       leftPointer++;
//     } else {
//       rightPointer--;
//     }
//   }
//   return max;
// }

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// console.log(maxArea(height));

// function threeSum(nums) {
//   const sortedNum = nums.sort((a, b) => a - b);
//   const result = [];
//   console.log(sortedNum);
//   for (let i = 0; i < sortedNum.length; i++) {
//     if (i > 0 && sortedNum[i] == sortedNum[i - 1]) {
//       continue;
//     }
//     let leftPointer = i + 1;
//     let rightPointer = nums.length - 1;
//     while (leftPointer < rightPointer) {
//       let sum = [
//         sortedNum[i] + sortedNum[leftPointer] + sortedNum[rightPointer],
//       ];
//       if (sum > 0) {
//         rightPointer--;
//       } else if (sum < 0) {
//         leftPointer++;
//       } else {
//         result.push([
//           sortedNum[i],
//           sortedNum[leftPointer],
//           sortedNum[rightPointer],
//         ]);
//         leftPointer++;
//         rightPointer--;
//         while (
//           leftPointer < rightPointer &&
//           sortedNum[leftPointer] == sortedNum[leftPointer - 1]
//         ) {
//           leftPointer++;
//         }
//         while (
//           leftPointer < rightPointer &&
//           sortedNum[rightPointer] == sortedNum[rightPointer + 1]
//         ) {
//           rightPointer--;
//         }
//       }
//     }
//   }
//   return result;
// }

// const nums = [-1, 0, 1, 2, -1, -4];

// console.log(threeSum(nums));

// function func(substring, string) {
//   if (substring > string) return false;

//   const substringLength = substring.length;
//   const stringLength = string.length;

//   const array1 = new Array(26).fill(0);
//   const array2 = new Array(26).fill(0);

//   for (let i = 0; i < substringLength; i++) {
//     array1[substring.charCodeAt(i) - 97]++;
//     array2[string.charCodeAt(i) - 97]++;
//   }

//   for (let i = substringLength; i < stringLength; i++) {
//     if (arrayEqual(array1, array2)) return true;
//     array2[string.charCodeAt(i) - 97]++;
//     array2[string.charCodeAt(i - substringLength) - 97]--;
//   }
// }

// function arrayEqual(array1, array2) {
//   for (let i = 0; i < 26; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const s1 = "ab",
//   s2 = "eidbaooo";

// console.log(func(s1, s2));

// function func(height) {
//   let right = height.length - 1;
//   let left = 0;
//   let rightMaxArea = 0;
//   let leftMaxArea = 0;
//   let water = 0;
//   while (left < right) {
//     if (height[left] <= height[right]) {
//       leftMaxArea = Math.max(leftMaxArea, height[left]);
//       water += leftMaxArea - height[left];
//       left++;
//     } else {
//       rightMaxArea = Math.max(rightMaxArea, height[right]);
//       water += rightMaxArea - height[right];
//       right--;
//     }
//   }
//   return water;
// }

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// console.log(func(height));

// function func(prices) {
//   let minPrice = Infinity;
//   let maxPrice = 0;

//   for (let price of prices) {
//     minPrice = Math.min(minPrice, price);
//     maxPrice = Math.max(maxPrice, price - minPrice);
//   }
//   return maxPrice;
// }

// const prices = [7, 1, 5, 3, 6, 4];
// console.log(func(prices));

// function func(s) {
//   let maxLength = 0;
//   let start = 0;
//   const charMap = new Map();
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (charMap.has(char) && charMap.get(char) >= start) {
//       start = charMap.get(char) + 1;
//     }
//     charMap.set(char, i);
//     maxLength = Math.max(maxLength, i - start + 1);
//   }
//   return maxLength;
// }

// const s = "abcabcbb";
// console.log(func(s));

// function func(s, k) {
//   if (!s || k === undefined) return 0;

//   const freq = new Map();
//   let maxCount = 0;
//   let left = 0;
//   let maxLength = 0;

//   for (let right = 0; right < s.length; right++) {
//     let rightChar = s[right];
//     freq.set(rightChar, (freq.get(rightChar) || 0) + 1);
//     maxCount = Math.max(maxCount, freq.get(rightChar));

//     while (right - left + 1 - maxCount > k) {
//       let leftChar = s[left];
//       freq.set(leftChar, freq.get(leftChar) - 1);
//       left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// }

// const s = "ABAB", k = 2;

// console.log(func(s, k)); // Expected output: 4

// function func(s, k) {
//   const result = [];
//   const deque = [];
//   for (let i = 0; i < s.length; i++) {
//     let dequeLastIndexValue = deque[deque.length - 1];
//     while (deque.length > 0 && nums[dequeLastIndexValue] <= nums[i]) {
//       deque.pop();
//     }
//     if (deque[0] <= i - k) deque.shift();
//     deque.push(i);
//     if (i >= k - 1) result.push(nums[deque[0]]);
//   }
//   return result;
// }

// const nums = [1, 3, -1, -3, 5, 3, 6, 7],
//   k = 3;
// console.log(func(s, k)); // Expected output:

// function func(s) {
//   const stack = [];
//   const map = { "(": ")", "[": "]", "{": "}" };

//   for (let i = 0; i < s.length; i++) {
//     let str = s[i];
//     if (map.hasOwnProperty(str)) {
//       stack.push(str);
//     } else {
//       const remainingPart = stack.pop();
//       if (!map.hasOwnProperty(remainingPart)) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// const s = "()";
// console.log(func(s));

// function Function() {
//   this.stack = [];
//   this.minStack = [];
// }

// Function.prototype.push = function (value) {
//   this.stack.push(value);
//   if (
//     this.inStack.length === 0 ||
//     value <= this.minStack[this.minStack.length - 1]
//   ) {
//     this.minStack.push(value);
//   }
// };

// Function.prototype.pop = function (value) {
//   const popvalue = this.stack.pop();
//   if (popvalue === this.minStack[this.minStack.length - 1]) {
//     this.minStack.pop();
//   }
// };
// Function.prototype.top = function (value) {
//   return this.stack[this.stack.length - 1];
// };
// Function.prototype.getMin = function (value) {
//   return this.minStack[this.minStack.length - 1];
// };

// function func() {
//   const stack = [];
//   const operator = ["+", "-", "*", "/"];

//   for (let token of tokens) {
//     if (!operator.includes.includes(token)) {
//       stack.push(Number(token));
//     } else {
//       const oprnd2 = stack.pop();
//       const oprnd1 = stack.pop();

//       switch (token) {
//         case "+":
//           stack.push(oprnd1 + oprnd2);
//           break;
//         case "-":
//           stack.push(oprnd1 + oprnd2);
//           break;
//         case "*":
//           stack.push(oprnd1 + oprnd2);
//           break;
//         case "/":
//           stack.push(Math.trunc(oprnd1 + oprnd2));
//           break;
//         default:
//           break;
//       }
//     }
//   }
//   return stack.pop();
// }

// const tokens = ["2", "1", "+", "3", "*"];
// console.log(func(tokens));

// function func(n) {
//   const array = [];
//   const backTrack = (open, close, str) => {
//     if (str.length === n * 2) {
//       array.push(str);
//       return;
//     }
//     if (open < n) {
//       backTrack(open + 1, close, str + "(");
//     }
//     if (close < open) {
//       backTrack(open, close + 1, str + ")");
//     }
//   };
//   backTrack(0, 0, "");
//   return array;
// }

// const n = 3;
// console.log(func(n));

// var func = function (temperatures) {
//   const stack = [];
//   const answer = new Array(temperatures.length).fill(0);
//   let length = temperatures.length;

//   for (i = length - 1; i >= 0; i--) {
//     while (
//       stack.length > 0 &&
//       temperatures[i] >= temperatures[stack[stack.length - 1]]
//     ) {
//       stack.pop();
//     }
//     answer[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
//     stack.push(i);
//   }
//   return answer;
// };

// const temperatures = [73,74,75,71,69,72,76,73];

// console.log(func(temperatures));

// var func = function (heights) {
//   const stack = [];
//   let maxArea = 0;
//   for (let i = 0; i <= heights.length; i++) {
//     let currentHeight = i === heights.length ? 0 : heights[i];
//     while (
//       stack.length > 0 &&
//       currentHeight < heights[stack[stack.length - 1]]
//     ) {
//       const topIndex = stack.pop();
//       const topHeight = heights[topIndex];
//       let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//       let area = topHeight * width;
//       maxArea = Math.max(maxArea, area);
//     }
//     stack.push(i);
//   }
//   return maxArea;
// };
// const heights = [2, 4];
// console.log(func(heights));
// var func = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };
// const nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;
// console.log(func(nums, target));
// var func = function (mt, tt) {
//   let matrix = mt;
//   let target = tt;
//   let m = matrix.length;
//   let n = matrix[0].length;
//   let left = 0;
//   right = m * n - 1;
//   while (left <= right) {
//     let midPoint = Math.floor((left + right) / 2);
//     path = midPoint / n;
//     path2 = midPoint % n;
//     let midValue = matrix[Math.floor(path)][path2];
//     let plusOne = midPoint + 1;
//     let minusOne = midPoint - 1;
//     if (midValue === target) return true;
//     else if (midValue < target) left = plusOne;
//     else right = minusOne;
//   }
//   return false;
// };
// console.log(func(matrix, target));

function func(pls, h) {
  let l = 1;
  let r = Math.max(...pls);
  while (l < r) {
    const mP = Math.floor((l + r) / 2);
    let th = 0;
    for (let p of pls) {
      let s = p / mP;
      th += Math.ceil(s);
    }
    if (th <= h) r = mP;
    else l = mP + 1;
  }
  return l;
}
const piles = [3, 6, 7, 11],
  h = 8;
console.log(func(piles, h));
