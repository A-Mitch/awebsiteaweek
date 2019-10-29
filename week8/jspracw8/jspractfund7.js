'use strict';

let videogames = ['COD: Modern Warfare','Red Dead Redemption 2', 'The Outer Worlds'];

// Arrays can store any items
let chairs = ['There are how many chairs?',2, {type:'Eames'},true,'and do we loeve chairs?', function() {alert('GOOD LORD YES!');}];

chairs.push("What\'s your favorite type of chair?");
// alert(chairs);
chairs.pop();
// alert(chairs);
chairs.unshift("Hi I\'m Ron. Welcom to the Chairthon.")
// alert(chairs);

function sumInput(){
    let arr = [];
    
    while(true){
        let num = prompt("Enter a number, please",0);
        if (!isFinite(num) || num === "" || num === null){
            break;
        }
        arr.push(+num);
    }

    let sum = 0;
    for(let nums of arr){
        sum += nums;
    }
    return sum;
}

// alert(sumInput());

let musicians = ['John Oliver','Jay Som', 'Japanese Breakfast', 'Beabadoobee', 'The 1975', 'Kim Sawol', 'Lang Lee', 'Mitski', 'The Japanese House'];
musicians.splice(0,1, "The Internet");
// alert(musicians);

// alert(musicians.concat(["Kanye West","DaBaby","Qrion", "The Internet"]));

let nelly = ["I","am","number","one"];
// nelly.forEach((item,index,nelly) => {
//     alert(`${item}`);
// });

let bands = [
    { id: 1, name: "Jay Som"},
    { id: 2, name: "Japanese Breakfast" },
    { id: 3, name: "Beabadoobee" },
    { id: 4, name: "The 1975" },
    { id: 5, name: "Kim Sawol" },
    { id: 6, name: "Lang Lee" },
    { id: 7, name: "Mitski" },
    { id: 8, name: "The Japanese House" },
    { id: 9, name: "DaBaby" },
];

// Looking for a single element
let band = bands.find(item => item.id == 2);
// alert(band.name);

// looking for multiple elements
let afewbands = bands.filter(item => item.id < 4);
// alert(afewbands.length);

let bandlength = musicians.map(item => item.length);
// alert(bandlength);

let numarr = [12,14,13,2,9,3,2];
let totalproduct = numarr.reduce((product, current) => product * current);
// alert(totalproduct);
