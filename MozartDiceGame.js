/*-------------------------------------------

Mozart dice game.

Create an 8 measure minuet.

Each measure has 12 different version to choose from.

A composition is created by rolling a pair of dice
for each of the 8 measures use the dice total to pick 
which of the 12 choices for that measure to use.
Assemble the choices to create the composition.

//-------------------------------------------*/


// this game is in 3/4 meter, be sure so set the time signatrue of the transport
//Tone.Transport.timeSignature = 3; // top number of 3/4

// bar 1 -----------------------------------------
// A-2
var A_2 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "1:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "1:2", "note" : "G4", "duration": "4n", "velocity": 0.8}
];

// A-3
var A_3 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "1:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "1:2", "note" : "E5", "duration": "4n", "velocity": 0.8}
];

// A-4
var A_4 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "1:1", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "1:2", "note" : "C5", "duration": "4n", "velocity": 0.8}
];

// A-5
var A_5 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:0:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "1:1", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "1:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:2", "note" : "G4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// A-6
var A_6 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:0:2", "note" : "B5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:1", "note" : "C6", "duration": "8n", "velocity": 0.8},
  {"time" : "1:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:2", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// A-7
var A_7 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:0:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "1:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:2", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:2:2", "note" : "G5", "duration": "8n", "velocity": 0.6}
];

// A-8
var A_8 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "1:1", "note" : "F5", "duration": "8n", "velocity": 0.8},
  {"time" : "1:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:2", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// A-9
var A_9 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:0:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:1", "note" : "G5", "duration": "8n", "velocity": 0.8},
  {"time" : "1:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "1:2", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "1:2:2", "note" : "G5", "duration": "8n", "velocity": 0.6}
];

// A-10
var A_10 = [
  {"time" : "1:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "1:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:1", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "1:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "1:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "1:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// A-11
var A_11 = [
  {"time" : "1:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "1:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "1:2", "note" : "E5", "duration": "4n", "velocity": 0.8}
];

// A-12
var A_12 = [
  {"time" : "1:0", "note" : "C5", "duration": "4n", "velocity": 0.7}, 
  {"time" : "1:0", "note" : "E4", "duration": "4n", "velocity": 0.6}, 
  {"time" : "1:0", "note" : "C3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "1:1", "note" : "C5", "duration": "4n", "velocity": 0.7},
  {"time" : "1:1", "note" : "E4", "duration": "4n", "velocity": 0.6}, 
  {"time" : "1:1", "note" : "C3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "1:2", "note" : "C5", "duration": "4n", "velocity": 0.7},
  {"time" : "1:2", "note" : "E4", "duration": "4n", "velocity": 0.6}, 
  {"time" : "1:2", "note" : "C3", "duration": "4n", "velocity": 0.6} 
];

var bar1Choice = {
    2: A_2,
    3: A_3,
    4: A_4,
    5: A_5,
    6: A_6,
    7: A_7,
    8: A_8,
    9: A_9,
    10: A_10,
    11: A_11,
    12: A_12,
};

// bar 2  ------------------------------------------
// B-2
var B_2 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "2:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "G4", "duration": "4n", "velocity": 0.8}
];

// B-3
var B_3 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "2:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "E5", "duration": "4n", "velocity": 0.8}
];

// B-4
var B_4 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "2:1", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "C5", "duration": "4n", "velocity": 0.8}
];

// B-5
var B_5 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:0:2", "note" : "G4", "duration": "8n", "velocity": 0.6},
  {"time" : "2:1", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "2:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "2:2", "note" : "G4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// B-6
var B_6 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:0:2", "note" : "B5", "duration": "8n", "velocity": 0.6},
  {"time" : "2:1", "note" : "C6", "duration": "8n", "velocity": 0.8},
  {"time" : "2:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "2:2", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// B-7
var B_7 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:0:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "2:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "2:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "2:2", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:2:2", "note" : "G5", "duration": "8n", "velocity": 0.6}
];

// B-8
var B_8 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "2:1", "note" : "F5", "duration": "8n", "velocity": 0.8},
  {"time" : "2:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "2:2", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// B-9
var B_9 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:0:2", "note" : "G4", "duration": "8n", "velocity": 0.6},
  {"time" : "2:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "2:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "2:2", "note" : "G5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "2:2:2", "note" : "E5", "duration": "8n", "velocity": 0.6}
];

// B-10
var B_10 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "2:1", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "E5", "duration": "4n", "velocity": 0.8}
];

// B-11
var B_11 = [
  {"time" : "2:0", "note" : "C3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "E3", "duration": "2n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "2:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "G3", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "C3", "duration": "4n", "velocity": 0.8}
];

// B-12
var B_12 = [
  {"time" : "2:0", "note" : "C5", "duration": "4n", "velocity": 0.6}, 
  {"time" : "2:0", "note" : "E4", "duration": "4n", "velocity": 0.5}, 
  {"time" : "2:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "2:1", "note" : "C5", "duration": "4n", "velocity": 0.6},
  {"time" : "2:1", "note" : "E4", "duration": "4n", "velocity": 0.5}, 
  {"time" : "2:1", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "2:2", "note" : "C5", "duration": "4n", "velocity": 0.6},
  {"time" : "2:2", "note" : "E4", "duration": "4n", "velocity": 0.5}, 
  {"time" : "2:2", "note" : "C3", "duration": "4n", "velocity": 0.8}
];

var bar2Choice = {
    2: B_2,
    3: B_3,
    4: B_4,
    5: B_5,
    6: B_6,
    7: B_7,
    8: B_8,
    9: B_9,
    10: B_10,
    11: B_11,
    12: B_12,
};

// bar 3 ------------------------------------------
// C-2
var C_2 = [
  {"time" : "3:0", "note" : "B2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:0:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:1", "note" : "F5", "duration": "8n", "velocity": 0.8},
  {"time" : "3:1:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:2", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:2", "note" : "G2", "duration": "4n", "velocity": 0.6}, 
  {"time" : "3:2:2", "note" : "B4", "duration": "8n", "velocity": 0.6}
];

// C-3
var C_3 = [
  {"time" : "3:0", "note" : "G2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:1", "note" : "D5", "duration": "4n", "velocity": 0.8},
  {"time" : "3:2", "note" : "G5", "duration": "4n", "velocity": 0.8}
];

// C-4
var C_4 = [
  {"time" : "3:0", "note" : "G2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "3:1:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "3:2", "note" : "A4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:2:2", "note" : "G4", "duration": "8n", "velocity": 0.6}
];

// C-5
var C_5 = [
  {"time" : "3:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "F5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:1", "note" : "D5", "duration": "4n", "velocity": 0.8},
  {"time" : "3:2", "note" : "B4", "duration": "4n", "velocity": 0.8}
];

// C-6
var C_6 = [
  {"time" : "3:0", "note" : "D3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "G5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:0:2", "note" : "F#5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:1", "note" : "G5", "duration": "8n", "velocity": 0.8},
  {"time" : "3:1:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:2", "note" : "B4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:2:2", "note" : "G4", "duration": "8n", "velocity": 0.6}
];

// C-7
var C_7 = [
  {"time" : "3:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:0:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:1", "note" : "F5", "duration": "8n", "velocity": 0.8},
  {"time" : "3:1:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:2", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:2:2", "note" : "B4", "duration": "8n", "velocity": 0.6}
];

// C-8
var C_8 = [
  {"time" : "3:0", "note" : "G2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:0:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "3:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:2", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "3:2", "note" : "B2", "duration": "4n", "velocity": 0.6}, 
  {"time" : "3:2:2", "note" : "D5", "duration": "8n", "velocity": 0.6}
];

// C-9
var C_9 = [
  {"time" : "3:0", "note" : "D5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:0", "note" : "B4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:0", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "3:1", "note" : "D5", "duration": "4n", "velocity": 0.8},
  {"time" : "3:1", "note" : "B4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:1", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "3:2", "note" : "D5", "duration": "4n", "velocity": 0.8},
  {"time" : "3:2", "note" : "B4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:2", "note" : "G3", "duration": "4n", "velocity": 0.6} 
];

// C-10
var C_10 = [
  {"time" : "3:0", "note" : "G2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:0:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "3:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "3:1:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "3:2", "note" : "A4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:2:2", "note" : "G4", "duration": "8n", "velocity": 0.6}
];

// C-11
var C_11 = [
  {"time" : "3:0", "note" : "B2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "D5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "3:1", "note" : "B4", "duration": "4n", "velocity": 0.8},
  {"time" : "3:2", "note" : "G4", "duration": "4n", "velocity": 0.8}
];

// C-12
var C_12 = [
  {"time" : "3:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "3:0", "note" : "B4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:0:2", "note" : "A4", "duration": "8n", "velocity": 0.5},
  {"time" : "3:1", "note" : "B4", "duration": "8n", "velocity": 0.5},
  {"time" : "3:1:2", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "3:2", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "3:2:2", "note" : "B4", "duration": "8n", "velocity": 0.5}
];

var bar3Choice = {
    2: C_2,
    3: C_3,
    4: C_4,
    5: C_5,
    6: C_6,
    7: C_7,
    8: C_8,
    9: C_9,
    10: C_10,
    11: C_11,
    12: C_12,
};

// bar 4 ---------------------------------------------
// D-2
var D_2 = [
  {"time" : "4:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "4:0:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "4:1", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "4:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:2", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
];

// D-3
var D_3 = [
  {"time" : "4:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "4:0:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:1", "note" : "B4", "duration": "8n", "velocity": 0.8},
  {"time" : "4:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:2", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
];

// D-4
var D_4 = [
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "4:1", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "4:2", "note" : "E4", "duration": "4n", "velocity": 0.8}
];

// D-5
var D_5 = [
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "4:1", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "4:2", "note" : "G4", "duration": "4n", "velocity": 0.8}
];

// D-6
var D_6 = [
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "8n", "velocity": 0.5}, 
  {"time" : "4:0:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "4:1", "note" : "C5", "duration": "8n", "velocity": 0.7},
  {"time" : "4:1:2", "note" : "G4", "duration": "8n", "velocity": 0.8},
  {"time" : "4:2", "note" : "E4", "duration": "8n", "velocity": 0.9}, 
  {"time" : "4:2:2", "note" : "C4", "duration": "8n", "velocity": 0.7}
];

// D-7
var D_7 = [
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "4:1", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "4:1:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:2", "note" : "E5", "duration": "4n", "velocity": 0.8}
];

// D-8
var D_8 = [
  {"time" : "4:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "E5", "duration": "4n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "4n", "velocity": 0.6}, 
  {"time" : "4:1", "note" : "E5", "duration": "8n", "velocity": 0.5},
  {"time" : "4:1", "note" : "C5", "duration": "8n", "velocity": 0.5},
  {"time" : "4:1:2", "note" : "F5", "duration": "8n", "velocity": 0.5},
  {"time" : "4:1:2", "note" : "D5", "duration": "8n", "velocity": 0.5},
  {"time" : "4:2", "note" : "G5", "duration": "4n", "velocity": 0.6},
  {"time" : "4:2", "note" : "E5", "duration": "4n", "velocity": 0.6}
];

// D-9
var D_9 = [
  {"time" : "4:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "4:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "4:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:2", "note" : "G4", "duration": "4n", "velocity": 0.8}
];

// D-10
var D_10 = [
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "4:0:2", "note" : "G4", "duration": "8n", "velocity": 0.6},
  {"time" : "4:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "4:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:2", "note" : "G5", "duration": "4n", "velocity": 0.8} 
];

// D-11
var D_11 = [
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "4:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "4:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:2", "note" : "G5", "duration": "4n", "velocity": 0.8}
];

// D-12
var D_12 = [
  {"time" : "4:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "4:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "4:0:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "4:1", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "4:1:2", "note" : "G4", "duration": "8n", "velocity": 0.6},
  {"time" : "4:2", "note" : "E4", "duration": "4n", "velocity": 0.8} 
];

var bar4Choice = {
    2: D_2,
    3: D_3,
    4: D_4,
    5: D_5,
    6: D_6,
    7: D_7,
    8: D_8,
    9: D_9,
    10: D_10,
    11: D_11,
    12: D_12,
};

// bar 5 ---------------------------------------------
// E-2
var E_2 = [
  {"time" : "5:0", "note" : "E5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "5:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// E-3
var E_3 = [
  {"time" : "5:0", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// E-4
var E_4 = [
  {"time" : "5:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// E-5
var E_5 = [
  {"time" : "5:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "5:0:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "5:1", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "5:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "5:2", "note" : "G4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "5:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// E-6
var E_6 = [
  {"time" : "5:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "5:0:2", "note" : "B5", "duration": "8n", "velocity": 0.6},
  {"time" : "5:1", "note" : "C6", "duration": "8n", "velocity": 0.8},
  {"time" : "5:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "5:2", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "5:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "C3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// E-7
var E_7 = [
  {"time" : "5:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "5:0:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "5:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "5:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "5:2", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "5:2", "note" : "E3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "C3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "G5", "duration": "8n", "velocity": 0.6}
];

// E-8
var E_8 = [
  {"time" : "5:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:1", "note" : "F5", "duration": "8n", "velocity": 0.8},
  {"time" : "5:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "5:2", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "5:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// E-9
var E_9 = [
  {"time" : "5:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "5:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "5:2", "note" : "G4", "duration": "4n", "velocity": 0.8}
];

// E-10
var E_10 = [
  {"time" : "5:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "5:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// E-11
var E_11 = [
  {"time" : "5:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "5:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// E-12
var E_12 = [
  {"time" : "5:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:0", "note" : "E4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:0", "note" : "C3", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:1", "note" : "E4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:1", "note" : "C3", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:2", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "5:2", "note" : "E4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "5:2", "note" : "C3", "duration": "4n", "velocity": 0.8} 
];

var bar5Choice = {
    2: E_2,
    3: E_3,
    4: E_4,
    5: E_5,
    6: E_6,
    7: E_7,
    8: E_8,
    9: E_9,
    10: E_10,
    11: E_11,
    12: E_12,
};

// bar 6 -----------------------------------------
// F-2
var F_2 = [
  {"time" : "6:0", "note" : "E5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "6:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// F-3
var F_3 = [
  {"time" : "6:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:2", "note" : "C3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "G3", "duration": "4n", "velocity": 0.6} 
];

// F-4
var F_4 = [
  {"time" : "6:0", "note" : "G4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// F-5
var F_5 = [
  {"time" : "6:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:0:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "6:1", "note" : "C5", "duration": "8n", "velocity": 0.8},
  {"time" : "6:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "6:2", "note" : "G4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:2", "note" : "C3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "6:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// F-6
var F_6 = [
  {"time" : "6:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:0:2", "note" : "B5", "duration": "8n", "velocity": 0.6},
  {"time" : "6:1", "note" : "C6", "duration": "8n", "velocity": 0.8},
  {"time" : "6:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "6:2", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// F-7
var F_7 = [
  {"time" : "6:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "G3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:0:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "6:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "6:1:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "6:2", "note" : "C6", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:2", "note" : "C3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "6:2:2", "note" : "G5", "duration": "8n", "velocity": 0.6}
];

// F-8
var F_8 = [
  {"time" : "6:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:1", "note" : "F5", "duration": "8n", "velocity": 0.8},
  {"time" : "6:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "6:2", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "6:2:2", "note" : "C5", "duration": "8n", "velocity": 0.6}
];

// F-9
var F_9 = [
  {"time" : "6:0", "note" : "C3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "C5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "6:0:2", "note" : "G4", "duration": "8n", "velocity": 0.6},
  {"time" : "6:1", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "6:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "6:2", "note" : "G5", "duration": "8n", "velocity": 0.8},
  {"time" : "6:2:2", "note" : "E5", "duration": "8n", "velocity": 0.6}
];

// F-10
var F_10 = [
  {"time" : "6:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "6:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// F-11
var F_11 = [
  {"time" : "6:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:0", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:0:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:1", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:1:2", "note" : "G3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:2", "note" : "C3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2", "note" : "E3", "duration": "8n", "velocity": 0.6}, 
  {"time" : "6:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6} 
];

// F-12
var F_12 = [
  {"time" : "6:0", "note" : "C5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:0", "note" : "E4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:0", "note" : "C3", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:1", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:1", "note" : "E4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:1", "note" : "C3", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:2", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "6:2", "note" : "E4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "6:1", "note" : "C3", "duration": "4n", "velocity": 0.8} 
];

var bar6Choice = {
    2: F_2,
    3: F_3,
    4: F_4,
    5: F_5,
    6: F_6,
    7: F_7,
    8: F_8,
    9: F_9,
    10: F_10,
    11: F_11,
    12: F_12,
};

// bar 7 --------------------------------------------
// G-2
var G_2 = [
  {"time" : "7:0", "note" : "A3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "7:0", "note" : "F3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "7:0", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "F5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1:2", "note" : "F5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "B4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:2", "note" : "D4", "duration": "4n", "velocity": 0.6}, 
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "7:2:2", "note" : "D5", "duration": "8n", "velocity": 0.6}
];

// G-3
var G_3 = [
  {"time" : "7:0", "note" : "F3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "7:0", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "F5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:1", "note" : "A5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1:2", "note" : "F5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "7:2:2", "note" : "B4", "duration": "8n", "velocity": 0.6}
];

// G-4
var G_4 = [
  {"time" : "7:0", "note" : "B2", "duration": "2n", "velocity": 0.6}, 
  {"time" : "7:0", "note" : "D3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "7:0", "note" : "G5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "7:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "G4", "duration": "4n", "velocity": 0.8},
  {"time" : "7:2", "note" : "B2", "duration": "4n", "velocity": 0.6}, 
  {"time" : "7:2", "note" : "D3", "duration": "4n", "velocity": 0.6} 
];

// G-5
var G_5 = [
  {"time" : "7:0", "note" : "F3", "duration": "2n", "velocity": 0.6}, 
  {"time" : "7:0", "note" : "D5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "C#5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1:2", "note" : "F5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "G4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "7:2:2", "note" : "B4", "duration": "8n", "velocity": 0.6}
];

// G-6
var G_6 = [
  {"time" : "7:0", "note" : "F5", "duration": "4n", "velocity": 0.8}, 
  {"time" : "7:0", "note" : "F3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "7:1", "note" : "D5", "duration": "4n", "velocity": 0.8},
  {"time" : "7:1", "note" : "D3", "duration": "4n", "velocity": 0.6}, 
  {"time" : "7:2", "note" : "G5", "duration": "4n", "velocity": 0.8},
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.6} 
];

// G-7
var G_7 = [
  {"time" : "7:0", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0", "note" : "F3", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:0:2", "note" : "E3", "duration": "8n", "velocity": 0.6},
  {"time" : "7:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1", "note" : "D3", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:1:2", "note" : "E3", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:2", "note" : "F3", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:2:2", "note" : "G5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2:2", "note" : "G3", "duration": "8n", "velocity": 0.6}
];

// G-8
var G_8 = [
  {"time" : "7:0", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0", "note" : "F3", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "E5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:0:2", "note" : "E3", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1", "note" : "D5", "duration": "4n", "velocity": 0.6},
  {"time" : "7:1", "note" : "D3", "duration": "4n", "velocity": 0.6},
  {"time" : "7:2", "note" : "G5", "duration": "4n", "velocity": 0.8},
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.8}
];

// G-9
var G_9 = [
  {"time" : "7:0", "note" : "F3", "duration": "2n", "velocity": 0.8}, 
  {"time" : "7:0", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "E5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:1", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1:2", "note" : "C5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "B4", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.8}, 
  {"time" : "7:2:2", "note" : "D5", "duration": "8n", "velocity": 0.6}
];

// G-10
var G_10 = [
  {"time" : "7:0", "note" : "F3", "duration": "2n", "velocity": 0.8}, 
  {"time" : "7:0", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "D5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1", "note" : "A4", "duration": "4n", "velocity": 0.6},
  {"time" : "7:2", "note" : "B4", "duration": "4n", "velocity": 0.8},
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.8} 
];

// G-11
var G_11 = [
  {"time" : "7:0", "note" : "F3", "duration": "2n", "velocity": 0.8}, 
  {"time" : "7:0", "note" : "F5", "duration": "8n", "velocity": 0.8}, 
  {"time" : "7:0:2", "note" : "A5", "duration": "8n", "velocity": 0.8},
  {"time" : "7:1", "note" : "A4", "duration": "4n", "velocity": 0.6},
  {"time" : "7:2", "note" : "B4", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.8}, 
  {"time" : "7:2:2", "note" : "D5", "duration": "8n", "velocity": 0.8}
];

// G-12
var G_12 = [
  {"time" : "7:0", "note" : "F3", "duration": "2n", "velocity": 0.8}, 
  {"time" : "7:0", "note" : "A4", "duration": "4n", "velocity": 0.8}, 
  {"time" : "7:1", "note" : "F5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:1:2", "note" : "D5", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "A4", "duration": "8n", "velocity": 0.6},
  {"time" : "7:2", "note" : "G3", "duration": "4n", "velocity": 0.8}, 
  {"time" : "7:2:2", "note" : "B4", "duration": "8n", "velocity": 0.8}
];

var bar7Choice = {
    2: G_2,
    3: G_3,
    4: G_4,
    5: G_5,
    6: G_6,
    7: G_7,
    8: G_8,
    9: G_9,
    10: G_10,
    11: G_11,
    12: G_12,
};

// bar 8 --------------------------------------------
// H-2
var H_2 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C2", "duration": "4n", "velocity": 0.9}
];

// H-3
var H_3 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C3", "duration": "4n", "velocity": 0.8}
];

// H-4
var H_4 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C2", "duration": "4n", "velocity": 0.9}
];

// H-5
var H_5 = [
  {"time" : "8:0", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "2n", "velocity": 0.8},
  {"time" : "8:1", "note" : "C4", "duration": "2n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C2", "duration": "4n", "velocity": 0.9}
];

// H-6
var H_6 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C3", "duration": "4n", "velocity": 0.8}
];

// H-7
var H_7 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C2", "duration": "4n", "velocity": 0.9}
];

// H-8
var H_8 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C2", "duration": "4n", "velocity": 0.9}
];

// H-9
var H_9 = [
  {"time" : "8:0", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "2n", "velocity": 0.8},
  {"time" : "8:1", "note" : "C4", "duration": "2n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C3", "duration": "4n", "velocity": 0.8}
];

// H-10
var H_10 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C2", "duration": "4n", "velocity": 0.8}
];

// H-11
var H_11 = [
  {"time" : "8:0", "note" : "C5", "duration": "4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "2n", "velocity": 0.8},
  {"time" : "8:1", "note" : "C4", "duration": "2n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C3", "duration": "4n", "velocity": 0.8}
];

// H-12
var H_12 = [
  {"time" : "8:0", "note" : "C5", "duration": "2n+4n", "velocity": 0.8},
  {"time" : "8:0", "note" : "C3", "duration": "4n", "velocity": 0.8},
  {"time" : "8:1", "note" : "G2", "duration": "4n", "velocity": 0.8},
  {"time" : "8:2", "note" : "C3", "duration": "4n", "velocity": 0.8}
];

var bar8Choice = {
    2: H_2,
    3: H_3,
    4: H_4,
    5: H_5,
    6: H_6,
    7: H_7,
    8: H_8,
    9: H_9,
    10: H_10,
    11: H_11,
    12: H_12,
};

function rollDice() {
  min = Math.ceil(2);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

var choices = [];
var numOfMeasures = 8;
/*-------------------------
// for debugging
if(numOfMeasures > 7) {
    choices = [3,4,8,4,5,11,3,5];
} else {
    choices = [6,7,9,6];
}
//--------------------------*/

function displayHTMLForDiceRolls(diceRolls) {
    var rollData = '<table border="1"><tr>';
    for(var i=0; i<diceRolls.length; i++) {
        rollData += '<td cellpadding="3">';
        rollData += ' measure '+(i+1)+' = variation '+choices[i];
        rollData += '</td>';
        if(i===3) {
            rollData += '</tr><tr><td colspan="4">.</td></tr><tr>';
        }        
    }
    rollData += '</tr></table>';
    return rollData;
}

function createCompositionMeasures() {
//    var rollData = '<table border="1"><tr>';
    for(let i=0; i<numOfMeasures; i++) {
        choices[i] = rollDice();
/*
        rollData += '<td cellpadding="3">';
        rollData += ' measure '+(i+1)+' = variation '+choices[i];
        rollData += '</td>';
        if(i===3) {
            rollData += '</tr><tr><td colspan="4">.</td></tr><tr>';
        }
*/
    }
//    rollData += '</tr></table>';
    var rollData = displayHTMLForDiceRolls(choices); 
    
    var measures = [];
    measures.push(bar1Choice[choices[0]]);
    measures.push(bar2Choice[choices[1]]);
    measures.push(bar3Choice[choices[2]]);
    measures.push(bar4Choice[choices[3]]);

if(numOfMeasures > 7) {
    measures.push(bar5Choice[choices[4]]);
    measures.push(bar6Choice[choices[5]]);
    measures.push(bar7Choice[choices[6]]);
    measures.push(bar8Choice[choices[7]]);
}

    document.getElementById("compositionData").innerHTML = '<h2>Rolling the Dice...</h2>';
	setTimeout(function(){
        document.getElementById("compositionData").innerHTML = rollData;
	}, 2500);

    return measures;
}

var minuet = null;
var synth = null;
function playComposition(melody) {
    if(minuet) {
        minuet.dispose();
        minuet = null;
    }
    if(synth) {
        synth.dispose();
        synth = null;
    }
    Tone.Transport.stop();
    synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
    Tone.Transport.timeSignature = 3;
	minuet = new Tone.Part(function(time, value){
		synth.triggerAttackRelease(value.note, value.duration, time, value.velocity)
	}, melody ).start(1);
    
	Tone.Transport.start("+0.1");

}

function flatten(arr) {
    return arr.reduce(function(a,b) {
        return a.concat(Array.isArray(b) ? flatten(b) : b);
    }, []);
}

function updateMelodyVolume()  {
	synth.volume.value = document.myForm.synth_volume.value;
}

var MIDI_SHARP_NAMES = ['B#_0',  'C#_1', 'Cx_1', 'D#_1',   'E_1',  'E#_1',  'F#_1', 'Fx_1',  'G#_1', 'Gx_1', 'A#_1', 'B_1',
                    'B#_1', 'C#0', 'Cx0', 'D#0', 'E0', 'E#0', 'F#0', 'Fx0', 'G#0', 'Gx0', 'A#0', 'B0',
                    'B#0', 'C#1', 'Cx1', 'D#1', 'E1', 'E#1', 'F#1', 'Fx1', 'G#1', 'Gx1', 'A#1', 'B1',
                    'B#1', 'C#2', 'Cx2', 'D#2', 'E2', 'E#2', 'F#2', 'Fx2', 'G#2', 'Gx2', 'A#2', 'B2',
                    'B#2', 'C#3', 'Cx3', 'D#3', 'E3', 'E#3', 'F#3', 'Fx3', 'G#3', 'Gx3', 'A#3', 'B3',
                    'B#3', 'C#4', 'Cx4', 'D#4', 'E4', 'E#4', 'F#4', 'Fx4', 'G#4', 'Gx4', 'A#4', 'B4',
                    'B#4', 'C#5', 'Cx5', 'D#5', 'E5', 'E#5', 'F#5', 'Fx5', 'G#5', 'Gx5', 'A#5', 'B5',
                    'B#5', 'C#6', 'Cx6', 'D#6', 'E6', 'E#6', 'F#6', 'Fx6', 'G#6', 'Gx6', 'A#6', 'B6',
                    'B#6', 'C#7', 'Cx7', 'D#7', 'E7', 'E#7', 'F#7', 'Fx7', 'G#7', 'Gx7', 'A#7', 'B7',
                    'B#7', 'C#8', 'Cx8', 'D#8', 'E8', 'E#8', 'F#8', 'Fx8', 'G#8', 'Gx8', 'A#8', 'B8',
                    'B#8', 'C#9', 'Cx9', 'D#9', 'E9', 'E#9', 'F#9', 'Fx9'];
                          

var MIDI_FLAT_NAMES = ['C_1', 'Db_1', 'D_1', 'Eb_1', 'Fb_1', 'F_1', 'Gb_1', 'G_1', 'Ab_1', 'A_1', 'Bb_1', 'Cb0',
                    'C0', 'Db0', 'D0', 'Eb0', 'Fb0', 'F0', 'Gb0', 'G0', 'Ab0', 'A0', 'Bb0', 'Cb1',
                    'C1', 'Db1', 'D1', 'Eb1', 'Fb1', 'F1', 'Gb1', 'G1', 'Ab1', 'A1', 'Bb1', 'Cb2',
                    'C2', 'Db2', 'D2', 'Eb2', 'Fb2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'Cb3',
                    'C3', 'Db3', 'D3', 'Eb3', 'Fb3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'Cb4',
                    'C4', 'Db4', 'D4', 'Eb4', 'Fb4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'Cb5',
                    'C5', 'Db5', 'D5', 'Eb5', 'Fb5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'Cb6',
                    'C6', 'Db6', 'D6', 'Eb6', 'Fb6', 'F6', 'Gb6', 'G6', 'Ab6', 'A6', 'Bb6', 'Cb7',
                    'C7', 'Db7', 'D7', 'Eb7', 'Fb7', 'F7', 'Gb7', 'G7', 'Ab7', 'A7', 'Bb7', 'Cb8',
                    'C8', 'Db8', 'D8', 'Eb8', 'Fb8', 'F8', 'Gb8', 'G8', 'Ab8', 'A8', 'Bb8', 'Cb9',
                    'C9', 'Db9', 'D9', 'Eb9', 'Fb9', 'F9', 'Gb9', 'G9'];
                    


var MIDI_OTHER_NAMES = ['Dbb_1', 'Bx_0', 'Ebb_1', 'Fbb_1', 'Dx_1', 'Gbb_1', 'Ex_1', 'Abb_1', 'Ab_1', 'Bbb_1', 'Cbb0', 'Ax_1',
                    'Dbb0', 'Bx_1', 'Ebb0', 'Fbb0', 'Dx0', 'Gbb0', 'Ex0', 'Abb0', 'Ab0', 'Bbb0', 'Cbb1', 'Ax0',
                    'Dbb1', 'Bx0', 'Ebb1', 'Fbb1', 'Dx1', 'Gbb1', 'Ex1', 'Abb1', 'Ab1', 'Bbb1', 'Cbb2', 'Ax1',
                    'Dbb2', 'Bx1', 'Ebb2', 'Fbb2', 'Dx2', 'Gbb2', 'Ex2', 'Abb2', 'Ab2', 'Bbb2', 'Cbb3', 'Ax2',
                    'Dbb3', 'Bx2', 'Ebb3', 'Fbb3', 'Dx3', 'Gbb3', 'Ex3', 'Abb3', 'Ab3', 'Bbb3', 'Cbb4', 'Ax3',
                    'Dbb4', 'Bx3', 'Ebb4', 'Fbb4', 'Dx4', 'Gbb4', 'Ex4', 'Abb4', 'Ab4', 'Bbb4', 'Cbb5', 'Ax4',
                    'Dbb5', 'Bx4', 'Ebb5', 'Fbb5', 'Dx5', 'Gbb5', 'Ex5', 'Abb5', 'Ab5', 'Bbb5', 'Cbb6', 'Ax5',
                    'Dbb6', 'Bx5', 'Ebb6', 'Fbb6', 'Dx6', 'Gbb6', 'Ex6', 'Abb6', 'Ab6', 'Bbb6', 'Cbb7', 'Ax6',
                    'Dbb7', 'Bx6', 'Ebb7', 'Fbb7', 'Dx7', 'Gbb7', 'Ex7', 'Abb7', 'Ab7', 'Bbb7', 'Cbb8', 'Ax7',
                    'Dbb8', 'Bx7', 'Ebb8', 'Fbb8', 'Dx8', 'Gbb8', 'Ex8', 'Abb8', 'Ab8', 'Bbb8', 'Cbb9', 'Ax8',
                    'Dbb9', 'Bx8', 'Ebb9', 'Fbb9', 'Dx9', 'Gbb9', 'Ex9', 'Abb9'];
                    

function noteNameToMIDI(noteName)  {
    var i;
    var MIDInumber = -1; // default if not found
    for(i=0; i < MIDI_SHARP_NAMES.length; i++) {
        if( noteName == MIDI_SHARP_NAMES[i] ||
                noteName == MIDI_FLAT_NAMES[i] ||
                    noteName == MIDI_OTHER_NAMES[i] ) {
        
            MIDInumber = i;  // found it
        }
    }
    return MIDInumber;
}


var rhythmTextToNumbers = {
	"1n" : 96, 
	"d2n" : 72, "2n" : 48, "2t" : 32,
	"d4n" : 36, "4n" : 24, "4t" :  16,
	"d8n" : 18, "8n" : 12, "8t" : 8,
	"d16n" : 9, "16n" : 6, "16t" : 4,

	"1nr" : -96, 
	"d2nr" : -72, "2nr" : -48,
	"d4nr" : -36, "4nr" : -24,
	"d8nr" : -18, "8nr" : -12,
	"d16nr" : -9, "16nr" : -6,

	"1r" : -96, 
	"d2r" : -72, "2r" : -48, "2tr" : -32,
	"d4r" : -36, "4r" : -24, "4tr" :  -16,
	"d8r" : -18, "8r" : -12, "8tr" : -8,
	"d16r" : -9, "16r" : -6, "16tr" : -4
};

var numbersToRhythmText = {
	"96": "1n", 
	"72": "d2n", "48": "2n", "32": "2t",
	"36": "d4n", "24": "4n", "16": "4t",
	"18": "d8n", "12": "8n", "8": "8t",
	"9": "d16n", "6": "16n", "4": "16t",

	"-96": "1r", 
	"-72": "d2r", "-48": "2r", "-32": "2tr",
	"-36": "d4r", "-24": "4r", "-16": "4tr",
	"-18": "d8r", "-12": "8r", "-8": "8tr",
	"-9": "d16r", "-6": "16r", "-4": "16tr"
};

var notesTrebleForLilypond = [];
var dursTrebleForLilypond = [];
var notesBassForLilypond = [];
var dursBassForLilypond = [];
function createArraysForLilyPond(minuetObject) {
    var numericTotalPerMeasure = 72;
    var numericDurationTreble = 0;
    var numericDurationBass = 0;
    var currentMeasureNumberTreble = 0;
    var lastMeasureNumberTreble = 1;
    var currentMeasureNumberBass = 0;
    var lastMeasureNumberBass = 1;
    var isNewMeasureTreble = false;
    var isNewMeasureBass = false;
    var measureCompleteBass = false;
    var measureCompleteTreble = false;
    var fillerRest = '';
    var aNote = '';
    var noteMIDINumber
    var aDuration = '';
    var lastTimeTreble = '';
    var lastTimeBass = '';
    var nextTime = '';
    var currentTime = '';
    var currentlyTrebleChord = false;
    var currentlyBassChord = false;
    var chordArray = [];
    var chordArray2 = [];

    notesTrebleForLilypond = [];
    dursTrebleForLilypond = [];
    notesBassForLilypond = [];
    dursBassForLilypond = [];

    for(let i=0; i<minuetObject.length; i++) {
        // extract the note and duration
        aNote = minuetObject[i].note;
        aDuration = minuetObject[i].duration;
        // reset loop vars
        isNewMeasureTreble = false;
        isNewMeasureBass = false;
        noteMIDINumber = noteNameToMIDI(aNote);
        currentTime = minuetObject[i].time;
        if(i < minuetObject.length-1) {
           nextTime = minuetObject[i+1].time;
           nextMIDINumber = noteNameToMIDI(minuetObject[i+1].note);
        } else {
            nextTime = '';
        }

/*-------------------
        split the notes into two arrays 
        treble clef all notes above (and including) E4 and also the note C4 (but not D4)
        bass clef all notes below and including B3 and also D4 (but note C4)
        this will divide the notes into the same sets that the Mozart game notation uses        
//---------------------------------*/
        // treble clef = E4 and above plus middle C
        if(noteMIDINumber > 63 || noteMIDINumber === 60) {

// keep track of durationMath as to recognize any needed rest at the end of a measures
// when a note the first of a new measure is encounter first check to see if the numericDuration
// matches that of a new measure, if not first insert an appropriate rest

            currentMeasureNumberTreble = numericMeasure(currentTime);
            if(lastTimeTreble != currentTime) {
			    numericDurationTreble += rhythmTextToNumbers[aDuration]; 
			} else {
                ; // nothing to do now, just placeholder for future dev
			}

			if( ((numericDurationTreble % numericTotalPerMeasure) == 0)  && (currentMeasureNumberTreble != lastMeasureNumberTreble) ) {
			    isNewMeasureTreble = true;
			} else {
			    isNewMeasureTreble = false;
			}

            lastMeasureNumberTreble = currentMeasureNumberTreble;

			if(numericTotalPerMeasure == numericDurationTreble && isNewMeasureTreble == false) {
			// last note of a measure, no rest is needed
//				numericDurationTreble = 0;
			} else if(numericTotalPerMeasure == numericDurationTreble && isNewMeasureTreble == true) {
			// last note of a measure, no rest is needed
//			    fillerRest = numbersToRhythmText[(72 - (numericDurationTreble-rhythmTextToNumbers[aDuration])).toString()];
//			    fillerRest += 'r';  // make it a rest
//			    dursTrebleForLilypond.push(fillerRest);
				numericDurationTreble = rhythmTextToNumbers[aDuration];
//				numericDurationTreble = 0;

			} else if(numericTotalPerMeasure > numericDurationTreble && isNewMeasureTreble == false) {
			// normal note in a measure, no rest is needed 
			} else if(numericTotalPerMeasure > numericDurationTreble && isNewMeasureTreble == true && measureCompleteTreble == false) {
			// a rest should be insert of value numbersToRhythmText[72 - (numericDuration-rhythmTextToNumbers[aDuration])] 
			    fillerRest = numbersToRhythmText[(72 - (numericDurationTreble-rhythmTextToNumbers[aDuration])).toString()];
			    fillerRest += 'r';  // make it a rest
			    dursTrebleForLilypond.push(fillerRest);

			} else if(numericTotalPerMeasure < numericDurationTreble  && isNewMeasureTreble == false && measureCompleteTreble == false) {
			// a rest is need of value numbersToRhythmText[numericDurationTreble - numericTotalPerMeasure]
			// assumes the note's time is on ONE of the meter
			    fillerRest = numbersToRhythmText[(numericDurationTreble - numericTotalPerMeasure).toString()];
			    fillerRest += 'r';
			    dursTrebleForLilypond.push(fillerRest);
				numericDurationTreble = rhythmTextToNumbers[aDuration];
			} else if(numericTotalPerMeasure < numericDurationTreble  && isNewMeasureTreble == true) {
//				console.log('(3b) numericDurationTreble ='+numericDurationTreble+' currentMeasureNumberTreble='+currentMeasureNumberTreble+' currentTime='+currentTime+' numericTotalPerMeasure='+numericTotalPerMeasure);

			} else {
//				console.log('(4) i='+i+' numericDurationTreble ='+numericDurationTreble+' currentMeasureNumberTreble='+currentMeasureNumberTreble+' currentTime='+currentTime+' numericTotalPerMeasure='+numericTotalPerMeasure);
			}
        

            // check for chord tones, i.e. same time
            if(( currentTime === nextTime && lastTimeTreble != currentTime) && (nextMIDINumber > 63 || nextMIDINumber === 60) ) {
                // start a chord
                chordArray = [];
                chordArray.push(aNote);
                currentlyTrebleChord = true;
            } else if((currentTime === nextTime && lastTimeTreble === currentTime) && (nextMIDINumber > 63 || nextMIDINumber === 60) ) {
                // continue chord note
                chordArray.push(aNote);
                currentlyTrebleChord = true;
            } else if((currentTime === nextTime && lastTimeTreble === currentTime) && (nextMIDINumber < 60 || nextMIDINumber === 62) ) {
                // end chord, nextTime is in other clef
                chordArray.push(aNote);
                notesTrebleForLilypond.push(chordArray);
                dursTrebleForLilypond.push(aDuration);
                currentlyTrebleChord = true;
                if(numericDurationTreble == numericTotalPerMeasure) {
                    numericDurationTreble = 0;
                    measureCompleteTreble = true;
                } else {
                    measureCompleteTreble = false;
                }
                chordArray = [];
            } else if( (currentTime != nextTime && lastTimeTreble === currentTime) ) {
                // end a chord 
                chordArray.push(aNote);
                notesTrebleForLilypond.push(chordArray);
                dursTrebleForLilypond.push(aDuration);
                currentlyTrebleChord = true;
                if(numericDurationTreble == numericTotalPerMeasure) {
                    numericDurationTreble = 0;
                    measureCompleteTreble = true;
                } else {
                    measureCompleteTreble = false;
                }
                chordArray = [];
            }
            if( !currentlyTrebleChord ) {
                notesTrebleForLilypond.push(aNote);
                dursTrebleForLilypond.push(aDuration);
                if(numericDurationTreble == numericTotalPerMeasure) {
                    numericDurationTreble = 0;
                    measureCompleteTreble = true;
                } else {
                    measureCompleteTreble = false;
                }
            }
            lastTimeTreble = currentTime;
            currentlyTrebleChord = false;

        } else if (noteMIDINumber < 60 || noteMIDINumber === 62) {

// keep track of durationMath as to recognize any needed rest at the end of a measures
// when a note the first of a new measure is encounter first check to see if the numericDuration
// matches that of a new measure, if not first insert an appropriate rest
            currentMeasureNumberBass = numericMeasure(currentTime);

            if(lastTimeBass != currentTime) {
			    numericDurationBass += rhythmTextToNumbers[aDuration];
			} else {
//				console.log('lastTimeBass == currentTime: i='+i+' numericDurationBass='+numericDurationBass+' aDuration='+aDuration);
			}
			if( currentMeasureNumberBass > lastMeasureNumberBass || (currentlyBassChord && (lastTimeBass.slice(1) == ':0') ) ) {
			    isNewMeasureBass = true;
//			    numericDurationBass = 0;
//				numericDurationBass = rhythmTextToNumbers[aDuration];
			} else {
			    isNewMeasureBass = false;
			}
            lastMeasureNumberBass = currentMeasureNumberBass;

			if(numericTotalPerMeasure == numericDurationBass && isNewMeasureBass == false) {
//				numericDurationBass = 0;
			} else if(numericTotalPerMeasure == numericDurationBass && isNewMeasureBass == true) {
			    fillerRest = numbersToRhythmText[(72 - (numericDurationBass-rhythmTextToNumbers[aDuration])).toString()];
			    fillerRest += 'r';  // make it a rest
			    dursBassForLilypond.push(fillerRest);
				numericDurationBass = rhythmTextToNumbers[aDuration];

			} else if(numericTotalPerMeasure > numericDurationBass && isNewMeasureBass == false) {
			// normal
//				console.log('aNote='+aNote+' aDuration='+aDuration);
			} else if(numericTotalPerMeasure > numericDurationBass && isNewMeasureBass == true && measureCompleteBass == false) {
			// a rest should be insert of value numbersToRhythmText[72 - (numericDuration-rhythmTextToNumbers[aDuration])]
			    fillerRest = numbersToRhythmText[(72 - (numericDurationBass - rhythmTextToNumbers[aDuration])).toString()];
			    fillerRest += 'r';  // make it a rest
			    dursBassForLilypond.push(fillerRest);
				numericDurationBass = rhythmTextToNumbers[aDuration];

			} else if(numericTotalPerMeasure < numericDurationBass && isNewMeasureBass == false) {
			// a rest is need of value numbersToRhythmText[numericDurationTreble - numericTotalPerMeasure]
			// assumes the note's time is on ONE of the meter
			    fillerRest = numbersToRhythmText[(numericDurationBass - numericTotalPerMeasure).toString()];
			    fillerRest += 'r';
			    dursBassForLilypond.push(fillerRest);
				numericDurationBass = rhythmTextToNumbers[aDuration];
			} else if(numericTotalPerMeasure < numericDurationBass && isNewMeasureBass == true && measureCompleteBass == true) {
//				console.log('(7b) i='+i+' numericDurationBass ='+numericDurationBass+' currentMeasureNumberBass='+currentMeasureNumberBass+' currentTime='+currentTime+' numericTotalPerMeasure='+numericTotalPerMeasure);

			} else if(numericTotalPerMeasure < numericDurationBass && isNewMeasureBass == true && measureCompleteBass == false) {
			    fillerRest = numbersToRhythmText[(72 - (numericDurationBass-rhythmTextToNumbers[aDuration])).toString()];
			    fillerRest += 'r';  // make it a rest
			    dursBassForLilypond.push(fillerRest);
			    numericDurationBass = rhythmTextToNumbers[aDuration];

			} else if(numericTotalPerMeasure < numericDurationBass && isNewMeasureBass == false && measureCompleteBass == false) {
//				console.log('(7d) i='+i+' numericDurationBass ='+numericDurationBass+' currentMeasureNumberBass='+currentMeasureNumberBass+' currentTime='+currentTime+' numericTotalPerMeasure='+numericTotalPerMeasure);

			} else {
//				console.log('(8) i='+i+' numericDurationBass ='+numericDurationBass+' currentMeasureNumberBass='+currentMeasureNumberBass+' currentTime='+currentTime+' numericTotalPerMeasure='+numericTotalPerMeasure+' isNewMeasureBass='+isNewMeasureBass+' measureCompleteBass='+measureCompleteBass);
			}
        
            if( (currentTime === nextTime && lastTimeBass != currentTime) && (nextMIDINumber < 60 || nextMIDINumber === 62) ) {
                // start a chord
                chordArray2 = [];
                chordArray2.push(aNote);
                currentlyBassChord = true;
            } else if( (currentTime === nextTime && lastTimeBass === currentTime)  && (nextMIDINumber < 60 || nextMIDINumber === 62) ) {
                // continue chord note
                chordArray2.push(aNote);
                currentlyBassChord = true;
            } else if( (currentTime === nextTime && lastTimeBass === currentTime)  && (nextMIDINumber > 63 || nextMIDINumber === 60) ) {
                // nextTime isn't in bassClef
                chordArray2.push(aNote);
                notesBassForLilypond.push(chordArray2);
                dursBassForLilypond.push(aDuration)
                if(numericTotalPerMeasure == numericDurationBass) {
                    numericDurationBass = 0;
                    measureCompleteBass = true;
                } else {
                    measureCompleteBass = false;
                }
                currentlyBassChord = true;
                chordArray2 = [];
            } else if( (currentTime != nextTime && lastTimeBass === currentTime)  && (nextMIDINumber < 60 || nextMIDINumber === 62) ) {
                // end a chord 
                chordArray2.push(aNote);
                notesBassForLilypond.push(chordArray2);
                dursBassForLilypond.push(aDuration)
                if(numericTotalPerMeasure == numericDurationBass) {
                    numericDurationBass = 0;
                    measureCompleteBass = true;
                } else {
                    measureCompleteBass = false;
                }
                currentlyBassChord = true;
                chordArray2 = [];
            }
            if( !currentlyBassChord ) {
                notesBassForLilypond.push(aNote);
                dursBassForLilypond.push(aDuration);
                if(numericTotalPerMeasure == numericDurationBass) {
                    numericDurationBass = 0;
                    measureCompleteBass = true;
                } else {
                    measureCompleteBass = false;
                }
            }
            lastTimeBass = currentTime;
            currentlyBassChord = false;
        } else {
//            console.log('ERROR minuetObject[i].note='+minuetObject[i].note);
        }
        
    }
//    console.log('notesTrebleForLilypond='+notesTrebleForLilypond.toString()+' dursTrebleForLilypond='+dursTrebleForLilypond.toString())
}

function numericMeasure(time) {
    return Number(time.slice(0,1));
}

function makeDiceStaff() {
    var lilyCode = 'myDice = {';
    for(var i=0; i<choices.length; i++) {
        lilyCode += 's2.^"dice = '+choices[i]+'" ';
    }
    lilyCode += '}';
    return lilyCode;
}

function PlayNewTune() {
	var tune = createCompositionMeasures();
	var myMinuet = flatten(tune);
	
	// make array for notes and duration for lilypond
	createArraysForLilyPond(myMinuet);
	var myJSON1 = createMozartDiceJSON(notesTrebleForLilypond, dursTrebleForLilypond);
	var myJSON2 = createMozartDiceJSON(notesBassForLilypond, dursBassForLilypond);
//	lpAdapter.setScoreParameters(myJSON1);
	lpAdapter.setGrandStaffScoreParameters(myJSON1, myJSON2);
	var myLilyFile = lpAdapter.createLilyPondFile();
	document.getElementById("lilyPondCode").value = myLilyFile;

	playComposition(myMinuet);
}

function repeatTune() {
    if(!choices)
        return PlayNewTune();
        
	var tune = recreateCompositionMeasures(choices);
	var myMinuet = flatten(tune);
	playComposition(myMinuet);
}

function createMozartDiceJSON(notes, durations, notes2, durations2, config) {
    var timeNow = new Date(Date.now());
    var timeStamp = timeNow.toDateString();
    var diceInfo = makeDiceStaff();
//    var mozartBarlines = [[4, '\\bar \"||\"']]
    var jsonConfig = {
//	    "jsonType": "piano",
	    "jsonType": "mozartDiceGame",
		"keySig": "c \\major",
//		"clef": "treble",
		"clef": "pianoStaff",
		"timeSig": "3/4",
		"title": "Mozart",
		"name": "Mozart Dice game on "+timeStamp,
		"notes":notes,
		"durations":durations,
		"notes2":notes2,
		"durations2":durations2,
		"diceStaff": diceInfo,
//		"barlines": mozartBarlines,
		"pickup": "",
		"pickupLength": "",
		"tempo": ' \"moderato\" 4 = 90',
		"composer": "W.A.Mozart",
		"opus": "dice game"
	};
	return jsonConfig
}



function recreateCompositionMeasures(myChoices) {
    var rollData = '<table border="1"><tr>';
    for(let i=0; i<8; i++) {
//        choices[i] = rollDice();
        rollData += '<td cellpadding="3">';
        rollData += ' measure '+(i+1)+' = variation '+myChoices[i];
        rollData += '</td>';
        if(i===3) {
            rollData += '</tr><tr><td colspan="4">.</td></tr><tr>';
        }
    }
    rollData += '</tr></table>';

/*--------------------------
    for(let i=0; i<8; i++) {
        rollData += '<br>measure '+(i+1)+' = variation '+myChoices[i];
    }
//-----------------------------*/
    var measures = [];

    measures.push(bar1Choice[myChoices[0]]);
    measures.push(bar2Choice[myChoices[1]]);
    measures.push(bar3Choice[myChoices[2]]);
    measures.push(bar4Choice[myChoices[3]]);
    measures.push(bar5Choice[myChoices[4]]);
    measures.push(bar6Choice[myChoices[5]]);
    measures.push(bar7Choice[myChoices[6]]);
    measures.push(bar8Choice[myChoices[7]]);

    document.getElementById("compositionData").innerHTML = rollData;
    return measures;
}
