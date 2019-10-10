// This is a continuation of my Javascript practice
// The other file was getting crowded so I created this one

// Switch statement - a replacement for multiple if statements
// Equality check is always strict
let num1 = 12*3;

switch(num1){
    case 9:
        alert("Bruh, that's low");
        break;
    case 20:
        alert("Getting warmer")
        break;
    case 30:
        alert("Even warmer")
        break;
    case 36:
        alert("There we go!")
        break;
    default:
        alert("lol. How did you even get here?")
}

/*
Take this and turn it into an if statement
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

/* let browsertype = prompt("What browswer are you using?");

if (browsertype === 'Edge' || browsertype === 'edge'){
    alert("You've got the Edge!");
} else if (browsertype === 'Chrome' || browsertype === 'Firefox' || browsertype === 'Safari' || browsertype === 'Opera'){
    alert("okay we support these browsers too" );
} else{
    alert("We hope that this page looks ok!");
}
*/
// Functions and variable scope
function saysup(){
    alert("Sup");
}
// saysup();

let global = 'I\'m a global boi'

function test(){
    let local = 'I\'m a local boi'
    let sup = 'Sup '+global+ ' being used in a function'
    alert(local)
    alert(sup)
}

function food(friend="No friends :(",restaurant= "No restuarant give"){
    // alert("Yo! "+ friend+" do you want to go to "+restaurant+"?")
    alert(`Yo! ${friend}, do you want to go to ${restaurant}?`)
}

food("Brian","Honey Pig")
// test();

function domaths(num1){
    return 9*num1;
}

function domoremaths(num2){
    return domaths(num1)**num2
}

let result = domaths(2)
alert(domoremaths(3))