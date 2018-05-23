import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Base} from '../../base.service';
import {TypeError, FieldTypeError} from '../../types.factory';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass', '../../app.component.sass']
})
export class EditComponent implements OnInit {
  @Output() onRemove = new EventEmitter();
  @Output() onCreate = new EventEmitter();
  filterInput: string;
  showModal = false;
  choisedType: TypeError = new TypeError();
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
    this.hide();
    if (!this.choisedType.name) {
      this.onCreate.emit(this.editedType);
      return;
    }
    for (let field in this.choisedType) {
      if (this.choisedType.hasOwnProperty(field)) {
        this.choisedType[field] = this.editedType[field];
      }
    }
  }

  cancel() {
    // this.choisedType = this.editedType;
    this.hide();
  }

  remove() {
    this.onRemove.emit(this.editedType);
    // this.choisedType = this.editedType;
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
