function secondLargest(nums) {

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }  
  }
  return secondLargest;
}

console.log(secondLargest([5, 5, 3])); // 3