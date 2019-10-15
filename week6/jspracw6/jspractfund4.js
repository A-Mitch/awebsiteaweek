// This is a continuation of my javascript practice

// A little warmup
function warmup(name="Put in a name lol"){
    alert(`${name} it's time to get coding! Let's get it!`);
}

function areuhungry(name = "Put in a name lol"){
    let hungry = prompt(`${name} are you hungry? (Yes/No)`);

    if (hungry == 'Yes' || hungry == 'yes'){
        alert('Cool. Let\'s go get some grub');
    } else if (hungry == 'No' || hungry == 'no'){
        alert('Alright, let\'s play some Smash then.');
    } else {
        alert('Ummm what?');
    }
}

// warmup('Alex')
// areuhungry('Alex')

// Now to the main stuff
// Function Expressions and Arrow functions

let saymyname = function(){
    alert("Good morning, Alex");
};

saymyname()

// Using callback functions

function howareyoufeeling(question,good,bad){
    if(confirm(question)){
        good()
    } else{
        bad()
    }
}

// My two callback functions
function good(){
    alert("That's awesome to hear!");
}

function bad(){
    alert("Awww. I hope that you feel better");
}

// howareyoufeeling("Are you feeling good",good,bad);

// anonymously calling back
// howareyoufeeling(
//     "Are you feeling good",
//     function(){alert("That's awesome to hear!");},
//     function() {alert("Awww. I hope that you feel better");} 
//     );

/* Function Declaration vs Function Expression
    FD: Function declared as a separate statement
    - Visible to the enitre script b/c JS looks for global functions. Usable before declaration
    - Available everywhere in the block where it's declared -- everywhere between it's enclosing {}

    FE: A function, created inside an expression or inside another syntax construct
    - Usable once the hit during runtime

*/

let homework = prompt("Do you have any homework to do tonight? (Yes/No)");

let playgames;
let dohw;

if(homework == 'No' || homework == 'no'){
    playgames = function(){
        alert("Let\'s play some Guitar Hero!")
    };
    playgames();
} else if (homework == 'Yes' || homework == 'yes'){
    dohw = function(){
        alert("Do your hw then we will play Skate 3")
    };
    dohw();
} else {
    alert("You're not even in school anymore. Go do adult things.")
}

// Arrow functions!!!
// Syntax: let func = (arg1, arg2, ...argN) => expression
let mult = (num1,num2) => num1*num2;
// alert(mult(2,3));

let onearg = name => alert(name)
// onearg("Alex")

let noarg = () => alert("I'm really enjoying Javascript");
noarg();

let pow = (num,pow) => {
    let result = num**pow;
    return result;
}

// alert(pow(2,3));

/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");
*/

// Replace with arrow functions
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/



let ask = (question,yes, no) => {
    confirm(question) ? yes(): no()
}

ask("Are you cool?", () => alert("You agreed."),() => alert("You canceled the execution."))