// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
// //   console.log(shape.diameter());

//   console.log(shape.perimeter());


// function getData() {
//     this.name = "gajanan";
//     this.age = 21;
//     this.disp = () => {
//         //reference error
//         this.age = 24;
//         console.log(this.name, this.age)
//     }
//     this.show = function () {
//         // Gajanan
//         this.age = 24;
//         console.log(this.name, this.age)
//     }
// }

// let val = new getData()
// val.disp();
// val.show()

// -------------------------------------------------------

// let obj = {
//     name: "Gajanan",
//     age: 22,
//     show() {
//         this.ableToVote = true
//     },
//     disp() {
//         if (this.ableToVote) {
//             console.log("Able to vote")
//         } else {
//             console.log("Unable to vote")
//         }
//     }
// }

// // let obj2 = {}
// // obj2.__proto__ = obj;
// obj.show();
// obj.disp();
// obj2.disp(); // here output will be "able to vote" 
// because obj.show() is called and obj2.__proto__ is child of obj.
// but ------ if initially obj2.show() is called and after that obj.disp() is called,
// it gives "Unable to vote" because, when child's method is called, that value is not passed to parent, but when parent's method is called that 
// value is passed to child's proto.
// console.log(obj2, obj)
// console.log(obj2.name)

//--------------------------------------------------------------------------

// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
//     }

//     constructor({newColor = 'green'} = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({
//     newColor: 'purple'
// });
// console.log(Chameleon.colorChange('orange'));
// console.log(freddia.newColor)
//------------------------------------------------------------------------------

// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
//   checkAge({ age: 18 });

// -------------------------------------------------------

// let name = Symbol('name');

// let obj = {
//     [name]: 'Gajanan'
// }

// console.log(obj)


// -----------------------------------------------

// const a = {};
// const b = [10, 20] 
// const c = [30, 40]

// a[b] = 123;
// a[c] = 456;
// console.log(Object.keys(b))

// console.log(a[b], a[c]);

// ------------------------------------------------


// I.I.F.E
// function sayHi() {
//     return (() => 0)();
// }

// console.log(typeof sayHi());


// (function () {
//     console.log("Hello")
// })()

// (() => {
//     let x, y;
//     try {
//         throw new Error();
//     } catch (x) {
//         console.log(x);
//             (x = 1), (y = 2);
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

//---------------------------------------------------

// console.log(
//     [
//         [0, 1],
//         [2, 3]
//     ].reduce(
//         (acc, cur) => {
//             return acc.concat(cur);
//         },
//         [1, 2],
//     )
// )

//--------------------------------------
