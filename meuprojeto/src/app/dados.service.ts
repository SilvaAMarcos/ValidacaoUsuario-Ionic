import { Injectable } from '@angular/core';
@Injectable({
 providedIn: 'root'
})
export class DadosService {
 users: Array<{ id: number, nome: string, login: string, senha: string, email: 
string, img: string, icon: string }>;
 constructor() { 
 this.users = [
 { id: 1002, nome: 'Admin', login: 'admin', senha: '123', 
email: 'admin@teste.com', img: '../assets/mhp.png', icon: 'start' }
 ] 
 }
}