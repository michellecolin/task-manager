import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  public innerWidth;

  constructor() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

}
