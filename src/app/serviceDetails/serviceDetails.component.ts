import { Component, OnInit } from '@angular/core';
import { DetailServiceService } from '../detailService.service';

@Component({
  selector: 'app-serviceDetails',
  templateUrl: './serviceDetails.component.html',
  styleUrls: ['./serviceDetails.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private service:DetailServiceService) { }
 getService:any=" ";
  ngOnInit() {
    this.service.getServiceDetails().subscribe(value=>{
      this.getService=value;
    })
  }

}
