import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-informe',
  templateUrl: './informe.page.html',
  styleUrls: ['./informe.page.scss'],
})
export class InformePage implements OnInit {

  constructor(public alertController:AlertController) { 

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Informe seus Dados',
      inputs: [
        {
          name: 'nome1',
          type: 'text',
          placeholder: 'Insira seu Telefone'
        },
        {
          name: 'nome2',
          type: 'text',
          placeholder: 'Insira seu Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            this.nome1 = alertData.nome1;
            this.nome2 = alertData.nome2;


          }
        }
      ]
    });

    await alert.present();
  }

  nome1:string;
  nome2:string;

  ngOnInit() {
  }

}
