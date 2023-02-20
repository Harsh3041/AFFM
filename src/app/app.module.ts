import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { CodeEditorModule } from '@ngstack/code-editor';
import { StaicComponent } from './staic/staic.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SectionComponent } from './section/section.component';
import { InputComponent } from './input/input.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { SubstaticComponent } from './substatic/substatic.component';
import { Substatic2Component } from './substatic2/substatic2.component';
import { Substatic3Component } from './substatic3/substatic3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    StaicComponent,
    TabsComponent,
    AccordionComponent,
    SectionComponent,
    InputComponent,
    SubstaticComponent,
    Substatic2Component,
    Substatic3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CodeEditorModule.forRoot({
      typingsWorkerUrl: 'assets/workers/typings-worker.js'
    }),
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent]
})
export class AppModule { }
