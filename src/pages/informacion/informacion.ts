import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-informacion',
	templateUrl: 'informacion.html'
})
export class InformacionPage {
	jugador: any = {};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.jugador = this.navParams.data;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InformacionPage');
	}
	volverAtras() {
		this.navCtrl.pop();
	}
	regresar() {
		this.navCtrl.pop();
	}
}
