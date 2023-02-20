import { Substatic3Component } from './../substatic3/substatic3.component';
import { Substatic2Component } from './../substatic2/substatic2.component';
import { SubstaticComponent } from './../substatic/substatic.component';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-staic',
  templateUrl: './staic.component.html',
  styleUrls: ['./staic.component.css'],
})
export class StaicComponent {
  tabData: any;
  accordionData: any;
  sectionData: any;
  inputData: any;
  fieldData: any;
  templateValue: any;
  affmData: any;
  substatic: any;
  newdata: any;
  scomponent1: any;
  scomponent2: any;
  scomponent3: any;

  @ViewChild(SubstaticComponent) SubstaticComponent: SubstaticComponent;
  @ViewChild(Substatic2Component) Substatic2Component: Substatic2Component;
  @ViewChild(Substatic3Component) Substatic3Component: Substatic3Component;

  constructor(
    private httpService: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // this.httpService.get('../assets/sample.json').subscribe((data) => {
    //   this.affmData = data;
    //   console.log(this.affmData);
    //   this.affmData.tabData.forEach((value: any, key: number) => {
    //     this.tabData = value;
    //     console.log(this.tabData);
    //   });
    //   this.templateValue = this.affmData.templateType;
    //   this.affmData.tabData[0].accordionData.forEach(
    //     (value: any, key: number) => {
    //       this.accordionData = value;
    //       console.log(this.accordionData);
    //     }
    //   );
    //   this.affmData.tabData[0].accordionData[0].sectionData.forEach(
    //     (value: any, key: number) => {
    //       this.sectionData = value;
    //       console.log(this.sectionData);
    //     }
    //   );
    //   this.affmData.tabData[0].accordionData[0].sectionData[0].CONTENT.forEach(
    //     (value: any, key: number) => {
    //       this.fieldData = value;
    //       console.log(this.fieldData);
    //       console.log(key);
    //     }
    //   );
    //   this.substatic = this.affmData.staticData;
    //   console.log(this.substatic);
    // });
  }

  saveStaticData() {
    let formData: {} = this.dataService.userForm.getRawValue();
  }
}
