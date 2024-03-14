"use strict";

/// Level 1 ///

const array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
// console.log("array:", array);
array.forEach((items) => {
  console.log(items);
});

// ----------------------------------------------------- //

const newArr = array.map((item) => {
  return item * 5;
});
console.log("newArr:", newArr);

// ----------------------------------------------------- //

const sort = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};
const sortResult = sort(array);
console.log("sortResult:", sortResult);

const sortReverse = (arr) => {
  return arr.sort((a, b) => {
    return b - a;
  });
};
const reversedResult = sortReverse(array);
console.log("reversedResult:", reversedResult);

// ----------------------------------------------------- //

const sumInitialValues = array.reduce((accumulator, item) => {
  return (accumulator += item);
}, 0);
console.log("sumInitialValues:", sumInitialValues);

/// Level 2 ///

const autoArr = ["Mercedes", "Audi", "BMW", "VolksWagen"];

const sortedArr = (arr) => {
  return arr.sort((a, b) => {
    return a.length - b.length;
  });
};

const asResult = sortedArr(autoArr);
console.log("asResult:", asResult);

/// Level 3 ///

let strings = [
  "Hello",
  "World",
  "Hello",
  "World",
  "Hello",
  "Hello",
  "World",
  "World",
  ":-O",
];

// const unique = (arr) => {
//   let newArr = [];

//   for (let value of arr) {
//     if (!newArr.includes(value)) {
//       newArr.push(value);
//     }
//   }
//   return newArr;
// };

const unique = (arr) => {
  let newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

console.log(unique(strings));

/// Level 4 ///

const arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 12];
const arr2 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
const arr3 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];

const mostOftenNumber = (arr) => {
  return arr.sort((a, b) => {
    const firstNum = arr.filter((num) => num === a).length;
    const secondNum = arr.filter((num) => num === b).length;

    if (firstNum === secondNum) {
      return b - a;
    }
    return secondNum - firstNum;
  })[0];
};
const result1 = mostOftenNumber(arr1);
const result2 = mostOftenNumber(arr2);
const result3 = mostOftenNumber(arr3);

console.log("result:", result1, result2, result3);
