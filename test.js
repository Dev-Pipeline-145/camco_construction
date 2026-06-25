function calculateAverage(numbers) {
  let total = 0;

  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length;
}

const scores = [85, 90, 78, 92];
console.log("Average Score:", calculateAverage(score));
