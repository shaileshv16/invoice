import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { AddCustomerPage } from '../add-customer/add-customer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToAddItem(params){
    if (!params) params = {};
    this.navCtrl.push(AddItemPage);
  }goToAddCustomer(params){
    if (!params) params = {};
    this.navCtrl.push(AddCustomerPage);
  }
}
