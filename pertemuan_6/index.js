// // const dapat diganti elemen didalamnya 
// // tetapi let dapat diganti semuanya

// // const pada Array & Object , constanta tidak bisa dirubah

// const numbers = [1,2,3,4,5];
// numbers[3] = 10;
// console.log(numbers);


// const john = {
//     firstName:"john",
//     age:33,
//     status: "active",
// };

// john.status = "not active";
// console.log(john);

// var grade = 100;

// // var grade = 90; // var bisa diganti, klo let nda bisa 
// // console.log(grade);

// // //var  bisa diakses dari luar : tidak mengenal block scoping

// //     //string literal

// // // john = objek
// // const john = {
// //     firstName : "john",
// //     lastName: "doe",
// //     age:33,
// //     status:"active"
// // };

// // //halo nama saya john doe, umur saya 33 tahun dan status saya active
// // const kalimat = "Halo nama saya " + john.firstName +
// //  " " + john.lastName + ", umur saya " + john.age 
// //  + " tahun, status saya " + john.status;

// //  console.log(kalimat);

// //     // BACKTICK : calling function
// //  const kalimat6 = `Halo nama saya ${john.firstName} ${john.lastName},`

// //     // ARROW FUNCTION

// // function greetings() {
// //     return `Hello world`;
// // }

// const greetings2 = (fullName) => {
//     return `Hello ${fullName} this is arrrow function`;
// };
// // panggil
// console.log(greetings2("John Doe"));
// // kalo function panggil trus ada return paggil dengan console.log

//     // implicit Return Value : FUNGSI YANG LANGSUNG RETURN VALUE 

// let numbers = [1,2,3,4,5];
// let res = numbers.map((element) => element);
// // // arrow function lebih cepat

// // //tanpa row function
// // let res2 = numbers.map(function(element) {
// //     return element;
// // });

// // console.log(res);

// // // default parameter
// // const greetings1 = (fullName, age) => 
// //  if (fullName === undefined) {
// //     fullName = "John Doe";
// // }
// //  if (age === undefined) {
// //     age = 33;
// // }

// // return `Hello my name is ${fullName}, dan umur saya ${age} tahun`;
// // };
// // console.log(greetings1("athalia", 35));

// // const greetings6 = (fullName = "JOhn Doe", age = 33) =>
// // `Hello nama saya ${fullName}, dan umur saya ${age} tahun`;

// // console.log(greetings6("athax", 20));

// //Rest(sisa) Parameter : simpan parameter yg di clg menjadi array
// const penjumlahan = (.a,b,c,..params) => { // rest paramerter harus diposisi AKHIR
//     let hasil = 0;
//     params.forEach((element) => {
//         hasil += element;
//     });
// //     return hasil;

// // };
// // console.log(penjumlahan(1,2,3,4,5,6))

// //     // SPREAD OPERATOR WITH ARRAY (...) pecah/sebarkan elemn di array menjadi masing"
// //     // tujuan : duplicate array 
//     // 
// let numbers = [1,2,3,4,5];
// console.log(...numbers);

// // tujuan : duplikasi array dgn cara dibawahini kurang tepat
// let numbers1 = [1,2,3,4,5];
// let numbers2 = [...numbers1];

// numbers1.push(6);
// numbers2.push(7);

// console.log("numbers1 : ",numbers1);
// console.log("numbers2 :", numbers2);

    // menggabunhkan array
let numbers1 = [1,2,3];
let numbers2 = [5,6,7];
let numbers3 = [8,9,10];

// let combineNumbers5 = numbers1.concat(numbers2, numbers3);
// console.log(combineNumbers5);
let combineNumbers6 = [...numbers1,4,...numbers2,...numbers3];
console.log(combineNumbers6);
