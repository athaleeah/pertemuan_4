// 6 JUNI, SELASA
//     // [IIFE (immediatley invoked function expression) 
//     // tidak ada nama]
//     // gunsi yg otomatis dijalankan

// // function greetings(){ 
//     // return "Hello World" // function biasa ada nama greetings
// // }

// // pas di run lgsg jalan
// (function () {
//     console.log('Hello World');
// })()

//     // [JAVASCRIPT ARRAY]

// // syntax
// // let namaArray = [nilai1, nilai 2];
// // isi array bisa beda" isinya, tdk harus string semua
// // jumlah data banyak
// // indeks dimulai dari 0

// let students = ['john','jane',"bob",'peter'];
// let john = ["john","doe",33,true];

// // Akses data dalam array
// console.log(students[1]);
// console.log(john[1]);
// console.log(john); //memanggil semuanya
// console.log(students); // memanggil semuanya


// // Array length
// console.log(students.length); // output : 4 length array
// console.log(students[students.length - 1]); //untuk tampilkan data terakhir

// // Mengubah data dalam array 
// // namaArray[nomorindex] = nilai baru
// students[2] = "edgar";

//     // METHOD TO STRING

// let array = [1,2,3,"halo",false,true]// mengubah array menjadi string
// // console.log(array.toString());
// // console.log(array.join(" ")); // join menggabungkan , nanti jadi 1 2 3 

// // POP : mengahpus yg paling terakhir
// array.pop();
// console.log(array); // output : true hilang

// // PUSH : tambah di paling kahir
// array.push(("selamat pagi"))
// console.log(array);

// // SHIFT : hapus yg paling pertama , mirip pop
// array.shift();
// console.log(array);

// //UNSHIFT : tambah di pertama
// array.unshift("selamat pagi"); 
// console.log(array);

// // SPLICE (add,hapus,ganti)
// let buah = ["pisang","jeruk","apel","mangga"];
// buah.splice(2,0,"Lemon","kiwi") // 2 = indeks, 0 = tidak dihapus, klo 0 = 1 = hapus indeks ke 2
// console.log(buah);

// // penggabungan array (CONCAT)

// let buah = ["pisang","jeruk","apel","mangga"];
// let sayur = ["pisang","jeruk","apel","mangga"];
// let biji = ["pisang","jeruk","apel","mangga"];

// let makanan = buah.concat(sayur,biji); // gabung 


// // slice (POTONG DAN SIMPAN PADA ARRAY BARU)
// // 2 parameter, mulai dan akhir (batas indeks akhir tanpa diikutsertakan)

// let buah = ["kripik singkok","kripik kentang","keriupuk ikan","permen","coklat","kue"];
// let cemilanGurih = cemilan.slice(0,3);
// let cemilanManis = cemilan.slice(3);

    // OBJECT : mirip array
    // objek ada indentifikasinya dan ada properti serta nilai
    //  kurung kurawal {}, didalamya ada properti dan nilai
// let john = ["john","doe",33,true];
let johnObj = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    isMarried: true
};

console.log(johnObj); //tampilkan

let orang = new Object();
orang.nama = "john"

// dot notation
// Bracket
//Object
// let johnObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
//   isMarried: true,
//   sayHello: function () {
//     console.log("hello my name is" + this.firstName); // pake this untuk properti di dalam
//   },
//   address: {
//     city: "Minut",
//     province: "Sulawesi Utara",
//     postalCode: "95371",
//   },
//   grade: [80, 100, 85],
// };

// console.log(johnObj.firstName); //Dot Notation
// console.log(johnObj.lastName);
// console.log(johnObj["age"]); //Bracket Notation
// johnObj.address = "Manado";
// console.log(johnObj);
// johnObj.sayHello();
// console.log(johnObj.address.city);
// console.log(johObj.grade[2]);

//Array Built in Method
//Array Object
let students = [
    {
      fullName: "John Doe",
      age: 33,
      grade: 90,
    },
    {
      fullName: "Peter",
      age: 25,
      grade: 85,
    },
    {
      fullName: "Jane",
      age: 28,
      grade: 95,
    },
  ];
  
  // for (let i = 0; i < students.length; i++) {
  //   students[i].grade += 5;
  //   console.log(students[i]);
  // }
  
  let result2 = students.forEach(function (item) {
    item.grade += 5;
  });
  
//   MAP : boleh return nilai dan simpan di array baru, bedanya dengan foreach

  // let result = students.map(function (item) { // 
  //   item.grade += 5;
  //   return item;
  // });
  // console.log(result);
  
  let filterStudent = students.filter(function (item) {
    return item.grade > 90;
  });
  console.log(filterStudent);
  
  let findStudent = students.find(function (item) {
    return item.grade > 90;
  });
  console.log(findStudent);