const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturnOne = nums.pop();
let popReturnTwo = nums.pop();

console.log("This is pop one: " + popReturnOne); //0
console.log("This is pop two: " + popReturnTwo); //1

// remove each of the first two items with shift(), saving each item to a variable
let shiftReturnOne = nums.shift();
let shiftReturnTwo = nums.shift();

console.log("This is shiftOne: " + shiftReturnOne); //6
console.log("This is shiftTwo: " + shiftReturnTwo); //5

// nums[2,3,4];
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shiftReturnTwo, shiftReturnOne);

console.log("This is nums: " + nums[0]);
