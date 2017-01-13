import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';
import { TorrentListPage } from '../torrent-list/torrent-list';
import { ProfilePage } from '../profile/profile';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = TorrentListPage;
  tab3Root: any = ProfilePage;
  mySelectedIndex: number;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}