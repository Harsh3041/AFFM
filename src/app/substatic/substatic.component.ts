import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-substatic',
  templateUrl: './substatic.component.html',
  styleUrls: ['./substatic.component.css'],
})
export class SubstaticComponent {
  userForm: FormGroup;
  substaticControl1: any;


  constructor(private fb: FormBuilder, public dataService: DataService) {
    this.createForm();
    // this.dataService.createForm();
  }

  createForm() {
    this.dataService.createForm();
  }

  onFocusOutEvent(event: any) {
    console.log(event);
    console.log(event.srcElement.value);
    let myprop = event.srcElement.value

  }

  submit(data: any) {
    // this.myForm.get('control').value
    this.userForm.getRawValue();
    // console.log(this.userForm.getRawValue());
    data = this.userForm.get('substaticControl1')?.value;
    console.log(data);
    // data = this.dataService.userForm.get('substaticControl1')?.value;
    return data;
    // this.newformValue = this.userForm.get('substaticControl1')?.value;
    // console.log(this.formValue);
  }
}
