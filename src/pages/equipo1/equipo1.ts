import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jugador } from '../../interfaces/jugador.interface';
import { EQUIPO1 } from './../../data/equipo1.data';
import { InformacionPage } from './../informacion/informacion';

@IonicPage()
@Component({
	selector: 'page-equipo1',
	templateUrl: 'equipo1.html'
})
export class Equipo1Page {
	listaEquipo1: Jugador[] = [];
	infoJugador: any = InformacionPage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.listaEquipo1 = EQUIPO1.slice(0);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Equipo1Page');
	}
	informacionJugador(item: any) {
		this.navCtrl.push(InformacionPage, item);
	}
}
