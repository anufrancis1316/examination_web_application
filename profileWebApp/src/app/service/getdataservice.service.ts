import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataserviceService {

  private apiUrl = 'http://localhost:8080/api/profile/1';  // URL to the backend API

  _http:HttpClient;
  getDetails:any;

  constructor(_httpREF:HttpClient) { 
    this._http = _httpREF;
  }

  getProfileData(){
    this._http.get('http://localhost:8080/api/profile/1')
    .subscribe(result =>{
      this.getDetails = result;
      console.log( this.getDetails );
     // alert('Got the data');
    });
  }
}
