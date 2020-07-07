const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log([0]); //O(1)
  console.log([1]); //O(1)
}

logFirstTwoBoxes(boxes); //O(2)

// O stands for operations value in the parentheses is the number of operations