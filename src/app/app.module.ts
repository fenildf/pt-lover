import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Device } from 'ionic-native';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { TorrentListPage } from '../pages/torrent-list/torrent-list';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { PeerListPopOverPage } from '../pages/peer-list-pop-over/peer-list-pop-over';
import { TorrentFilterPage } from '../pages/torrent-filter/torrent-filter';
import { TorrentDetailPage } from '../pages/torrent-detail/torrent-detail';
import { FaqPage } from '../pages/faq/faq';
import { AboutPage } from '../pages/about/about';
import { FaqDetailPage } from '../pages/faq-detail/faq-detail';

import { TorrentData } from '../providers/torrent-data';
import { UserData } from '../providers/user-data';
import { WebHttp } from '../providers/web-http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TorrentListPage,
    ProfilePage,
    LoginPage,
    WelcomePage,
    PeerListPopOverPage,
    TorrentFilterPage,
    TorrentDetailPage,
    FaqPage,
    AboutPage,
    FaqDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TorrentListPage,
    ProfilePage,
    LoginPage,
    WelcomePage,
    PeerListPopOverPage,
    TorrentFilterPage,
    TorrentDetailPage,
    FaqPage,
    AboutPage,
    FaqDetailPage
  ],
  providers: [
    Storage, 
    Device,
    WebHttp, 
    TorrentData,
    UserData, 
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
