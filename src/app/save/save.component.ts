import { Component, OnInit, Inject } from '@angular/core';
import * as Blockly from 'blockly';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})


export class SaveComponent implements OnInit {

  api_url = "https://8lfrlhnvcd.execute-api.us-east-1.amazonaws.com/test"

  form: FormGroup;
  filename:string;


  constructor(
  private http: HttpClient,
  private fb: FormBuilder,
  private dialogRef: MatDialogRef<SaveComponent>,
  @Inject(MAT_DIALOG_DATA) data,
  private tokenStorage: TokenStorageService
  ) {
    this.filename = data.filename;
  }


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
    this.form = this.fb.group({
      filename: [this.filename, []],
    });
  }

  close(){
    this.dialogRef.close(this.form.value);
  }

  save(){
    console.log(this.form.value.filename);
    this.dialogRef.close(this.form.value);
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
                user_id: this.tokenStorage.getUser().username,
                file_name: this.form.value.filename
              }


    this.http.post(this.api_url + "/save", body).subscribe(
      res => {
        console.log(res);
      }
    );
    this.isDisabled = false;
    this.dialogRef.close(this.form.value);
    alert("File saved!")
    return;
  }



}
