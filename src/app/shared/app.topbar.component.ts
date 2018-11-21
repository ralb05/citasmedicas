import {Component} from '@angular/core';
import {AppMainComponent} from './app-main/app-main.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar clearfix">
              <div class="topbar-right">
                <h2>Salud Al Alcance De Su Mano</h2>
              </div>
            </div>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppMainComponent) {}

}
