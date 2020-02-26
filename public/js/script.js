console.log('NodeJS');

// var x = 5;
// console.log(x);
//
// y = 10;
// console.log(y);
//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);


let x = 2;
const y = 10; // Can not change value when value is declared const.
console.log(x);
console.log(y);
// y = 25;
console.log(y);

// let has block scope. It is only inside the structure where it is declared.
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// console.log(i);

// function total(p,q){
//   console.log(p + q);
// }
// total(2,3);

let total =(p,q) => {
  console.log(p+q); //local scope
}

total(2,3); // can be called even when the definition comes later.


// es5
// total(5,8); calls even when the definition comes later
//
// function total(p,q){
//   console.log(p+q);
// }


// let name = "Yoobee";
//
//
// //es6
// let total =(p,q) => console.log(p+q); //local scope
// total(2,3); //can be called only after defining the function

// console.log(p,q);
