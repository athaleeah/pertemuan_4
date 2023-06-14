//     // DESTRUCTURING ARRAY & OBJECT
//  // ambil dan simpan kevariable yg berbeda : dari array ke variable tersipah
// let numbers = [1,2,3,4,5];

// // let num1 = numbers[0];
// // let num2 = numbers[1]; cara lama DESTRUCTURING
// // let num3 = numbers[2];

// // let [num1,num2,num3,num4,num5] = numbers; //destructure semua

// // console.log(num1);
// // console.log(num2);

// //DESTRUCTURE SEBAGIAN/BEBERAPA SAJA
// // CONTOH bilangan ganjil saja

// let [num1,,num3,,num5] = numbers; // kosongkan dibagian yg tidak mau diambil ilainya
// console.log(num3);

//     //DESTRUCTURING OBJECT
// let john = {
//     fullName:"John doe",
//     age:33,
// };

// const{fullName,age:umur,status} = john; // ganti nama variable ketik : titik dua
// console.log(fullName);
// console.log(umur);

//     // DESTRUCTURING PADA PARAMETER FUNGSI
// const greetings = (obj) => {
//     return `hello my name is ${obj.fullName} and I'm ${obj.age} years old`
// };

// console.log(greetings(john));

    //EXPORTING OBJEK, FUNGSI , VARIABLE , OBJ DAN VAR SEKALIGUS


// ============================
// module                           // TIDAK BISA OUTPUT DI NODE, MUSTI DI HTML!
//==============================
// import {nama,angka,john} from "./utils.js";
// import greetings from "./utils.js"; /// boleh beda nama khusus export default
// import penjumlahan from "./penjumlahan.js";

// console.log(nama);
// console.log(angka);

// console.log(greetings());
// console.log(penjumlahan(10,20));

// ===================
// ASYNCHRONOUS : proses perintah sambil menunggu proses yg lain berjalan (sambil tunggu, melakukan yg lain)
// ===================

// contoh sinkronus (berjalan berurutan/1 per satu) /blocking/ misalnya ada eror di satu code maka akan lambat dibagian itu
console.log("proses 1");
setTimeout(()=> {
    console.log("proses 1");
}, 2000); // tunggu 2 detik baru proses 1 muncul
console.log("proses 2");
setTimeout(()=> {
    console.log("proses 3");
}, 3000); // tunggu 3 detik baru proses 3 muncul
console.log("proses 4");

    // 2 JENIS ASINKRONUS
    //1. PARALEL : JALAN BERSAMA"

    //2. CONCURRENT : BERURUTAN/ MENUNGGU

    setTimeout(() = {
        console.log("proses 1");
        setTimeout(() => {
            console.log("proses 2");
            setTimeout
        })
    })


// PROMISE SEDERHANA
let condition = true
let new Promise = new Promise((resolve, reject) => {
    
})