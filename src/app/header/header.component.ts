import { NgModule, Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as Blockly from 'blockly';
import BlocklyJS from 'blockly/javascript';
import { Observable } from 'rxjs';
import 'src/blocks/blocks'

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  server_address = "54.242.84.166"
  api_url = "https://8lfrlhnvcd.execute-api.us-east-1.amazonaws.com/test"

  loading = false;
  loading_gif = false;
  message = "hello"

  closeResult = '';


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult)
      console.log(content)

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  close(data) {
    console.log(data);
//     var activeModal = new NgbActiveModal();
//     activeModal.close(content);
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

//   private activeModal: NgbActiveModal
  constructor(private http: HttpClient, private modalService: NgbModal) { }


  get_default_code(): Observable<any> {
    this.message = "Loading Code..."
    this.loading = true;
    this.loading_gif = true;
    return this.http.get("http://"+this.server_address+":8080/test", {responseType: 'blob'});
  }


  get_compiled_code(data: any): Observable<any> {
    this.message = "Generating Code..."
    this.loading = true;
    this.loading_gif = true;
    return this.http.post("http://"+this.server_address+":8080/compile", data, {responseType: 'blob'});
  }



  save_file_cloud(){
    var name ="blockly.txt";
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
    return;
  }


  open_file_cloud(){
    const body = {
                user_id: '000001',
                file_name: 'my_first_code.txt'
              }

    this.http.post(this.api_url + "/load", body).subscribe(
      res => {
        console.log(res);
        var dom = Blockly.Xml.textToDom(res['file_data'])
        Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, Blockly.getMainWorkspace())
        console.log("success")
        return
      }
    );

    return;
  }




  upload_code_ota(data: any): Observable<any> {
    this.message = "Uploading Code..."
    this.loading = true;
    this.loading_gif = true;
    const headers= new HttpHeaders()
    headers.set('Content-Type', 'multipart/form-data');
//     headers.set('Referer', 'http://192.168.140.58/serverIndex');
    headers.set('Accept', '*/*');
    headers.set('X-Requested-With', 'XMLHttpRequest');

    return this.http.post("http://esp32.local/update", data, {responseType: 'text', 'headers': headers});
  }


  compile_and_upload(){
    var generatedCode = BlocklyJS.workspaceToCode(Blockly.getMainWorkspace());
    const iformData = new FormData();
    iformData.append('raw_code', generatedCode);
    this.get_compiled_code(iformData).subscribe(
      res => {
        this.loading = false;
        console.log(res);
        const formData = new FormData();
        formData.append('update', new Blob([res], {type:"application/octet-stream"}));
        this.upload_code_ota(formData).subscribe(
          res => {
            console.log(res);
            this.loading_gif = false;
            this.loading = false;
            alert("Code uploaded successfully")
          }
        );
      }
    );
  }


  upload_default(){
    this.get_default_code().subscribe(
      res => {
        console.log(res);
        const formData = new FormData();
        formData.append('update', new Blob([res], {type:"application/octet-stream"}));
        this.upload_code_ota(formData).subscribe(
          res => {
            console.log(res);
            this.loading_gif = false;
            this.loading = false;
            alert("Code uploaded successfully")
          }
        );
      }
    );
  }



  save_local(){
    var name ="blockly.txt";
    var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var text = Blockly.Xml.domToText(xml);
    if (text.length === 0) {
      window.alert("There is nothing to save");
      return;
    }
    const blob = new Blob([text], { type: 'text/plain' });
    saveAs(blob, "data.txt");

    console.log("data");
    console.log(text);
    return;
  }

  load_local(){

//     fetch('D:\Embed\Blockly\blockly-samples-master\examples\blockly-angular\src\assets\data.txt').then(response => response.text()).then(
//       text =>{
//         var dom = Blockly.Xml.textToDom(text)
//         Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, Blockly.getMainWorkspace())
//       }
//     )

    var dom = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="root" id="cr.S8sY?pgV2xm5r7Y|)" x="167" y="57"><statement name="setup"><block type="Run Car" id="+`.Z#H;.+ocx.~Rf4ZK+"><field name="direction">0</field><field name="Car Speed">50</field><next><block type="Run Car" id="m*AzeL@X=36p%xr|^yT#"><field name="direction">0</field><field name="Car Speed">50</field></block></next></block></statement><statement name="loop"><block type="While" id="w4*(Qegy^MvEhsk]K*{R"><field name="condition">==</field><field name="RHS">0</field><value name="LHS"><block type="IR VALUE" id="!(8;JumSIcM38f,U;Z_|"><field name="IR List">1</field></block></value><statement name="steps"><block type="Headlights" id="LOEBRDC5ob1!TvEhWSs;"><field name="value">1</field><next><block type="Headlights" id="P@VvnI@mEDLg6hWPvhf~"><field name="value">1</field></block></next></block></statement><next><block type="If" id="_}578LTj5(p/I:P?wHLW"><field name="condition">==</field><field name="RHS">0</field><value name="LHS"><block type="IR VALUE" id="2CY9;:Ne`QDT[ve,0Gtv"><field name="IR List">1</field></block></value><statement name="steps"><block type="Run Car" id="$~N1$+=d0h*cQOW,8AMP"><field name="direction">0</field><field name="Car Speed">100</field></block></statement><next><block type="If" id="IrNmL+fzdzU5vow4=cMe"><field name="condition">==</field><field name="RHS">0</field><value name="LHS"><block type="IR VALUE" id="5Zw7Cwjbey1;:~B]Xnuz"><field name="IR List">1</field></block></value><statement name="steps"><block type="Run Car" id="fWR@.nT1c7%k:3H^ORFb"><field name="direction">0</field><field name="Car Speed">100</field></block></statement><next><block type="Run Car" id="t]qqOw-H|FuZ9+xcWZIs"><field name="direction">0</field><field name="Car Speed">100</field><next><block type="delay_in_seconds" id="~|uq$YCAYJtR4AHTWYE_"><field name="delay_time">1</field><next><block type="Run Car" id="Z^MmLm{V30J6ut`yYn2i"><field name="direction">0</field><field name="Car Speed">0</field><next><block type="delay_in_seconds" id="*Gf^w6lr^ht]9]19(kz6"><field name="delay_time">1</field></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>')
    Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, Blockly.getMainWorkspace())
    console.log("success")
    return
  }


  ngOnInit(): void {
  }

}

// oR=%AHj?6IaN;I69Rg;q9i5ZlXQKkx.F
