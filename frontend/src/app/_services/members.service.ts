import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDetail } from '../_models/userDetail';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<UserDetail[]>(this.baseUrl + 'users');
  }

  getMember(username: string | undefined) {
    return this.http.get<any>(this.baseUrl + 'users/fullDetails/username/' + username);
  }
}
