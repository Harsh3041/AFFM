import { StaicComponent } from './../staic/staic.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { CodeEditorModule } from '@ngstack/code-editor';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent {
  showComponent: boolean = true;
  showSection: boolean;
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  tabData: any;
  accordionData: any;
  sectionData: any;
  inputData: any;
  fieldData: any;
  templateValue: any;

  title = 'app';
  componentRef: any;

  entry!: ViewContainerRef;
  @Input('someProp') someProp: any;
  showTabs: boolean;
  showFields: boolean;
  accordionInfo: any;
  sectionInfo: any;
  showAccordions: boolean;
  constructor(private httpService: HttpClient) {}
  affmData: any = [];
  Tabs: [
    {key: 'First', value: 'Content 1'},
    {key: 'Second', value: 'Content 2'},
    {key: 'Third', value: 'Content 3'}
  ]

  ngOnInit(): void {
    this.httpService.get('../assets/sample.json').subscribe((data) => {
      this.affmData = data;
      console.log(this.affmData);
      this.affmData.tabData.forEach((value: any, key: number) => {
        if (this.affmData.templateType == 'TABS') {
          this.tabData = value;
          this.showTabs = true;
          this.tabData.accordionData.forEach((value: any, key: number) => {
            if (value.templateType == 'ACCORDION') {
              this.accordionData = value;
              this.showAccordions = true;
              console.log(this.accordionData);
              this.accordionData.sectionData.forEach( (value: any, key: number) => {
                if (value.templateType == 'SECTION') {
                  this.sectionData = value;
                  this.showSection = true;
                }
                this.sectionData.Fields.forEach((value: any, key: number) => {
                  if (value.templateType == 'FIELDS') {
                    this.fieldData = value;
                    this.showFields = true;
                  }
                  }
                );
                }
              );
            }
          });
        }
      });

      // this.affmData.tabData[0].accordionData.forEach(
      //   (value: any, key: number) => {
      //     this.accordionData = value;
      //     console.log(this.accordionData);
      //   }
      // );

      // this.affmData.tabData[0].accordionData[0].sectionData.forEach(
      //   (value: any, key: number) => {
      //     this.sectionData = value;
      //     console.log(this.sectionData);
      //   }
      // );

      // this.affmData.tabData[0].accordionData[0].sectionData[0].CONTENT.forEach(
      //   (value: any, key: number) => {
      //     this.fieldData = value;
      //   }
      // );
    });
  }
}
