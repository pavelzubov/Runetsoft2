import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {Base} from '../../base.service';
import {TypeError, FieldTypeError, Unit} from '../../types.factory';
import {NgModel, NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass', '../../app.component.sass']
})
export class EditComponent implements OnInit {
  @ViewChild('form') componentForm: NgForm;
  @Output() onRemove = new EventEmitter();
  @Output() onCreate = new EventEmitter();
  units: Unit[];
  showModal = false;
  choisedType: TypeError = new TypeError();
  editedType: TypeError = new TypeError();
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
      this.units = res.response.entry.items;
    });
  }
}
