import {Component, OnInit} from '@angular/core';
import {Base} from "../../base.service";
import {TypeError, FieldTypeError} from "../../types.factory";
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass', '../../app.component.sass']
})
export class EditComponent implements OnInit {
  filterInput: string;
  filteredTypes: TypeError[] = [];
  types: TypeError[] = [];
  fields: FieldTypeError[] = [];
  title: string;

  constructor(public base: Base) {
  }


  ngOnInit() {

  }
}
