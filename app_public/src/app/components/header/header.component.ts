import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'kafkaesque';

  constructor() { }

  ngOnInit(): void {
  }

  postThought() {
    console.log("posted");
  }

}
