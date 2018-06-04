import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{name: string, price: string}>;
  // items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    this.items = [
      {
        name: 'patatas',
        price: '10'
      },
      {
        name: 'manzanas',
        price: '20'
      },
      {
        name: 'pollo',
        price: '9'
      }
    ];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }

  updateCheck(item){
    console.log(item);    
    // this.storage.set('name', 'Max');    
  }

  addItem(newItemName, newItemPrice){    
    this.items.push({ name: newItemName, price: newItemPrice })
  }

  deleteItem(item) {
    console.log(item);
  }
}
