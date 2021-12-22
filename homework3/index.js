// const arr = ['a','b','c'];
// const arr2 = [1,2,3];
// const arr3 = arr.concat(arr2);
// console.log(arr3)

// const arr = ['a','b','c'];
// const arr2 = arr.push (1,2,3);
// console.log(arr)

// const arr = [1,2,3];
// const rev = arr.reverse()
// console.log(rev)

// const arr = [1,2,3,4,5];
// console.log(arr.slice(0,3))

// const arr = [1,2,3,4,5];
// console.log(arr.slice(3,5))

// let obj =  {js:'test', jq: 'hello', css: 'world'}

// for (key in obj) {
//   if (obj.hasOwnProperty(key)) {
//   }
//   console.log(key);
// }


// let arr = [1,2,3,4]
// for (let i = 0; i < arr.length - 1; i++) {
//     arr.splice(i, 0, arr.pop());
// }
// console.log(arr)

// let arr =  [[1, 2, 3], [4, 5], [6]]
// let sum = arr.flat().reduce((a, b,) => a + b , 0);
// console.log(sum);

// let arr =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// let sum = arr.flat(2).reduce((a, b,) => a + b , 0);
// console.log(sum);

  let user1 = {
    name: "Vika",
    age: "36",
    password: "qwerty",
    isAdmin: true,
  };
  
  let user2 = {
    name: "Olga",
    age: "36",
    password: "12345",
    isAdmin: false,
  };
  
  for (const key in user1) {
    if (user1[key] == user2[key]) {
      console.log(key);
      console.log(user1[key])
    }
  }

// Да - Да в 10ом считирил и что? ахаха
