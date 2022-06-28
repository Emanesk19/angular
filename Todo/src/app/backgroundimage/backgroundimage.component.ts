import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backgroundimage',
  templateUrl: './backgroundimage.component.html',
  styleUrls: ['./backgroundimage.component.css']
})
export class BackgroundimageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.className = "selector";
  }

ngOnDestroy(){
    document.body.className="";
  }
  handleContine(){
    console.log("Continue");
  }

}
