// const calculateAge = birthYear => 2019 - birthYear;

// const yearUntilRetirement = object => {
//   const age = calculateAge(object.year);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(`${object.firstName} retires in ${retirement} years.`);
//   } else {
//     console.log(`${object.firstName} is already retired.`);
//   }
// };

// yearUntilRetirement({ year: 1987, firstName: 'John' });

// // no 2
// const addNumber = (...numbers) => {
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     return sum;
//   };
  
//   console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
  
 // no 3
 
//  const phi = 3.14;
// const power = 2;
// let radius = 0;

// const calculateArea = obj => phi * Math.pow(obj.radius, obj.power);

// radius = 21;
// const area21 = calculateArea({ radius, power });

// radius = 7;
// const area7 = calculateArea({ radius, power });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// no 4
// const phi = 3.14;
// const power = 2;
// let radius = 0;

// const calculateArea = obj => phi * Math.pow(obj.radius, obj.power);

// radius = 21;
// const area21 = calculateArea({ radius, power });

// radius = 7;
// const area7 = calculateArea({ radius, power });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// BAGIAN 2
// // part A
// const helloWorld = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000);
//     });
//   };
//  // b 
//   const messages = async () => {
//     const msg = await helloWorld();
//     console.log(msg);
//   };
// // c
//   messages();
  