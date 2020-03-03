/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   let index = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (
//       i !== index &&
//       nums[i] > nums[index] &&
//       nums[index + 1] <= nums[index]
//     ) {
//       for (let j = index + 1; j < i; j++) {
//         nums[j] = nums[i];
//       }
//       index++;
//     }
//   }
//   console.log(nums);
//   console.log(index);
//   return index;
// };
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] <= nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

removeDuplicates([1, 2]);
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
