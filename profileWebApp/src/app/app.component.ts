import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { ContactmeserviceService } from './service/contactmeservice.service';
import { GetdataserviceService } from './service/getdataservice.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profileWebApp';

//   _makeapicallSER:GetdataserviceService;

//  constructor(_makecallREF:GetdataserviceService)
//   {
//    this._makeapicallSER = _makecallREF;
//    this._makeapicallSER.getProfileData();
  
}
