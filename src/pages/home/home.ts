import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string, component: string }>;

  constructor(public navCtrl: NavController, private storage: Storage, private geolocation: Geolocation) {
    // storage.ready().then(() => {
    //   alert(storage.driver);
    // });
    // this.storage.get('name').then((name) => {
    //   console.log('Me: Hey, ' + name + '! You have a very nice name.');
    //   console.log('You: Thanks! I got it for my birthday.');
    // });

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    })
      .catch((error) => {
        console.log('Error getting location', error);
      });

    // set a key/value
    storage.set('name', 'Max');

    // Or to get a key/value pair
    storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
    
  }

  addItem() {
    alert('TODO: addItem()');
    //this.pages.push({ title: this.name, component: ListPage })
  }

  
  

}
