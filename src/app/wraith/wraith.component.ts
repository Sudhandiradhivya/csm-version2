import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wraith',
  templateUrl: './wraith.component.html',
  styleUrls: ['./wraith.component.css']
})
export class WraithComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  url: string = "../../assets/wr1-g.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
  image:string="../../assets/wr4-b.jpg"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/wr7-y.webp"
  ghost(event: any){
      this.content = event.target.src;
  }
}
