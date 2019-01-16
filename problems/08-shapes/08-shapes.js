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
      let line = '';
      for (let i = 0; i < height; i++) {
        line += character;
        console.log(line);
      }
      break;
    case 'Diamond':
      for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j < height; j++) {
          let distanceFromCenter = Math.abs(Math.floor(((height) / 2) - i)) + Math.abs(Math.floor(((height) / 2 - j)));
          if (distanceFromCenter < height / 2) {
            line += character;
          } else {
            line += ' ';
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
printShape('Square', 7, 'S');
printShape('Triangle', 8, 'T');
printShape('Diamond', 9, 'D');