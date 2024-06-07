console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1

let favNum = Math.floor(Math.random()*10)+1;

let guessNum = Number(prompt("Guess a number between 1-10"));


if (guessNum < favNum) {
  console.log(guessNum + " is too low, it is, " + favNum)
} else if(guessNum > favNum) {
  console.log(guessNum + " is too high, it is, " + favNum)
} else if (guessNum === favNum) {
  console.log("Congratulations, you guessed number:" +guessNum + " right!")
} else {
  console.log("Please input a valid number")
}



// // Exercise 2

let birthMonth = Number(prompt("What is your birth month"));


switch(birthMonth) {
  case 1:
  case 2:
  case 12:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Please input a numerical birthmonth")
}

//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

// if (colorId == "BK") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

switch(typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
}

switch(colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
}

switch(sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    "One Size Fits All";
}



console.log(`Product: ${size} ${color} ${type}`);