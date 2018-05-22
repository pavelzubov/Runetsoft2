import {Injectable} from "@angular/core";
import {Observable, pipe} from "rxjs/index";
import {map} from "rxjs/internal/operators";
import {HttpClient} from "@angular/common/http";
import {ServerResponse} from "./types.factory";

@Injectable()
export class Base {
  constructor(public http: HttpClient) {
  }

  public getData(url: string): Observable<ServerResponse> {
    return this.http.get('./assets/'+url).pipe(
      map(res => <ServerResponse>res)
    )
  }
}
