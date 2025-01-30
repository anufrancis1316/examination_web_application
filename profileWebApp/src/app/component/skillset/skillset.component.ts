import { Component } from '@angular/core';
import { GetdataserviceService } from '../../service/getdataservice.service';

@Component({
  selector: 'app-skillset',
  imports: [],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.css'
})
export class SkillsetComponent {
 _makeapicallSER:GetdataserviceService;
  
    constructor(_makecallREF:GetdataserviceService)
     {
      this._makeapicallSER = _makecallREF;
      this._makeapicallSER.getProfileData();
     }
}
