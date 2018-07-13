import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddItemPage } from '../pages/add-item/add-item';
import { AddCustomerPage } from '../pages/add-customer/add-customer';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToAddItem(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddItemPage);
  }goToAddCustomer(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddCustomerPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }goToHelp(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HelpPage);
  }
}
