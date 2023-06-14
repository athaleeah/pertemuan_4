// EXPORT

let nama = "John Doe";
let numbers = [1,2,3,4,5]; // kita mau tmpilkan di index.js

let john = {
    fullName:"John doe",
    age:33,
};

export {nama, numbers as angka,john}; // boleh dipilih mana yg akan diambil untuk export, gak harus semuanya

//ganti nama saat export harus di paling bawah untuk export/import ganti nama
// spesial : hanya boleh terdapat 1 expor default itu lebih ke export fungsi 
const greetings = () => {
    return `Hello World`;
};

export default greetings; // export default cma boleh 1
export{nama,numbers as angka, john};
