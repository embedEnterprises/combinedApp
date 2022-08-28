import { NgModule, Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import * as Blockly from 'blockly';
import 'src/blocks/blocks'

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.css']
})



export class BlocklyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const blocklyDiv = document.getElementById('blocklyDiv');

    Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: 'media/',
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple" style="display: none">
        <category name="Root">
          <block type="root"></block>
        </category>
        <category name="Movement">
          <block type="Drive Car"></block>
          <block type="Turn Car"></block>
          <block type="Run Car"></block>
        </category>
        <category name="Lights">
          <block type="Headlights"></block>
          <block type="HeadlightManual"></block>
          <block type="BacklightManual"></block>
        </category>
        <category name="Loops">
          <block type="While"></block>
        </category>
        <category name="Logic">
          <block type="If"></block>
          <block type="Else If"></block>
          <block type="Else"></block>
        </category>
        <category name="Input data">
          <block type="IR VALUE"></block>
        </category>
        <category name="Time">
          <block type="delay_in_seconds"></block>
        </category>
      </xml>
        `
    } as Blockly.BlocklyOptions);
  }
}







//         <block type="controls_ifelse"></block>
//         <block type="logic_compare"></block>
//         <block type="logic_operation"></block>
//         <block type="controls_repeat_ext">
//             <value name="TIMES">
//                 <shadow type="math_number">
//                     <field name="NUM">10</field>
//                 </shadow>
//             </value>
//         </block>
//
//         <block type="logic_operation"></block>
//         <block type="logic_negate"></block>
//         <block type="logic_boolean"></block>
//         <block type="logic_null" disabled="true"></block>
//         <block type="logic_ternary"></block>
//         <block type="text_charAt">
//             <value name="VALUE">
//                 <block type="variables_get">
//                     <field name="VAR">text</field>
//                 </block>
//             </value>
//         </block>
