import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public triedToRefresh = false;
  public token;

  public user = 'michelle.colin@desafiofluig.com';
  public password = 'Michelle@123';

  constructor(
    private httpClient: HttpClient,
  ) {}

  getToken() {
    this.httpClient.post<any>(
      `https://app.fluigidentity.com/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=${this.user}&password=${this.password}`,
      {}
    ).subscribe(response => {
      console.log(response);
    });
  }
}
