
// 1. VARIABEL : LET (bisa dipisah) & CONST (tidak bisa dipisah)

// let firstName; //declare
// firstName ="John Doe"; // string // asign nilai

// let age = 30; // declare and inisiasi ,, only number
// age = "tiga puluh tahun"; // mengganti tipe data number ke string
// let isMarried = false; //boolean

// console.log(firstName);
// console.log(age);
// console.log(isMarried);
// console.log("Hallo nama saya " + firstName + "umur saya " + age + "tahun")

// //CONST = tidak bisa dilakukan terpisah, deklarasi dan inisialisasi dilakukan sekaligus
// const gender = "male";

// // 2. CONTOH operator matematika

// //modulus
// let bilangan1 = 10;
// let bilangan2 = 3;

// console.log(bilangan1 % bilangan2); // output: 1
// decrement (-1) increment(+1)
//contoh soal body mass seseorang

//3. ASSIGNMENT OPERATOR ( Memberikan nilai pada variable yg disingkat)
// let x = 10
// let y = 20
// y = x // output y = 10, x = 10

// x++; // ditambah 1
// console.log(x); // 11

// x = x+2;
// console.log(x); //13

// x += 2;
// console.log(x); //15

// // 4. STRING
// let kata = "kambing ada ";
// let bilangan = 5;
// console.log(kata)

//5 RELATIONAL OPERATORS - MENGHASILKAN BOOLEAN
// = ASSIGNMENT OPERATOR
// == cek nilai saja
// === dicek tipe data dan nilai (better use this to prevent error yg tidak diinginkan)
// console.log (x == y) // false , karena x = 10, y = 20 == different result means false

// let x = 20;
// let y = "20";

// console.log(x == y); // true 
// console.log(x === y); // false 

// // ternary operator
// // jika umur > 15 tahun sudah hbisa buat KTP
// let age = 17;
// let result = age >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP";
// console.log(result);

// // 6. LOGICAL OPERATOR
// // AND (both)&&, OR(slh satu) 
// let number1 = 6;
// let number2 = 4;

// console.log(bilangan1 )

// // 7. FUNCTION
 
// // "cara 1" declare function :
// function greetings(){
//     console.log("Hello World")
// }

// //cara 2 declare function :
// const greetings2 = function () {
//     console.log("Hello world 2");
// };

// greetings(); // harus panggil nama fungsi greetings
// greetings2();

// // using PARAMETER
// function greetings3(fullName, age){
//     console.log("Hello World 3" + fullName)
// }

// greetings3("John Doe", 30);

// //FUNGSI BISA RETURN/NILAI BALIK
// function greetings4(fullName, age){ // parameter
//     return "My name is" + fullName + ". I'm" + age + "Years old";
// }
// console.log(result) // argument = nilai yg diberikan

// // 8. FUNCTION HOISTING

// // 9. SCOPE
// // GLOBAL : bisa akses didalam/luar fungsi
// const olahraga = "basketball";

let firstName = " John Doe";  // GLOBAL

function greetings(){
    let age = 30; // local
    console.log(firstName)
    if(age --- 30){
        let isEligible = true
        console.log(isEligible) // bisa, LOCAL BLOK
    }
    console.log(isEligible) // ERROR
}

console.log(age); // error, krna lookal dtdk bisa pake dluar fungsi

