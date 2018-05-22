import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Base} from './base.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {ErrorsTypesComponent} from './errors-types/errors-types.component';
import {DirectoriesComponent} from './directories/directories.component';
import {EditComponent} from "./errors-types/edit/edit.component";

const routes: Routes = [
  {path: '', component: DirectoriesComponent},
  {path: 'errorstypes', component: ErrorsTypesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DirectoriesComponent,
    ErrorsTypesComponent,
    EditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [Base, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
