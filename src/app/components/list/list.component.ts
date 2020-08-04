import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  list = [];
  constructor() { }

  ngOnInit(): void {
    this.list = [
      {name: 'Jorge', age: '32'},
      {name: 'Jorge', age: '32'},
      {name: 'Jorge', age: '32'},
      {name: 'Jorge', age: '32'},
      {name: 'Jorge', age: '32'}
    ];
  }

}
