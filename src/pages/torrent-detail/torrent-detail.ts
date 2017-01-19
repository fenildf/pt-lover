import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { TorrentData } from '../../providers/torrent-data';
import { WebHttp } from '../../providers/web-http';
import { Torrent, TorrentList } from '../../models/torrent';
import { FileOpener } from 'ionic-native';


declare var window: any;
declare var LocalFileSystem: any;
/*
  Generated class for the TorrentDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-torrent-detail',
	templateUrl: 'torrent-detail.html'
})
export class TorrentDetailPage {
	torrent: Torrent;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public torrentData: TorrentData,
		public webHttp: WebHttp,
		public toastCtrl: ToastController
	) {

		this.torrent = this.navParams.data;


	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TorrentDetailPage');
	}


	dismiss(data?: any) {
		// using the injected ViewController this page
		// can "dismiss" itself and pass back data
		this.viewCtrl.dismiss(data);
	}

	download() {

		// window.resolveLocalFileSystemURL('file:///storage/emulated/0/Download',function (fileSystem) {
		// 					alert(fileSystem.name+' '+fileSystem.root.fullPath);
		// 					let dataDir = fileSystem.root.getDirectory("Download", { create: false }, function(directory){
		// 						alert(directory.fullPath);
		// 					},function(error){
		// 						alert('failed to get Download folder '+JSON.stringify(error));
		// 					});
		// 					let lockFile = dataDir.getFile("lockfile.txt", { create: true, exclusive: true });
		// 				}, function () {
		// 					alert('failed to get file system');
		// 				}) ;

		// window.requestFileSystem(
		// 				LocalFileSystem.PERSISTENT,
		// 				0,
		// 				function (fileSystem) {
		// 					// alert(fileSystem.name+' '+fileSystem.root.fullPath);
		// 					let dataDir = fileSystem.root.getDirectory("/Download", { create: false }, function(directory){
		// 						alert(directory.fullPath);
		// 					},function(error){
		// 						alert('failed to get Download folder '+JSON.stringify(error));
		// 					});
		// 					let lockFile = dataDir.getFile("lockfile.txt", { create: true, exclusive: true });
		// 				}, function () {

		// 				});


		let toast = this.toastCtrl.create({
			message: '开始下载...',
			duration: 2000
		});


		toast.present();

		this.webHttp.download(this.torrent.url, this.torrent.getFileName()).then((entry) => {
			// alert('download complete: ' + entry.toURL());
			let duration: number = 10000;
			let openToast = this.toastCtrl.create({
				message: '文件已下载 ' + entry.fullPath,
				showCloseButton: true,
				closeButtonText: '打开'
			});
			let timeoutHandler = setTimeout(() => {
				openToast.dismiss({ autoClose: true });
			}, duration);
			openToast.onDidDismiss(data => {
				if (data && data.autoClose) {
					//do nothing
				} else {

					//user click
					FileOpener.open(entry.toURL(), 'application/x-bittorrent').then((event1) => {
						// alert(entry.toURL()+' event1 ' + event1);
					}, (event2) => {
						// alert(entry.toURL()+'event2' + JSON.stringify(event2));
					});
				}
			});
			openToast.present();

		}, (error) => {
			// handle error

			alert('error:' + JSON.stringify(error));
		});
	}
}
