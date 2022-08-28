import { Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})


export class SaveComponent implements OnInit {

  api_url = "https://8lfrlhnvcd.execute-api.us-east-1.amazonaws.com/test"

  constructor(private http: HttpClient) { }
  isDisabled = false;
  saveFile()
  {
    this.isDisabled = true;
    alert("File saved!")
    for (let i = 0; i < 30000; i++) {
      console.log ("Block statement execution no." + i);
    }
    this.isDisabled = false;
  }

  ngOnInit(): void {
  }



  save_file_cloud(){
    this.isDisabled = true;
    var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var text = Blockly.Xml.domToText(xml);
    if (text.length === 0) {
      window.alert("There is nothing to save");
      return;
    }
    const body = {
                file_data: text,
                user_id: '000001',
                file_name: 'my_first_code.txt'
              }


    this.http.post(this.api_url + "/save", body).subscribe(
      res => {
        console.log(res);
      }
    );
    this.isDisabled = false;
    alert("File saved!")
    return;
  }



}
