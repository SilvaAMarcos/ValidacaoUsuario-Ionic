import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vindas',
  templateUrl: './vindas.page.html',
  styleUrls: ['./vindas.page.scss'],
})
export class VindasPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }


voltarprodutos (){
  this.navController.navigateRoot('/home')

}

}
