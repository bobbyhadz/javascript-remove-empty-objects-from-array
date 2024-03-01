// EXAMPLE 1 - Remove Empty Objects from an Array in JavaScript

const arr = [{}, {id: 1}, {}, {id: 2}, {}];

const results = arr.filter(element => {
  if (Object.keys(element).length !== 0) {
    return true;
  }

  return false;
});

// 👇️ [{id: 1}, {id: 2}]
console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove Empty Objects from an Array using `Array.forEach()`

// const arr = [{}, {id: 1}, {}, {id: 2}, {}];

// const results = [];

// arr.forEach(element => {
//   if (Object.keys(element).length !== 0) {
//     results.push(element);
//   }
// });

// // 👇️ [ { id: 1 }, { id: 2 } ]
// console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove Empty Objects from an Array using a `for` loop

// const arr = [{}, {id: 1}, {}, {id: 2}, {}];

// const results = [];

// for (let index = 0; index < arr.length; index++) {
//   if (Object.keys(arr[index]).length !== 0) {
//     results.push(arr[index]);
//   }
// }

// // 👇️ [ { id: 1 }, { id: 2 } ]
// console.log(results);
