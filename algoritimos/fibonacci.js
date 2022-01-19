const fibonacciSequence = (n) => {
  const fibonacciArray = [];
  for (let index = 0; index <= n; index++) {
    if (index < 1) fibonacciArray.push(0);
    else if (index <= 2) fibonacciArray.push(1);
    else
      fibonacciArray.push(
        fibonacciArray[index - 1] + fibonacciArray[index - 2]
      );
  }
  return fibonacciArray;
};

console.log(fibonacciSequence(8));
