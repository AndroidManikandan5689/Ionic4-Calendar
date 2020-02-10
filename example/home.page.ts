import { Component } from '@angular/core';

import { 
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
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
