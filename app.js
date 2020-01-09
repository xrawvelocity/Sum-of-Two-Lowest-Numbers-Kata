function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
  };
  
  console.log(sumTwoSmallestNumbers([2,4,51,34,44,1]))
