import { Component } from '@angular/core';
import { GetdataserviceService } from '../../service/getdataservice.service';

@Component({
  selector: 'app-traininglist',
  imports: [],
  templateUrl: './traininglist.component.html',
  styleUrl: './traininglist.component.css'
})
export class TraininglistComponent {
 _makeapicallSER:GetdataserviceService;
  
    constructor(_makecallREF:GetdataserviceService)
     {
      this._makeapicallSER = _makecallREF;
      this._makeapicallSER.getProfileData();
     }
}
