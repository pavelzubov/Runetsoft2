import {Component, OnInit} from '@angular/core';
import {Base} from '../../base.service';
import {TypeError, FieldTypeError} from '../../types.factory';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass', '../../app.component.sass']
})
export class EditComponent implements OnInit {
  filterInput: string;
  showModal = false;
  choisedType: TypeError;
  editedType: TypeError = new TypeError();
  filteredTypes: TypeError[] = [];
  types: TypeError[] = [];
  fields: FieldTypeError[] = [];
  title: string;

  constructor(public base: Base) {
  }

  show(type?: TypeError) {
    this.showModal = true;
    this.choisedType = type || new TypeError();
    this.editedType = Object.assign({}, this.choisedType);
    this.title = type ? type.name : 'Создание нового типа';
  }

  confirm() {
    this.choisedType = this.editedType;
    this.hide();
  }

  hide() {
    this.showModal = false;
  }

  public dateParse(date) {
    return Date.parse(date);
  }

  ngOnInit() {

  }
}
