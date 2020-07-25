import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ListModalComponent } from '../list-modal/list-modal.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @ViewChild(ListModalComponent) creatModal;
  public innerWidth;

  constructor() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

  showModal() {
    this.creatModal.show = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

}
