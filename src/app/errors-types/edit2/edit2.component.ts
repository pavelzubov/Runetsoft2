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
  showModal = false;
  choisedType: TypeError = new TypeError();
  editedType: TypeError = new TypeError();
  types: TypeError[] = [];
  fields: FieldTypeError[] = [];
  title: string;
  units: any[] = [];
  currentUnit: string;

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

  unitChange(direction: string) {
    if (direction !== 'up' && direction !== 'down') {
      console.log('wrong argument unitChange()');
      return;
    }
    let currentIndex = this.units.findIndex(item => item.selected),
      newCurrent = direction === 'up' ? --currentIndex : ++currentIndex;
    this.units.map(item => item.selected = false);
    if (newCurrent < 0) newCurrent = this.units.length - 1;
    else if (newCurrent > this.units.length - 1) newCurrent = 0;
    this.units[newCurrent].selected = true;
    this.currentUnit = this.units.filter(item => item.selected)[0].name;
  }

  ngOnInit() {
    this.base.getData('entry.json').subscribe(res => {
      this.type = res.response;
      console.log(res.response.entry.items[res.response.entry.items.length - 1].values);
      this.units = res.response.entry.items[res.response.entry.items.length - 1].values;
      this.currentUnit = this.units.filter(item => item.selected)[0].name;
    });
  }
}
