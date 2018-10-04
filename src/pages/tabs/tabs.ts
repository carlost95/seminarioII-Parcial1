import { Component } from '@angular/core';

import { Equipo1Page } from '../equipo1/equipo1';
import { Equipo2Page } from '../equipo2/equipo2';
import { PrincipalPage } from '../principal/principal';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root = Equipo1Page;
	tab2Root = PrincipalPage;
	tab3Root = Equipo2Page;

	constructor() {}
}
