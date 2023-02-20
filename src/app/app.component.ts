import { StaicComponent } from './staic/staic.component';
import { Component, ComponentFactoryResolver, ViewChild, ElementRef, ViewContainerRef, OnInit } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CodeModel } from '@ngstack/code-editor';
// import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dynamic-component';

  // showComponent:boolean = true;
  // @ViewChild('container', { read: ViewContainerRef })
  // container!: ViewContainerRef;

  // @ViewChild(StaicComponent) StaicComponent: StaicComponent;
  constructor() { }

  ngOnInit(): void {

    // console.log(StaicComponent);
    // console.log(this.StaicComponent.affmData);


  }




}
