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

function twoSum(numberArr, target) {
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] + numberArr[j] === target) {
        return [i, j];
      }
    }
  }
}

let numberArr = [2, 7, 11, 15];

let target = 9;

console.log(twoSum(numberArr, target));
