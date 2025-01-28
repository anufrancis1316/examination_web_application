import { Component, OnInit } from '@angular/core';
import { GetdataserviceService } from '../../service/getdataservice.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports:[NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  _makeapicallSER:GetdataserviceService;

  constructor(_makecallREF:GetdataserviceService)
   {
    this._makeapicallSER = _makecallREF;
    this._makeapicallSER.getProfileData();
   }
}
