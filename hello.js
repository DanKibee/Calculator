// CALCULATOR PROGRAM
const display = document.getElementById("display");
let appendToDisplay = (input) => { 
    display.value += input; 
}
// clearDisplay function
let clearDisplay = () => { 
 display.value=''
}
// calculate function
let calculate = () => { 
  try {
  display.value = eval(display.value);
 
  }
  catch(err) { 
    display.value = "Error";
  }

}