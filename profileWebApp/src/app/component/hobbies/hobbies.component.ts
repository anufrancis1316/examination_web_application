import { Component } from '@angular/core';
import { GetdataserviceService } from '../../service/getdataservice.service';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
   _makeapicallSER:GetdataserviceService;
    
      constructor(_makecallREF:GetdataserviceService)
       {
        this._makeapicallSER = _makecallREF;
        this._makeapicallSER.getProfileData();
       }

}
