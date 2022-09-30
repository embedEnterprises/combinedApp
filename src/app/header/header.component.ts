import { NgModule, Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../_services/token-storage.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { SaveComponent } from '../save/save.component';
import { FileOpenComponent } from '../file-open/file-open.component';

import * as Blockly from 'blockly';
import BlocklyJS from 'blockly/javascript';
import { Observable } from 'rxjs';
import 'src/blocks/blocks'

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
//   directives:[SaveComponent]
})

export class HeaderComponent implements OnInit {

  server_address = "54.242.84.166"
  api_url = "https://8lfrlhnvcd.execute-api.us-east-1.amazonaws.com/test"

  loading_gif = false;
  acknowledgeButton = false;

  message = "Loading";
  isLoggedIn = false;
  closeResult = '';
  OpenFileName = '';
  file_opened = false;
  file_opened_content: '';
  message_dialog;

  file_name: string;
  name: string;


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }


  openSaveModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    const dialogRef = this.dialog.open(SaveComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );
  }


  openFileOpenModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';

    const dialogRef = this.dialog.open(FileOpenComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => {
          console.log("Dialog output:", data)
          this.OpenFileName = data.file_name
          this.file_opened = true;
          this.file_opened_content = data.content;
        }
    );
  }


  new_file(){
    var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var text = Blockly.Xml.domToText(xml);
    if (text === this.file_opened_content){
      console.log("Same")
    }
    else{
      if(confirm("Do you want to save changes that you made to the file?")) {
        this.save();
        this.file_opened = false;
        this.OpenFileName = '';
        Blockly.mainWorkspace.clear();
      }

    }
  }


  save(){
    var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var text = Blockly.Xml.domToText(xml);
    if (text === this.file_opened_content){
      console.log("Same")
    }
    else{
      console.log(text)
      console.log(this.file_opened_content)
      console.log("Diff")
    }
  }


  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private tokenStorageService: TokenStorageService,
    private dialog: MatDialog
    ) { }


  get_default_code(): Observable<any> {
    this.message = "Loading Code..."
    this.loading_gif = true;
    return this.http.get("http://"+this.server_address+":8080/test", {responseType: 'blob'});
  }


  get_compiled_code(data: any): Observable<any> {
    this.message = "Generating Code..."
    this.loading_gif = true;
    return this.http.post("http://"+this.server_address+":8080/compile", data, {responseType: 'blob'});
  }


  upload_code_ota(data: any): Observable<any> {
    this.message = "Uploading Code..."
    this.loading_gif = true;
    const headers= new HttpHeaders()
    headers.set('Content-Type', 'multipart/form-data');
    headers.set('Accept', '*/*');
    headers.set('X-Requested-With', 'XMLHttpRequest');

    return this.http.post("http://esp32.local/update", data, {responseType: 'text', 'headers': headers});
  }


  compile_and_upload(template){
    var generatedCode = BlocklyJS.workspaceToCode(Blockly.getMainWorkspace());
    const iformData = new FormData();
    iformData.append('raw_code', generatedCode);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    this.message_dialog = this.dialog.open(template, dialogConfig);

    this.get_compiled_code(iformData).subscribe(
      res => {
        console.log(res);
        const formData = new FormData();
        formData.append('update', new Blob([res], {type:"application/octet-stream"}));
        this.upload_code_ota(formData).subscribe(
          res => {
            console.log(res);
            this.loading_gif = false;
            this.message = "Code uploaded successfully!";
            this.acknowledgeButton = true;
          },
          err => {
            console.log(err);
            this.loading_gif = false;
            this.acknowledgeButton = true;
            this.message = "Error Occurred, Please try again";
          }
        );
      },
      err => {
        console.log(err);
        this.loading_gif = false;
        this.acknowledgeButton = true;
        this.message = "Error Occurred, Please try again";
      }
    );
  }


  upload_default(template){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    this.message_dialog = this.dialog.open(template, dialogConfig);

    this.get_default_code().subscribe(
      res => {
        const formData = new FormData();
        formData.append('update', new Blob([res], {type:"application/octet-stream"}));
        this.upload_code_ota(formData).subscribe(
          res => {
            this.loading_gif = false;
            this.message = "Code uploaded successfully!";
            this.acknowledgeButton = true;
          },
          err => {
            console.log(err);
            this.loading_gif = false;
            this.acknowledgeButton = true;
            this.message = "Error Occurred, Please try again";
          }
        );
      },
      err => {
        console.log(err);
        this.loading_gif = false;
        this.acknowledgeButton = true;
        this.message = "Error Occurred, Please try again";
      }
    );
  }


  closeErrorMessageModal(){
    this.message_dialog.close();
    this.acknowledgeButton = false;
  }

  sign_out(){
    if(confirm("Are you sure to Log Out")) {
      this.tokenStorageService.signOut();
      this.isLoggedIn = false;
    }

  }

}

// oR=%AHj?6IaN;I69Rg;q9i5ZlXQKkx.F
