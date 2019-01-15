/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

function printShape(shape, height, character) {
  switch (shape) {
    case 'Square':
      for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j < height; j++) {
          line += character;
        }
        console.log(line);
      }
      break;
    case 'Triangle':
      for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j < height; j++) {
          if (i >= j) {
            line += character;
          } else {
            line += ' ';
          }
        }
        console.log(line);
      }
      break;
    case 'Diamond':
      //Loop over rows
      for (let i = 0; i < height; i++) {
        let line = '';
        //Loop over columns
        for (let j = 0; j < height; j++) {
          //Middle Lines
          if (i === Math.floor(height / 2) || j === Math.floor(height / 2)) {
            line += character;
          }
          //Upper Half
          else if (i < height / 2) {
            //Upper Left Corner
            if (j < (height) / 2) {
              if (j + i > (height) / 2 - 1) {
                line += character;
              } else {
                line += ' ';
              }
            }
            //Upper Right Corner
            else if (j > (height) / 2) {
              if (j < i + (height) / 2) {
                line += character;
              } else {
                line += ' ';
              }
            }
          }
          //Lower Half
          else {
            //Lower Left Corner
            if (j < (height) / 2) {
              if (i - (height) / 2 <= j) {
                line += character;
              } else {
                line += ' ';
              }
            }
            //Lower Right Corner
            if (j > (height) / 2) {
              if (i + j <= 1.5 * (height) - 1) {
                line += character;
              } else {
                line += ' ';
              }
            }
          }
        }
        console.log(line);
      }
      break;
    default:
      break;
  }
}

//Test the function
let inputShape = 'Square';
let inputHeight = 7;
let intputCharacter = 'S';
printShape(inputShape, inputHeight, intputCharacter);

inputShape = 'Triangle';
inputHeight = 8;
intputCharacter = 'T';
printShape(inputShape, inputHeight, intputCharacter);

inputShape = 'Diamond';
inputHeight = 9;
intputCharacter = '*';
printShape(inputShape, inputHeight, intputCharacter);