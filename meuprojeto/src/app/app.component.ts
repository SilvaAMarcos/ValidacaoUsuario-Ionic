import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages: Array<{ title: string, url: string, icon: string }>;
  constructor(private menu: MenuController) {
  menu.enable(true);
  this.pages = [
  { title: 'Login', url: 'login', icon: 'enter' },
  { title: 'Produtos', url: 'home', icon: 'list' },
  { title: 'Exemplo Badge', url: 'badge', icon: 'star' },
  { title: 'Informar Dados', url: 'informe', icon: 'alert' }
  ];

  }
  
 }