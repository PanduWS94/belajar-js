// // kalkulator simple
// const prompt = require('prompt-sync')({sigint: true});
// const num1 = prompt('Enter a first number: ');
// const num2 = prompt('Enter a second number: ');
// console.log('first number + second number =');
// console.log(Number(num1) + Number(num2));
// // kalkulator simple


// // penjumlahan menggunakan variable
// let a = 5;
// let b = 3;
// let c = a + b;
// console.log(c);
// // penjumlahan menggunakan variable

//string
// let a = "10" + "gabung";
// a = "10gabung" 
//string

//operator penugasan assignment
// let a = 2;
// a++;
//operator penugasan assignment


// // coba input password
// const prompt = require('prompt-sync')({sigint: true});
// const password = prompt('Enter password: ');
// const validPassword = '1234'
// if(password===validPassword){
//     console.log("Selamat datang bos!")
//     }
// else {
//     console.log("Password Salah, coba lagi!")
//     }
// console.log("Terimakasih sudah menggunakan aplikasi kami")
// // coba input password


// //percabangan lebih dari satu kasus (if else if else)
// const prompt = require('prompt-sync')({sigint: true});
// const nilai = prompt('Masukan nilai: ');
// let grade;
// if(nilai>90){
//     grade = "A"
// } else if(nilai>80) {
//     grade = "B+"
// } else if (nilai>70){
//     grade = "B"
// } else {
//     grade = "F"
// }
// console.log("Grade adalah = " + grade)
// //percabangan lebih dari satu kasus (if else if else)

// //switch case
// const prompt = require('prompt-sync')({sigint: true});
// const nilai = prompt('Masukan nilai: ');
// let grade;
// switch(true){
//     case nilai > 90:
//         grade = "A";
//         break;
//     case nilai > 80:
//         grade = "B+";
//         break;
//     case nilai > 70:
//         grade = "B";
//         break;
//     default:
//         grade = "F";
// }
// console.log("Grade adalah = " + grade)
// //switch case

// //looping
// for(let i = 0; i < 10; i++){
//     console.log("Perulangan ke-" + i);
//  }
// //loopong


// //while
// const prompt = require('prompt-sync')({sigint: true});
// let ulangi = prompt("Are you ready? "); //Input 1
// console.log("Start")
// let counter = 0;
// while(ulangi){
//    let jawab = prompt("Apakah anda mau mengulang? (yes/no) : ") //Input 1 atau yes atau 0 atau no
//    counter++;
//    if(jawab == false || jawab == "no"){
//        ulangi = false;
//    }
//    console.log("Pengulangan ke-"+counter)
// }
// //while

// //array
// let mobil = ["avanza","yaris","alya"]
// console.log(mobil[0])
// //array


// //aray kosong
// let mobil = ["Avanza","Yaris","Alya","Veloz"]
// for(let i=0;i<mobil.length;i++){
//    console.log('Cetak mobil ke-' + i + ": " + mobil[i])
// }
// //araykosng

// //propertimethod
// let car = {
//     // properti
//     type: "Fiat",
//     model: "500",
//     color: "white",
//     // method
//     start: function(){
//         console.log("ini method start");
//     },
//     drive: function(){
//         console.log("ini method drive");
//     },
//     brake: function(){
//         console.log("ini method brake");
//     },
//     stop: function(){
//         console.log("ini method stop");
//     }
// };

// console.log(car.type);
// console.log(car.color);
// car.start();
// car.drive();
// //propertimethod

// //class
// // Contoh pembuatan kelas "Person"
// class Person {
//     // Konstruktor untuk kelas Person
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // Metode untuk mengakses properti name
//     getName() {
//         return this.name;
//     }
//     // Metode untuk mengubah properti name
//     setName(name) {
//         this.name = name;
//     }
//     // Metode untuk mengakses properti age
//     getAge() {
//         return this.age;
//     }
//     // Metode untuk mengubah properti age
//     setAge(age) {
//         this.age = age;
//     }
//     // Metode lain dalam kelas Person
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// // Membuat objek dari kelas Person
// let person1 = new Person("Alice", 30);
// // Mengakses properti dan memanggil metode
// console.log("Name:", person1.getName());
// console.log("Age:", person1.getAge());
// person1.greet();
// // Mengubah properti
// person1.setAge(35);
// person1.greet();
// //class

// //keywordthis
// function Person(firstName, lastName){
//     // properti
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // method
//     this.fullName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     this.showName = function(){
//         console.log(this.fullName());
//     }
// }
// var person1 = new Person("Muhar", "Dian");
// var person2 = new Person("Petani", "Kode");
// person1.showName();
// person2.showName();
// //keywordthis