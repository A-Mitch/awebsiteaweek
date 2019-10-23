'use strict';

// objects
let me = {
        name:'Alex',
        age: 23,
        state: 'GA',
        saySup(){
            // This points to the current object, me.
            alert("Sup from " + this.name);
        }
};
me.saySup();

// alert(me.state)
// alert('age' in me)

// Go through the keys. It's just like dictionaries in python ~

// for(let key in me){
//     // Shows the keys
//     alert(key);
//     // Shows the values
//     alert(me[key]);
// }

let son = {};

for(let key in me){
    son[key] = me[key];
}

son.name = "lil boy not Alex";
// alert(son.name);

let icecreamshop = {size:'Big',sells:'icecream'};
let flavors = {};

// They are numbered to show both copied objects since chocolate would overwrite vanilla if they had the same property names
let vanilla = {flavor1: 'Very Vanilla',nongmo1:'yes',vegan1:'no'};
let chocolate = { flavor2: 'Choco choco',nongmo2:'yes',vegan2:'yes'};

// Object.assign(flavors,vanilla,chocolate)
// for(let key in flavors){
//     alert(key +" : "+ flavors[key]);
// }

// Checking if my object is empty
// If there are keys then it will return false and if there are no keys then it will return true.

// function isempty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// Creating a symbol
// let id = Symbol("id");

/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/

let calculator = {
    read(){
        this.num1 = +prompt('first value', 0);
        this.num2 = +prompt('second value', 0);
    },
    sum(){
        return this.num1 + this.num2;
    },
    mul(){
        return this.num1 * this.num2;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());