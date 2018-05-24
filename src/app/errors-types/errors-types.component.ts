import {Component, OnInit, ViewChild} from '@angular/core';
import {Base} from '../base.service';
import {TypeError, FieldTypeError} from '../types.factory';
import {NgModel} from '@angular/forms';
import {EditComponent} from './edit/edit.component';

@Component({
  selector: 'app-errors-types',
  templateUrl: './errors-types.component.html',
  styleUrls: ['./errors-types.component.sass', '../app.component.sass']
})
export class ErrorsTypesComponent implements OnInit {
  @ViewChild(EditComponent)
  edit: EditComponent;
  filterInput: string;
  filteredTypes: TypeError[] = [];
  types: TypeError[] = [];
  fields: FieldTypeError[] = [];
  title: string;

  constructor(public base: Base) {
  }

  filter() {
    this.filteredTypes = this.types.filter(item => this.filterInput ? ~item.name.indexOf(this.filterInput) : true);
  }

  ngOnInit() {
    this.base.getData('directory.json').subscribe(res => {
      this.types = res.response.directory.items;
      this.fields = res.response.directory.fields;
      this.title = res.response.directory.name;
      this.filter();
      console.log(res.response.directory);
    });
  }

  remove(type) {
    this.types.splice(this.types.findIndex(item => item.id === type.id), 1);
    this.filter();
  }

  create(type) {
    this.types.push(type);
    this.filter();
  }
}
