import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPersistenceService {

  private data: any[] = [];

constructor() { }

  getData(): any[]{
    const dataString = localStorage.getItem('dataPersistence');
    if(dataString){
      this.data = JSON.parse(dataString);
    }

    return this.data
  }

  setData(data: any[]): void {
    this.data = data;
    localStorage.setItem('dataPersistence', JSON.stringify(data));
  }

}
