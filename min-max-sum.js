// solution 1
function miniMaxSum(arr = [1, 2, 3, 4, 5]) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  const sumTotal = arr.reduce((a, b) => a + b);
  const sumMin = sumTotal - max;
  const sumMax = sumTotal - min;

  console.log(sumMin + " " + sumMax);
}

// solution 2
function miniMaxSum2(arr = [1, 2, 3, 4, 5]) {
  let minMaxArray = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    minMaxArray.push(sum - arr[j]);
  }
  const max = minMaxArray.reduce((a, b) => Math.max(a, b));
  const min = minMaxArray.reduce((a, b) => Math.min(a, b));

  console.log(min + " " + max);
}
