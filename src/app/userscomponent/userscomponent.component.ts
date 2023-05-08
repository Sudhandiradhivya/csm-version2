import { Component, OnInit } from '@angular/core';
import { DetailServiceService } from '../detailService.service';

@Component({
  selector: 'app-userscomponent',
  templateUrl: './userscomponent.component.html',
  styleUrls: ['./userscomponent.component.css']
})
export class UserscomponentComponent implements OnInit {

  constructor(private service:DetailServiceService) { }

  getLogin:any='';
  ngOnInit() {
    this.service.getLoginDetails().subscribe(value=>{
        return this.getLogin=value;
    })
  }

}
