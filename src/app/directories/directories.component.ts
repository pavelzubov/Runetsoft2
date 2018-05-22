import {Component, OnInit} from '@angular/core';
import {Base} from "../base.service";
import {Directory} from "../types.factory";

@Component({
  selector: 'app-errors-types',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.sass','../app.component.sass']
})
export class DirectoriesComponent implements OnInit {
  directories:Directory[]=[];
  constructor(public base: Base) {
  }

  ngOnInit() {
    this.base.getData('directories.json').subscribe(res=>{
      this.directories=res.response.directories;
    })
  }
}
