import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionServiceService {

  constructor() { }

  validateEndTimeThanStarTime(starTime: Date, endTime: Date): boolean{
    return starTime < endTime;
  }


}
