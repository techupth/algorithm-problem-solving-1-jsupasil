function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let firstNum, secondNum;
  for (let i = 0; i < numbers.length - 1; i += 1) {
    firstNum = numbers[i];
    for (let j = i + 1; j < numbers.length; j += 1) {
      secondNum = numbers[j];
      if (firstNum + secondNum === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([2, 7, 11, 15], 23));
