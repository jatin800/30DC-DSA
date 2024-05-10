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






