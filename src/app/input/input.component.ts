import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from './../data.service';
import { StaicComponent } from './../staic/staic.component';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {

  MyForm: FormGroup;

  @ViewChild(StaicComponent) StaicComponent: StaicComponent;
  data: any;

  constructor(public dataService: DataService, private fb: FormBuilder) {
    this.dataService.createForm();
    this.createGroup();
  }

  createGroup(){
    this.MyForm = this.fb.group({
      dynamicinput: ''
    })
  }

  ngOnInit() {

  }

  saveData() {
    let formData: {} = this.dataService.userForm.getRawValue();
    this.data = this.dataService.saveStaticData(formData);
  }
}
