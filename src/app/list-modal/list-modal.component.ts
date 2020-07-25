import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  @Input() show;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.show = false;
  }

}
