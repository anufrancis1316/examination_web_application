import { Component } from '@angular/core';
import { GetdataserviceService } from '../../service/getdataservice.service';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
   _makeapicallSER:GetdataserviceService;
    
      constructor(_makecallREF:GetdataserviceService)
       {
        this._makeapicallSER = _makecallREF;
        this._makeapicallSER.getProfileData();
       }

}
