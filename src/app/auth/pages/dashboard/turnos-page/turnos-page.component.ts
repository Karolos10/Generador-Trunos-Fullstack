import { Component, OnInit } from '@angular/core';
import { ValidacionServiceService } from '../../../service/validacionService.service';
import { AuthenticationService } from '../../../service/authentication.service';
import { DataPersistenceService } from '../../../service/dataPersistence.service';
import { HttpClientService } from '../../../service/httpClient.service';

/**Clase principal de la aplicacion */
@Component({
  selector: 'app-turnos-page',
  templateUrl: './turnos-page.component.html',
  styleUrls: ['./turnos-page.component.css']
})
export class TurnosPageComponent implements OnInit {

  files: any;

  startTime!: Date;
  endTime!: Date;
  validationError = false;

  opciones1: string[] = ['Car center', 'Centro Diseño'];
  opciones2: string[] = ['Lavado General', 'Diseño Cocina'];
  seleccionado1: string = '';
  seleccionado2: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  tablaDatos: any[] = [];

  constructor(private validacionServiceService: ValidacionServiceService,
              private authenticationService: AuthenticationService,
              private dataPersistenceService:DataPersistenceService,
              private httpClientService: HttpClientService) { }

  ngOnInit(): void {

    this.tablaDatos = this.dataPersistenceService.getData();
  }

  /**
 * Valida si la hora de inicio es posterior a la hora de finalización.
 */
  validateTimes(){
    this.validationError = !this.validacionServiceService
    // Llama al servicio `validacionServiceService` para realizar la validación de tiempo.
        .validateEndTimeThanStarTime(this.startTime, this.endTime);
  }

  /**
 * Comprueba si el usuario está autenticado en la aplicación.
 */
  isUserLogged(): boolean {
    // Utiliza el servicio `authenticationService` para verificar el estado de autenticación del usuario.
    return this.authenticationService.isAuthenticated();
  }

  getDataBackend(){
    this.httpClientService.getDatas().subscribe(
      (resp) => {
        this.files = resp;
      },
      (error) => {
        console.log("Error al obtener datos del backend");
      }
    );
  }

  postDataBackend(){
    const dataToSend = {
      key: 'value'
    };
    this.httpClientService.postData(dataToSend).subscribe((resp) => {
    },
    (error)=> {
      console.error('Error al enviar datos al backend');
    })
  }

  /**
 * Agrega nuevos datos de turnos a la matriz de datos de turnos.
 */
  agregarDatos(){
    //Se crea un objeto `newDate` que contiene los datos de turno recopilados del formulario.
    const newDate = {
      opcion1: this.seleccionado1,
      opcion2: this.seleccionado2,
      horaIni: this.horaInicio,
      horaEnd: this.horaFin,
      fechaInit: this.fechaInicio,
      fechaEnd: this.fechaFin,
    };
    // Agrega el nuevo dato de turno a la matriz `tablaDatos`.
    this.tablaDatos.push(newDate);
    // Utiliza el servicio `dataPersistenceService` para almacenar la matriz actualizada `tablaDatos`.
    this.dataPersistenceService.setData(this.tablaDatos);

    // Restablece las propiedades relacionadas con la entrada de datos para permitir la entrada de nuevos datos.
    this.seleccionado1 = '';
    this.seleccionado2 = '';
    this.horaInicio = '';
    this.fechaFin = '';
    this.fechaInicio = '';
    this.horaFin = '';
  }

}
