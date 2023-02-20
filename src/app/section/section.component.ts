import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaicComponent } from '../staic/staic.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  tabData: any;
  accordionData: any;
  sectionData: any;
  inputData: any;
  fieldData: any;
  templateValue: any;
  affmData: any;
  index: any;
  accordionInfo: any;
  showSection: boolean;
  sectionInfo: any;

  constructor(private httpService: HttpClient) {}
  ngOnInit() {
    //   this.httpService.get('../assets/sample.json').subscribe(
    //     data => {
    //       this.affmData = data;
    //        console.log(this.affmData);
    //        this.affmData.tabData.forEach((value: any,key: number) => {
    //           this.tabData = value;
    //           console.log(this.tabData);
    //        });
    //        this.templateValue =  this.affmData.templateType;
    //       //  this.inputData = this.fieldData.type;
    //        this.affmData.tabData[0].accordionData.forEach((value: any , key: number) => {
    //         this.accordionData = value;
    //         console.log(this.accordionData)
    //        });
    //        this.affmData.tabData[0].accordionData[0].sectionData.forEach((value: any , key: number) => {
    //         this.sectionData = value;
    //         console.log(this.sectionData)
    //        });
    //        this.affmData.tabData[0].accordionData[0].sectionData[0].CONTENT.forEach((value: any , key: number) => {
    //         this.fieldData = value;
    //         console.log(this.fieldData)
    //         console.log(key)
    //        });
    //     },
    // )

    this.httpService.get('../assets/sample.json').subscribe((data) => {
      this.affmData = data;
      this.affmData.tabData.forEach((value: any, key: number) => {
        if (value.templateType == 'TABS') {
          this.tabData = value;
          this.tabData.accordionData.forEach((value: any, key: number) => {
            if (value.templateType == 'ACCORDION') {
              this.accordionData = value;
              console.log(this.accordionData);
              this.accordionData.sectionData.forEach( (value: any, key: number) => {
                if (value.templateType == 'SECTION') {
                  this.sectionData = value;
                }
                this.sectionData.Fields.forEach((value: any, key: number) => {
                  if (value.templateType == 'FIELDS') {
                    this.fieldData = value;
                  }
                  }
                );
                }
              );
            }
          });
        }
      });
    });
  }
}
