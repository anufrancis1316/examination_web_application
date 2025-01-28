import { Component } from '@angular/core';
import { GetdataserviceService } from '../../service/getdataservice.service';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  _makeapicallSER:GetdataserviceService;
  
    constructor(_makecallREF:GetdataserviceService)
     {
      this._makeapicallSER = _makecallREF;
      this._makeapicallSER.getProfileData();
     }
}
