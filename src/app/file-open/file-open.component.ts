import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import { ListFilesService } from '../_services/list-files.service';
import { TokenStorageService } from '../_services/token-storage.service';
import * as Blockly from 'blockly';

@Component({
  selector: 'app-file-open',
  templateUrl: './file-open.component.html',
  styleUrls: ['./file-open.component.css']
})
export class FileOpenComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FileOpenComponent>,
    private listFiles: ListFilesService,
    private tokenStorage: TokenStorageService
  ) { }

  listOfFiles: string[] = ["Loading FILES..."];
  fileNotSelected = false;
  Openfile = false;

  ngOnInit(): void {

    this.listFiles.list_files(this.tokenStorage.getUser().username).subscribe(
      data => {
        console.log("here")
        console.log(data)
        this.listOfFiles = data.file_data;
      },
      err => {
        console.log("here1")
        console.log(err);
        this.listOfFiles = [];
      }
    );

  }
  close(){this.dialogRef.close();}

  open(file){
    if (file == null){
      this.fileNotSelected = true;
      return;
    }
    console.log(file);
    this.dialogRef.close();
    this.fileNotSelected = false;
  }


  open_file_cloud(file){
    if (file == null){
      this.fileNotSelected = true;
      return;
    }
    this.Openfile = true;
    this.listFiles.open_file(this.tokenStorage.getUser().username, file).subscribe(
      res => {
        console.log(res);
        var dom = Blockly.Xml.textToDom(res['file_data'])
        Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, Blockly.getMainWorkspace())
        console.log("success")
        var response = {
          file_name: file,
          content: res['file_data']
        }
        this.dialogRef.close(response);
        return;
      }
    );
//     this.dialogRef.close(file);
    return;
  }




}
