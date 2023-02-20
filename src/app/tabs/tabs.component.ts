import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  affmData: any;
  showTabs: boolean;
  tabData: any;
  accordionData: [];
  accordionInfo: any;
  showAccordions: boolean;
  sectionInfo: any;
  sectionData: any;
  showSection: boolean;
  fieldData: any;
  showFields: boolean;

  constructor(private httpService: HttpClient) {}

  ngOnInit() {
    this.httpService.get('../assets/sample.json').subscribe((data) => {
      this.affmData = data;
      console.log(this.affmData);
      this.affmData.tabData.forEach((value: any, key: number) => {
        if (this.affmData.templateType == 'TABS') {
          this.tabData = value;
          this.showTabs = true;
          console.log(this.tabData);
          // this.tabData.accordionData.forEach((value: any, key: number) => {
          //   this.accordionInfo = value;
          //   if (value.templateType == 'ACCORDION') {
          //     this.accordionData = value;
          //     this.showAccordions = true;
          //     console.log(this.accordionData);
          //     this.accordionInfo.sectionData.forEach( (value: any, key: number) => {
          //       this.sectionInfo = value;
          //       if (value.templateType == 'SECTION') {
          //         this.sectionData = value;
          //         this.showSection = true;
          //       }
          //       this.sectionInfo.Fields.forEach((value: any, key: number) => {
          //         if (value.templateType == 'FIELDS') {
          //           this.fieldData = value;
          //           this.showFields = true;
          //         }
          //         }
          //       );
          //       }
          //     );
          //   }
          // });
        }
      });
    });
  }
}
