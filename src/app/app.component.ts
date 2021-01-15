import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-jdev-angular';

  usuario = {login: '', senha: ''};

  public login(){
    console.log("Teste login : " + this.usuario.login + " Senha " + this.usuario.senha)
  }
}
