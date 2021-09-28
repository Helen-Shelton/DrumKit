//Play sound corresponding to what keyboard button was pressed or what letter was clicked
function keyboardSound(letter) {
  switch (letter) { //what sound we want to play corresponding to what button is pressed. buttonInnerHTML is what button is pressed.
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');//create html 'Audio' element
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');//create html 'Audio' element
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');//create html 'Audio' element
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');//create html 'Audio' element
      tom4.play();
      break;

    case 'j':
      var crash = new Audio('sounds/crash.mp3');//create html 'Audio' element
      crash.play();
      break;

    case 'k':
      var kick = new Audio('sounds/kick-bass.mp3');//create html 'Audio' element
      kick.play();
      break;

    case 'l':
      var snare = new Audio('sounds/snare.mp3');//create html 'Audio' element
      snare.play();
      break;

    default: console.log(letter); //ke eps track of what button was pressed, if the button doesnt match the cases

  }
}

//button animation according to what key was pressed
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey); //active button refers to the class of the button that was pressed
  activeButton.classList.add("pressed"); //adds pressed to the list of classes for activeButton

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}


//letter clicked
for (var i = 0; i < (document.querySelectorAll(".drum").length); i++) { //for every selector with class .drum
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){ //add event listener for a click
    var buttonInnerHTML = this.innerHTML; //get the inner HTML (text) of what button is pressed. ex. w, a, s, or d
    keyboardSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//Keyboard button pressed
document.addEventListener("keydown", function(event){ //passing in "event" that triggered "keydown"
  //console.log(event); //keeps track of what the console detects
  keyboardSound(event.key); //"key" is a property of "event". It is a char type. It sends what keyboard letter was pressed to the function
  buttonAnimation(event.key);
});

/*
ADVANCED JS

EVENT LISTENERS TO BUTTONS
document.querySelector("button").addEventListener("click", handleClick);
      JS "listens" for event "click" and will be redirected to function "handleClick".
      The first argument is the event that JS is "listening" for, the second argument is the action to take after the event.
      In this case, we call the function handleClick and not handleClick() because that would result
      in a function call before the actual implementation of the event listener.

      Remember that .querySelector("X") refers to the first element in the array of the specific selector X
      (an array of length equal to the number of instances of X in your HTML document)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ANONYMOUS FUNCTIONS
Anon. functions operate in the same way as normal functions, but do not have a name. Can be a short way of implementing a function
  ex
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    alert("click");
  });

HIGHER ORDER FUNCTIONS AND PASSING FUNCTIONS AS ARGUMENTS
Higher order functions are functions that can take other functions as inputs
  ex.
  function add(num1, num2){...}
  function multiply(num1, num2){...}

  function calculator(num1, num2, operator){
    return operator(num1, num2)
  }

  Where the calling of this function:
  calculator(2,3,add);
  returns a value according to what function is passed into the variable argument "operator"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

DEBUGGER
To access debugger on Chrome developer tools:
  --->Go to: Console
  --->Type: debugger;
  --->hold: shift + enter
  --->call function you want to debug in console
  --->hit enter again

useful debugger tool:
Step into,

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OBJECTS AND PROPERTIES
Example of how to create and call an object & its properties:

var housekeeper0 = {
  yearsOfExperience: 12,
  name: 'Jane',
  cleaningExperience: ['bathroom', 'kitchen', 'bedroom']
}

console.log(housekeeper0.name); ---> wil return "Jane";


CONSTRUCTOR FUNCTIONS
The solution to creating many objects.
Contructor function's name MUST be capitalized.
Example of creating contructor:

funtion HouseKeeper (yearsOfExperience, name, cleaningExperience ){
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningExperience = cleaningExperience;
}

**Notice how the function arguments are the object's properties**
To INITIALIZE (create a new object of the class), we do:
      var houseKeeper0 = new HouseKeeper(12, "Jane", ['bathroom', 'kitchen', 'bedroom'])

Objects can be referred to as keyword 'this'
ex.
this.style.color = "white"; //changes the objects style and colour to white

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

METHODS
Conceptually similar to performing an "action". It is a function associated with an object.
to call a method we use dot method:
      houseKeeper0.cleanRoom();
The parantheses next to the method are what distinguishes it from an object property.

if we want to include it in constructor:

funtion HouseKeeper (yearsOfExperience, name, cleaningExperience ){
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningExperience = cleaningExperience;

  this.cleanRoom = function() {
    alert("Cleaning in Progress...");
    pickUpVaccuum();
    move();
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

KEY PRESSES
Use keyboard event listeners to check for key presses.
Use "keydown" NOT "keypress"
https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
Can add event listener to entire page/document to detect key strokes:

ex.
document.addEventListener("keydown", function(event){ //notice that .addEventListener is not attached to a selector
  KeyboardSound(event.key); //"key" is a property of "event". It is a char type. It sends what keyboard letter was pressed to the function
});

function is passed in as a parameter, but also a callback.

CALLBACK FUNCTIONS
Functions that get passed in as inputs. It is called by the object that experinces the event (ex.buttons that experience click).
Called "callback" because it waits for something to finish happening (ex. click event) before executing itself.

ex.
document.addEventListener("keydown", function(event){ //passing in "event" that triggered "keydown"
  KeyboardSound(event.key);
});

when document detects keydown it will call function(event).
Useful for sending information that can only be known once the event happens.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TIMEOUT FUNCTION
https://www.w3schools.com/jsref/met_win_settimeout.asp
Performs an operation after a set time:

setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);

removes class "pressed" after 100 milliseconds




*/
