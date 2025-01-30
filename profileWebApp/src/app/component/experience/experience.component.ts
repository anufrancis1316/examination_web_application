import { Component } from '@angular/core';
import { GetdataserviceService } from '../../service/getdataservice.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
 _makeapicallSER:GetdataserviceService;
  
    constructor(_makecallREF:GetdataserviceService)
     {
      this._makeapicallSER = _makecallREF;
      this._makeapicallSER.getProfileData();
     }
}
