import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {Base} from '../../base.service';
import {TypeError, FieldTypeError} from '../../types.factory';
import {NgModel, NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.sass', '../../app.component.sass']
})
export class Edit2Component implements OnInit {
  @ViewChild('form') componentForm: NgForm;
  @Output() onRemove = new EventEmitter();
  @Output() onCreate = new EventEmitter();
  type: any = {entry: ''};
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
    if (!this.choisedType.name) {
      this.onCreate.emit(Object.assign({}, this.editedType));
      this.hide();
      return;
    }
    for (let field in this.choisedType) {
      if (this.choisedType.hasOwnProperty(field)) {
        this.choisedType[field] = this.editedType[field];
      }
    }
    this.hide();
  }

  cancel() {
    this.hide();
  }

  remove() {
    this.onRemove.emit(this.editedType);
    this.hide();
  }

  hide() {
    this.componentForm.reset();
    this.showModal = false;
  }

  public dateParse(date) {
    return Date.parse(date);
  }

  ngOnInit() {
    this.base.getData('entry.json').subscribe(res => {
      this.type = res.response;
    });
  }
}
