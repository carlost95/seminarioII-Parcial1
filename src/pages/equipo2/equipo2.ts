import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';
import { Jugador } from './../../interfaces/jugador.interface';
import { EQUIPO2 } from './../../../../MaterialParcial1/data/equipo2.data';

@IonicPage()
@Component({
	selector: 'page-equipo2',
	templateUrl: 'equipo2.html'
})
export class Equipo2Page {
	listaEquipo2: Jugador[] = [];
	infoJugador: any = InformacionPage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.listaEquipo2 = EQUIPO2.slice(0);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Equipo2Page');
	}

	informacionJugador(item: any) {
		this.navCtrl.push(InformacionPage, item);
	}
}
