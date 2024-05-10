function containDuplicate(nums) {
  let newArray = [];
  for (let num of nums) {
    if (newArray.includes(num)) {
      return true;
    }
    newArray.push(num);
  }
}

let nums = [1, 2, 3, 1];

console.log(containDuplicate(nums));

function validAnagram(string1, string2) {
  let str1 = string1.split("").sort().join("");
  let str2 = string2.split("").sort().join("");

  if (str1 === str2) {
    return true;
  }
  return false;
}

let s = "anagram";
let t = "nagaram";

console.log(validAnagram(s, t));
