// newFunction();

// function newFunction() {

//     if (false != true) {
//         console.log("That makes sences");
//         if (1 < 2) {
//             console.log("no surprices there");
//         }
//     }




// }

// function deepReverse(array) {
//     array.reverse();
//     for(let i = array.length - 1; i >= 0; i--) {
//           if(array[i] instanceof Array) {
//                 deepReverse(array[i]);
//           }
//  }
//  return array;
// }
// deepReverse([ [ [ 6, 5, 4 ], 3, 2 ], 1 ]) 
// [ 4 ]
// [ 5, 4 ]
// [ 6, 4, 5 ]

// function add(a, b) {
//     return a + b;
// }

// function main(a, b, func) {
//     let c = a + b
//     let d = a - b
//     return function () {
//         m = func()
//         return c * d * m
//     }
// }
// let malti=main(3,4,add)