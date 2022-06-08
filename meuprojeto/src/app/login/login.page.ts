import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users: any;
  login: string = '';
  senha: string = '';
  mensagem: string = '';
  constructor(dadosServ: DadosService,public alertController: AlertController,public navController: NavController) {
  this.users = dadosServ.users;
  }
  
  ngOnInit() {
  }
  entrar(campoLogin, campoSenha) {
  this.login = campoLogin;
  this.senha = campoSenha;
  if (this.login == this.users[0].login && this.senha == this.users[0].senha ) {
  this.alerts2('Acesso Confirmado!')
  this.navController.navigateRoot('/vindas');}
  else{
    this.alerts('Acesso Negado, Verificar senha!')};
  }

  
  async alerts2(message2:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-class',
      header: 'Senha Correta!',
      message: message2,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);


  }
  async alerts(message1:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-class',
      header: 'Senha Incorreta!',
      message: message1,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);


  }


 }