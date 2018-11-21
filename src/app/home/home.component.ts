import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ConfirmationService} from 'primeng/components/common/confirmationservice';
import {Citas} from '../_models/citas';
import {Message} from 'primeng/components/common/message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
             providers: [ConfirmationService]
})
export class HomeComponent implements OnInit {
  cita: Citas = new Citas();
  msgs: Message[] = [];
  title = 'Solicitar Medico en Casa';
  constructor(
     private confirmationService: ConfirmationService,
     private location: Location,
     private router: Router) { }


  ngOnInit() { }

  onBack(fDirty: boolean) {
    if (fDirty) {
      this.confirmationService.confirm({
                                         message: ` ¿Esta seguro que desea salir sin guardar?`,
                                         header: 'Confirmación',
                                         icon: 'fa fa-question-circle',
                                         accept: () => {
                                           this.router.navigate( [ '/' ] );
                                         }
                                       });

    } else {
      this.router.navigate( [ '/' ] );
    }
  }

  onSubmit() {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Cita registrada', detail: 'Lo contactaremos para confirmar la fecha.'});
    //this.location.back();
  }
}
