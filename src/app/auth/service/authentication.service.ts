import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLogged: boolean = false;

  constructor() { }

  authentication(username: string, password: string): boolean{

    // Compara las credenciales proporcionadas (nombre de usuario y contraseña) con un valor predefinido.
    // Si coinciden, establece la propiedad "isLogged" en `true` para indicar que el usuario está autenticado.
    if (username === 'admin' && password === '123456') {
      this.isLogged = true;
      return true;
    }

    // Si las credenciales no coinciden, devuelve `false` para indicar una autenticación fallida.
    return false;
  }

  isAuthenticated(): boolean {
    // Devuelve el valor de la propiedad "isLogged" para determinar si el usuario está autenticado.
    return this.isLogged
  }

}
