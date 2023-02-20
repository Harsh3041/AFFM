import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-substatic2',
  templateUrl: './substatic2.component.html',
  styleUrls: ['./substatic2.component.css'],
})
export class Substatic2Component {
  userForm2: FormGroup;
  substaticControl2: any;

  constructor(private fb: FormBuilder, public dataService: DataService) {
    //this.dataService.createForm();
    this.createForm()
  }

  createForm(){
   this.dataService.createForm();
  }

  submit(data: any) {
    this.userForm2.getRawValue();
    // console.log(this.userForm2.getRawValue());
    data = this.userForm2.get('substaticControl2')?.value
    console.log(data);

    // data = this.dataService.userForm.get('substaticControl2')?.value;
    console.log(data);
    return data;
  }
}
