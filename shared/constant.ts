import { HttpHeaders } from "@angular/common/http";
import { RequestOptions } from "@angular/http";

export const HTTPOPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
};

