import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private authenticationService: AuthenticationService,
              public router: Router) {}

  ngOnInit() {
  }

  /**
 * Realiza el proceso de inicio de sesión de usuario.
 * Este método utiliza el servicio `authenticationService` para autenticar al usuario
 * utilizando las credenciales proporcionadas (nombre de usuario y contraseña).
 */
  login(){
    if(this.authenticationService.authentication(this.username, this.password)){
      this.router.navigateByUrl("/turnos");
    }else{
      console.log("Datos incorrectos");
    }
  }

}
