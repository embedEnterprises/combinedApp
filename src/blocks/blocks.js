import * as Blockly from 'blockly';
import "blockly/javascript"

Blockly.defineBlocksWithJsonArray([
  {
    "type": "Run Car",
    "message0": "Drive Car %1",
    "args0": [
      {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        ["Forward", "1"],
        ["Backward", "0"]
      ]
    }
    ],

    "message1": "at Speed %1",
    "args1": [
      {
      "type": "field_number",
      "name": "Car Speed",
      "value": 50,
      "min": 0,
      "max": 100,
      "precision": 1
    }
    ],

    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['Run Car'] = function(block) {
  let value = block.getFieldValue('Car Speed');
  let direction = block.getFieldValue('direction');
//  let code = 'digitalWrite(5,' + direction + ');\n' + 'analogWrite(2,' + Math.floor(value*2.55) + ');\n';
  let code = 'run_car(' + direction + ',' + value+ ');\n';
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "Drive Car",
    "message0": "Drive Car %1",
    "args0": [
      {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        ["Forward", "1"],
        ["Backward", "0"]
      ]
    }
    ],

    "message1": "by %1 cm at Speed %2",
    "args1": [
      {
        "type": "field_number",
        "name": "Travel Distance",
        "value": 50,
        "min": 1,
        "max": 1000,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "Car Speed",
        "value": 50,
        "min": 0,
        "max": 100,
        "precision": 1
      }
    ],

    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['Drive Car'] = function(block) {
  let distance = block.getFieldValue('Travel Distance');
  let direction = block.getFieldValue('direction');
  let speed = block.getFieldValue('Car Speed');
//  let code = 'digitalWrite(5,' + direction + ');\n' + 'analogWrite(2,' + Math.floor(value*2.55) + ');\n';
  let code = 'drive_car(' + direction + ',' + distance + ',' + speed + ');\n';
  return code
};





Blockly.defineBlocksWithJsonArray([
  {
    "type": "Turn Car",

    "message0": "Turn Car %1",
    "args0": [
      {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        ["Left", "-1"],
        ["Right", "1"]
      ]
    }
    ],

    "message1": "by %1 degree at Speed %2",
    "args1": [
      {
        "type": "field_number",
        "name": "Turn Angle",
        "value": 45,
        "min": 1,
        "max": 90,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "Car Speed",
        "value": 50,
        "min": 0,
        "max": 100,
        "precision": 1
      }
    ],

    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['Turn Car'] = function(block) {
  let direction = block.getFieldValue('direction');
  let angle = block.getFieldValue('Turn Angle');
  let speed = block.getFieldValue('Car Speed');
  let code = 'turn_car(' + direction + ',' + angle + ',' + speed + ');\n';
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "Headlights",
    "message0": "Turn Headlights %1",
    "args0": [
      {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        ["On", "1"],
        ["Off", "0"]
      ]
    }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['Headlights'] = function(block) {
  let value = block.getFieldValue('value');
  let code = 'headlights(' + value + ');\n';
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "HeadlightManual",
    "message0": "Turn %1 LED %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "led number",
        "options": [
          ["1st", "0"],
          ["2nd", "1"],
          ["3rd", "2"],
          ["4th", "3"],
          ["5th", "4"],
          ["6th", "5"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "value",
        "options": [
          ["On", "1"],
          ["Off", "0"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['HeadlightManual'] = function(block) {
  let led = block.getFieldValue('led number');
  let value = block.getFieldValue('value');
  let code = 'switch_lights(' + led + ',' + value + ');\n';
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "BacklightManual",
    "message0": "Turn Backlight LED %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "value",
        "options": [
          ["On", "1"],
          ["Off", "0"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['BacklightManual'] = function(block) {
  let value = block.getFieldValue('value');
  let code = 'breaklights(' + value + ');\n';
  return code
};





Blockly.defineBlocksWithJsonArray([
  {
    "type": "IR VALUE",
    "output": null,
    "message0": "%1 IR Data",
    "args0": [
      {
      "type": "field_dropdown",
      "name": "IR List",
      "options": [
        ["Front", "0"],
        ["FrontTop", "1"],
        ["BACK", "2"],
        ["LEFT", "3"],
        ["RIGHT", "4"]
      ]
    }
    ],
    "colour": 355
  }
]);
Blockly.JavaScript['IR VALUE'] = function(block) {
  let value = block.getFieldValue('IR List');
//  let code = 'digitalRead(' + value + ')';
  let code = 'get_ir_data(' + value + ')';
  return code
};




Blockly.defineBlocksWithJsonArray([
  {
    "type": "While",
    "message0": "While %1 %2 %3",
    "args0": [

    {
      "type": "input_value",
      "name": "LHS"
    },
    {
      "type": "field_dropdown",
      "name": "condition",
      "options": [
        ["equal", "=="],
        ["not equal", "!="],
        ["less than", "<"],
        ["greater than", ">"]
      ]
    },
    {
      "type": "field_input",
      "name": "RHS",
      "text": "0",
      "spellcheck": false
    }
    ],

    "message1": "do %1",
    "args1": [
    {
      "type": "input_statement",
      "name": "steps"
    }
    ],

    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['While'] = function(block) {
  let value_code = Blockly.JavaScript.statementToCode(block, 'LHS')
  let rhs = block.getFieldValue('RHS');
  let op = block.getFieldValue('condition');
  let stmt_code = Blockly.JavaScript.statementToCode(block, 'steps')

  let code = 'while(' + value_code + op + rhs + ')\n{\n handle_ota();\n' + stmt_code + '}\n';
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "If",
    "message0": "If %1 %2 %3",
    "args0": [

    {
      "type": "input_value",
      "name": "LHS"
    },
    {
      "type": "field_dropdown",
      "name": "condition",
      "options": [
        ["equal", "=="],
        ["not equal", "!="],
        ["less than", "<"],
        ["greater than", ">"]
      ]
    },
    {
      "type": "field_input",
      "name": "RHS",
      "text": "0",
      "spellcheck": false
    }
    ],

    "message1": "then %1",
    "args1": [
    {
      "type": "input_statement",
      "name": "steps"
    }
    ],

    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['If'] = function(block) {
  let value_code = Blockly.JavaScript.statementToCode(block, 'LHS')
  let rhs = block.getFieldValue('RHS');
  let op = block.getFieldValue('condition');
  let stmt_code = Blockly.JavaScript.statementToCode(block, 'steps')

  let code = 'if(' + value_code + op + rhs + ')\n{\n' + stmt_code + '}\n';
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "Else If",
    "message0": "Else If %1 %2 %3",
    "args0": [
    {
      "type": "input_value",
      "name": "LHS"
    },
    {
      "type": "field_dropdown",
      "name": "condition",
      "options": [
        ["equal", "=="],
        ["not equal", "!="],
        ["less than", "<"],
        ["greater than", ">"]
      ]
    },
    {
      "type": "field_input",
      "name": "RHS",
      "text": "0",
      "spellcheck": false
    }
    ],

    "message1": "then %1",
    "args1": [
    {
      "type": "input_statement",
      "name": "steps"
    }
    ],

    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['Else If'] = function(block) {
  let value_code = Blockly.JavaScript.statementToCode(block, 'LHS')
  let rhs = block.getFieldValue('RHS');
  let op = block.getFieldValue('condition');
  let stmt_code = Blockly.JavaScript.statementToCode(block, 'steps')

  let code = 'else if(' + value_code + op + rhs + ')\n{\n' + stmt_code + '}\n';
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "Else",
    "message0": "Else %1",
    "args0": [
    {
      "type": "input_statement",
      "name": "steps"
    }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['Else'] = function(block) {
  let stmt_code = Blockly.JavaScript.statementToCode(block, 'steps')

  let code = 'else{\n' + stmt_code + '}\n';
  return code
};








Blockly.defineBlocksWithJsonArray([
  {
    "type": "root",
    "message0": "setup %1 loop %2",
    "args0": [

    {
      "type": "input_statement",
      "name": "setup"
    },
    {
      "type": "input_statement",
      "name": "loop"
    }
    ],
    "colour": 355
  }
]);

Blockly.JavaScript['root'] = function(block) {
  let setup_code = Blockly.JavaScript.statementToCode(block, 'setup')
  let loop_code = Blockly.JavaScript.statementToCode(block, 'loop')
  let default_setup_code = 'init_setup();\n ota_setup();\n'
  let imports = '#include "helper.h"\n'
  let code = imports + 'void setup(){\n' + default_setup_code + setup_code + '}\n' + 'void loop(){\n handle_ota();\n' + loop_code + '\n}\n';
  console.log(code)
  return code
};



Blockly.defineBlocksWithJsonArray([
  {
    "type": "delay_in_seconds",
    "message0": "pause for %1 seconds",
    "args0": [
      {
      "type": "field_number",
      "name": "delay_time",
      "value": 1,
      "min": 0.5,
      "max": 60,
      "precision": 0.5
    }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);
Blockly.JavaScript['delay_in_seconds'] = function(block) {
  let value = block.getFieldValue('delay_time');
  let code = 'delay_execution('+Math.floor(value*1000) + ');\n';
  return code
};
