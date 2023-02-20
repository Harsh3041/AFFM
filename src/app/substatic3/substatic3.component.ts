import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-substatic3',
  templateUrl: './substatic3.component.html',
  styleUrls: ['./substatic3.component.css'],
})
export class Substatic3Component {
  userForm3: FormGroup;
  substaticControl3: any;

  constructor(private fb: FormBuilder, public dataService: DataService) {
    this.createForm()
    // this.dataService.createForm();
  }

  createForm(){
    this.dataService.createForm();
  }

  submit(data: any) {
    this.userForm3.getRawValue();
    // console.log(this.userForm3.getRawValue());
    data = this.userForm3.get('substaticControl3')?.value;
    console.log(data);

    // data = this.dataService.userForm.get('substaticControl3')?.value;
    return data;
  }
}
