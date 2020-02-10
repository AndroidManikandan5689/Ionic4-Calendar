# IonicMicrCameraPreviewPlugin

---
title: Ionic Camera Preview for Micr Outline 
description: Cordova plugin for scan cheque micr code using camera preview with custom overlay view
---

# cordova-plugin-raqmiyat-micrcamerapreview

## Installation
	npm i moment
	
	copy and paste this library into your code

## Supported Platforms
- Android, Ios

## Demo

![Image description](screenshots/screenshot.png)

### How to Use
```
//app.module.ts and page module
import { CalendarModule } from 'node_modules/ionic4calenderlib';
@NgModule({
...
imports: [
    CalendarModule
  ],
  ...})
  
//  home.page.ts
  import { Component } from '@angular/core';

import { 
  CalendarModal,
  CalendarModalOptions,
  CalendarResult
 } from 'node_modules/ionic4calenderlib';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  selected_date = "";

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.openCalendar();
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      monthFormat: 'MMM YYYY',
      title: 'Select Date'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    this.selected_date = JSON.stringify(date);
    console.log(date);
  }

}


```
