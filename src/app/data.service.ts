import { EventEmitter, Injectable, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  sharedData: string;
  userForm: FormGroup;
  substaticControl1: any;
  uniqueValue: any;
  scomponent1: any;
  scomponent2: any;
  scomponent3: any;
  newitem: any;

  @Output() public found = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      dynamicinput: '',
      substaticControl1: '',
      substaticControl2: '',
      substaticControl3: '',
    });
  }

  submit(formdata: any) {
    // this.myForm.get('control').value
    let formPayload = formdata;
    console.log(formPayload);
    let dynamicPayload = Object.assign({}, formPayload);
    console.log(dynamicPayload);
  }

  saveStaticData(data: any) {
    console.log(data);
    return data;
  }

}
