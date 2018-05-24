import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {Base} from '../../base.service';
import {TypeError, FieldTypeError} from '../../types.factory';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.sass', '../../app.component.sass']
})
export class Edit2Component implements OnInit {
  @ViewChild('form') componentForm: NgForm;
  type: any = {entry: ''};
  showModal = false;
  types: TypeError[] = [];
  fields: FieldTypeError[] = [];
  units: any[] = [];
  currentUnit: string;

  constructor(public base: Base) {
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
    if (newCurrent < 0) {
      newCurrent = this.units.length - 1;
    } else if (newCurrent > this.units.length - 1) {newCurrent = 0;}
    this.units[newCurrent].selected = true;
    this.currentUnit = this.units.filter(item => item.selected)[0].name;
  }

  ngOnInit() {
    this.base.getData('entry.json').subscribe(res => {
      this.type = res.response;
      this.units = res.response.entry.items[res.response.entry.items.length - 1].values;
      this.currentUnit = this.units.filter(item => item.selected)[0].name;
    });
  }
}
