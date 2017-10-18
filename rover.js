// Rover object
var myRover = {
  position: [0,0],
  direction: 'N'
};

// The Map grid 10x10
var theMap = [[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]];

// Function to go forward
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
  if (rover.position[0] >= 10) {
    rover.position[0] = 0;
  } else if (rover.position[0] < 0){
    rover.position[0] = 9;
  } else if (rover.position[1] >= 10) {
    rover.position[1] = 0;
  } else if (rover.position[1] < 0) {
    rover.position[1] = 9;
  }

  console.log("Going forward; New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]"+ rover.direction)
}

goForward(myRover);

// Function to go backward
function goBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
  if (rover.position[0] >= 10) {
    rover.position[0] = 0;
  } else if (rover.position[0] < 0){
    rover.position[0] = 9;
  } else if (rover.position[1] >= 10) {
    rover.position[1] = 0;
  } else if (rover.position[1] < 0) {
    rover.position[1] = 9;
  }

  console.log("Going backward; New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]"+ rover.direction);
}

goBackward(myRover);

// Function to turn right
function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };

  console.log("Turning right; New Rover Direction: [" + rover.position[0] + ", " + rover.position[1] + "]" + rover.direction);
}

turnRight(myRover);

// Function to turn left
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };

  console.log("Turning left; New Rover Direction: [" + rover.position[0] + ", " + rover.position[1] + "]" + rover.direction);
}

turnLeft(myRover);

// Function to move the Rover with f (forward), b (backward), l (left), r (right)
function commandMove(instructions) {
  for (var i = 0; i < instructions.length; i++) {
    var singleInstruction = instructions[i];
    if (singleInstruction === "f") {
      goForward(myRover);
    } else if (singleInstruction === "b") {
      goBackward(myRover);
    } else if (singleInstruction === "r") {
      turnRight(myRover);
    } else if (singleInstruction === "l") {
      turnLeft(myRover);
    } else {
      continue;
    }
  }
}

commandMove("r");
commandMove("f");

// Function to make the grid spherical.
function sphericalGrid(rover) {
  if (rover.position[0] >= 10) {
    rover.position[0] = 0;
  } else if (rover.position[0] < 0){
    rover.position[0] = 9;
  } else if (rover.position[1] >= 10) {
    rover.position[1] = 0;
  } else if (rover.position[1] < 0) {
    rover.position[1] = 9;
  }
}
