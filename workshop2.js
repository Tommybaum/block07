//pseudo code
//first obtain input value for a name
//then obtain input value for combo numbers 1 2 and 3
//then generate an output based on the numbers entered by the user using an alert pop up


let getVal= prompt("please enter your name:");
let getCombo= prompt("please enter your first combination number");
let getCombo2= prompt("please enter your second combination number");
let getCombo3= prompt("please enter your third combination number");

//console.log(getVal + ", your requested combination is as follows: " + getCombo + " " + getCombo2 + " " + getCombo3);
let getOutput= getCombo-3 + " " + getCombo2 + " " + getCombo3/10;
console.log(getOutput);
alert(getVal + ", your combination is: " + getOutput);